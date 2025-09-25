import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  childname: { type: String, required: true, trim: true },
  dob: { type: Date, required: true },
  role: {
    type: String,
    enum: ["teacher", "parent", "guardian", "sibling"], // ✅ allowed only
    required: true,
  },
  email: { type: String, required: true, unique: true, lowercase: true },
  phonenumber: { type: String, required: true },
  password: { type: String, required: true, minlength: 6 }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
