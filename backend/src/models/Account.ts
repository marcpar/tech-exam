import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
  address: { type: String, required: true, unique: true },
  balance: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Account", AccountSchema);