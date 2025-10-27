// supabase/functions/create-checkout-session/index.ts

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@12.17.0?target=deno";

const STRIPE_SECRET = Deno.env.get("STRIPE_SECRET");
if (!STRIPE_SECRET) throw new Error("Missing STRIPE_SECRET");

const stripe = new Stripe(STRIPE_SECRET, {
  httpClient: Stripe.createFetchHttpClient(),
  apiVersion: "2024-06-20",
});

const REDIRECT_BASE = "https://kincsesterkep.com";

// Map exact competition names to Stripe Price IDs
const PRICE_BY_COMP: Record<string, string> = {
  "The Lost Pirate Gold": "price_1SMgx42cuBeiyoJUDraXBcyS_lostpirate",
  "Pharaoh's Forgotten Tomb": "price_1SMgxx2cuBeiyoJUpG3qmLSc_pharaoh",
  "The Dragon's Hoard": "price_1SMgyI2cuBeiyoJUeSjjxVwH_dragon",
  "The Arctic Expedition": "price_1SMgyb2cuBeiyoJUV4UUGDxK_arctic",
  "The Urban Treasure Trail": "price_1SMgz62cuBeiyoJU0qhkN0XP_urban",
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
  if (req.method === "OPTIONS") return json({}, 200);
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const body = await req.json().catch(() => ({}));
    const competition = String(body.competition || "");
    const email = String(body.email || "");
    const teamSizeRaw = Number(body.teamSize ?? 1);
    const teamSize = Number.isFinite(teamSizeRaw) && teamSizeRaw > 0 ? Math.floor(teamSizeRaw) : 1;

    // Define user id if you send it from the client (recommended)
    const user_id = String(body.userId || body.user_id || "");

    if (!competition || !PRICE_BY_COMP[competition]) {
      return json({ error: "Unknown or missing competition" }, 400);
    }
    if (!email) {
      return json({ error: "Missing email" }, 400);
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: PRICE_BY_COMP[competition],
          quantity: teamSize, // quantity reflects team size
        },
      ],
      // Redirects after checkout
      success_url: `${REDIRECT_BASE}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${REDIRECT_BASE}/cancel.html`,

      customer_email: email,
      // If you pass a user id from the client, this makes it easy to reconcile in the webhook
      client_reference_id: user_id || undefined,
      metadata: {
        user_id,
        competition,
        team_size: String(teamSize),
      },
    });

    return json({ url: session.url });
  } catch (err) {
    console.error("create-checkout-session error:", err);
    return json({ error: "Server error creating session" }, 500);
  }
});