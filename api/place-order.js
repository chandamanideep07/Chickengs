import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { item, quantity, extras } = req.body;

  const ticket = {
    id: Date.now(),
    item,
    quantity,
    extras,
    time: new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
  };

  // Push ticket to Redis list
  await redis.lpush("tickets", JSON.stringify(ticket));

  return res.status(200).json({
    success: true,
    ticket
  });
}
