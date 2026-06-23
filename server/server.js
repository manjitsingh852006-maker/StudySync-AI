import quizRoutes from "./routes/quizRoutes.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import summaryRoutes from "./routes/summaryRoutes.js";

dotenv.config();

/* Connect MongoDB */
connectDB();

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/summary", summaryRoutes);

/* Test Route */
app.get("/", (req, res) => {
  res.send("StudySync AI Backend Running");
});

/* Server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});