import express from "express";
import ethRoutes from "./routes/ethRoutes";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectWithRetry from "./services/dbService";


const app = express();
app.use(express.json());
app.use("/api", ethRoutes);

export default app;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});

// mongoose.connect(process.env.MONGO_URI!)
//   .then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch(err => console.error("Mongo connection error:", err));

connectWithRetry();