import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "https://esm.sh/stripe@14.22.0?target=deno";

const STRIPE_SECRET = Deno.env.get("STRIPE_SECRET")!;
const STRIPE_WEBHOOK_SECRET = Deno.env.get("STRIPE_WEBHOOK_SECRET")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE")!;

const stripe = new Stripe(STRIPE_SECRET, { apiVersion: "2024-06-20" });

export default async (req: Request) => {
  const sig = req.headers.get("stripe-signature");
  if (!sig) return new Response("No signature", { status: 400 });

  const rawBody = await req.text();
  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return new Response(`Webhook Error: ${(err as Error).message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Only proceed once Stripe confirms payment
    if (session.payment_status !== "paid") {
      return new Response("ignored (not paid)", { status: 200 });
    }

    const competition = session.metadata?.competition ?? "";
    const team_size   = Number(session.metadata?.team_size ?? "1");
    const user_id     = session.metadata?.user_id ?? session.client_reference_id ?? null;

    // Insert (idempotent) — requires a UNIQUE index on registrations.stripe_session_id
    const res = await fetch(`${SB_URL}/rest/v1/registrations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SERVICE_ROLE,
        "Authorization": `Bearer ${SERVICE_ROLE}`,
        "Prefer": "resolution=merge-duplicates,return=minimal"
      },
      body: JSON.stringify({
        user_id,
        competition,
        team_size,
        paid: true,
        stripe_session_id: session.id
      })
    });

    if (!res.ok) {
      console.error("Failed to insert registration:", await res.text());
    }

    return new Response("ok", { status: 200 });
  }

  return new Response("ok", { status: 200 });
};