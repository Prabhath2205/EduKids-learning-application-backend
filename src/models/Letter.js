const mongoose = require("mongoose");

const letterSchema = new mongoose.Schema({
  letter: { type: String, required: true, unique: true },
  audioUrl: { type: String },  // admin will update later
  type: { type: String, required: true }, // e.g. SWA01, VYA01
});

export default mongoose.model("Letter", letterSchema);
