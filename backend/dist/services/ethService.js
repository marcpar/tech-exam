"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = exports.getBlockNumber = exports.getGasPrice = void 0;
const ethers_1 = require("ethers");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const provider = new ethers_1.ethers.JsonRpcProvider(process.env.ALCHEMY_URL);
const getGasPrice = async () => {
    const feeData = await provider.getFeeData();
    if (!feeData.gasPrice) {
        throw new Error("Gas price unavailable from provider");
    }
    return feeData.gasPrice;
};
exports.getGasPrice = getGasPrice;
const getBlockNumber = async () => {
    return await provider.getBlockNumber();
};
exports.getBlockNumber = getBlockNumber;
const getBalance = async (address) => {
    return await provider.getBalance(address);
};
exports.getBalance = getBalance;
