// supabase/functions/create-checkout-session/index.ts
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@12.17.0?target=deno";

const STRIPE_SECRET = Deno.env.get("STRIPE_SECRET");
if (!STRIPE_SECRET) throw new Error("Missing STRIPE_SECRET");

const stripe = new Stripe(STRIPE_SECRET, {
  httpClient: Stripe.createFetchHttpClient(),
  apiVersion: "2024-06-20",
});

// Set this to your production (or dev) site origin
const REDIRECT_BASE = "https://kincsesterkep.com";

// Competition name -> Stripe Price ID (replace with your real Price IDs)
const PRICE_BY_COMP: Record<string, string> = {
  "The Lost Pirate Gold":       "price_1SMgx42cuBeiyoJUDraXBcyS_lostpirate",
  "Pharaoh's Forgotten Tomb":   "price_1SMgxx2cuBeiyoJUpG3qmLSc_pharaoh",
  "The Dragon's Hoard":         "price_1SMgyI2cuBeiyoJUeSjjxVwH_dragon",
  "The Arctic Expedition":      "price_1SMgyb2cuBeiyoJUV4UUGDxK_arctic",
  "The Urban Treasure Trail":   "price_1SMgz62cuBeiyoJU0qhkN0XP_urban",
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "authorization,apikey,content-type",
      "Access-Control-Allow-Methods": "POST,OPTIONS",
    },
  });
}

serve(async (req) => {
  if (req.method === "OPTIONS") return json({});
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const body = await req.json().catch(() => ({}));
    const competition = String(body.competition || "");
    const email = String(body.email || "");
    const teamSize = Number(body.teamSize || 1);
    // If you pass a user id from the client, read it here (optional)
    const userId = body.user_id ? String(body.user_id) : undefined;

    // ✅ use the correct map name
    if (!competition || !PRICE_BY_COMP[competition]) {
      return json({ error: "Unknown or missing competition" }, 400);
    }
    if (!email) return json({ error: "Missing email" }, 400);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: PRICE_BY_COMP[competition],
          quantity: 1, // or teamSize if you charge per person
        },
      ],
      // Redirects after checkout
      success_url: `${REDIRECT_BASE}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${REDIRECT_BASE}/cancel.html`,

      customer_email: email,
      // Only set these if you actually have a value
      ...(userId ? { client_reference_id: userId } : {}),
      metadata: {
        ...(userId ? { user_id: userId } : {}),
        competition,
        team_size: String(teamSize),
      },
    });

    return json({ url: session.url });
  } catch (err) {
    // Surface a bit more info while developing
    console.error("create-checkout-session error:", err);
    const msg = err && typeof err === "object" && "message" in err ? (err as any).message : "Unknown error";
    return json({ error: `Server error creating session: ${msg}` }, 500);
  }
});