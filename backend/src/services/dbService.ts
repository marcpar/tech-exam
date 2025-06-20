import mongoose from "mongoose";

const connectWithRetry = () => {
  const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/ethapi";

  console.log("📡 Attempting to connect to MongoDB..." + process.env.MONGO_URI);

  mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("✅ Successfully connected to MongoDB");
    })
    .catch((err) => {
      console.error("❌ Mongo connection failed, retrying in 5s...");
      console.error(err.message);
      setTimeout(connectWithRetry, 5000);
    });
};

export default connectWithRetry;