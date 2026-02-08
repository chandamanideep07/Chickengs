import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN
});

export default async function handler(req, res) {
  // Get all tickets from Redis list
  const data = await redis.lrange("tickets", 0, -1);
  const tickets = data.map(t => JSON.parse(t));

  return res.status(200).json(tickets);
}
