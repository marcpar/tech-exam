"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCache = exports.getCache = void 0;
const redis_1 = require("redis");
const client = (0, redis_1.createClient)({ url: process.env.REDIS_URL });
let isConnected = false;
const ensureConnected = async () => {
    if (!isConnected) {
        await client.connect();
        isConnected = true;
    }
};
const getCache = async (key) => {
    await ensureConnected();
    return await client.get(key);
};
exports.getCache = getCache;
const setCache = async (key, value, ttl) => {
    await ensureConnected();
    await client.set(key, value, { EX: ttl });
};
exports.setCache = setCache;
