import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.ALCHEMY_URL) {
  throw new Error("❌ Missing ALCHEMY_URL in environment");
}

const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_URL);

export const getGasPrice = async (): Promise<bigint> => {
  try {
    const feeData = await provider.getFeeData();
    console.log("📊 Fee Data:", feeData);

    if (!feeData.gasPrice) {
      throw new Error("Gas price unavailable from provider");
    }

    return feeData.gasPrice;
  } catch (err) {
    console.error("🔥 Error in getGasPrice:", err);
    throw err;
  }
};

export const getBlockNumber = async () => {
  try {
    const blockNumber = await provider.getBlockNumber();
    console.log("🔢 Block Number:", blockNumber);
    return blockNumber;
  } catch (err) {
    console.error("🔥 Error in getBlockNumber:", err);
    throw err;
  }
};

export const getBalance = async (address: string) => {
  try {
    const balance = await provider.getBalance(address);
    console.log(`💰 Balance for ${address}:`, balance.toString());
    return balance;
  } catch (err) {
    console.error("🔥 Error in getBalance:", err);
    throw err;
  }
};