import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Store password in plaintext (not recommended for production)
});

export default mongoose.model("Admin", adminSchema);
