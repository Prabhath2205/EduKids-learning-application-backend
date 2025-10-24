import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    userEmail: String,
    userName: String,
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);
