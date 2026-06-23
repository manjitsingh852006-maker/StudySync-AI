import mongoose from "mongoose";

const summarySchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },

  summary: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Summary = mongoose.model(
  "Summary",
  summarySchema
);

export default Summary;