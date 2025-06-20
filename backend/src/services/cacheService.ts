import { createClient } from "redis";

const client = createClient({ url: process.env.REDIS_URL });

let isConnected = false;
const ensureConnected = async () => {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
  }
};

export const getCache = async (key: string) => {
  await ensureConnected();
  return await client.get(key);
};

export const setCache = async (key: string, value: string, ttl: number) => {
  await ensureConnected();
  await client.set(key, value, { EX: ttl });
};