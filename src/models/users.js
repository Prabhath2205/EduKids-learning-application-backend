import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  childname: {
    type: String,
    required: [true, "Child name is required"]
  },
  dob: {
    type: Date,
    required: [true, "Date of birth is required"]
  },
  role: {
    type: String,
    required: [true, "Role is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid email"]
  },
  phonenumber: {
    type: String,
    required: [true, "Phone number is required"],
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v);
      },
      message: "Phone number should be exactly 10 digits"
    }
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"]
    // DO NOT add maxlength here if you hash passwords!
  }
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export default mongoose.model("User", userSchema);