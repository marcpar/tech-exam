"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const AccountSchema = new mongoose_1.default.Schema({
    address: { type: String, required: true, unique: true },
    balance: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
});
exports.default = mongoose_1.default.model("Account", AccountSchema);
