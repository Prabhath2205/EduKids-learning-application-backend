const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
  label: { type: String, required: true },    // the actual word
  image: { type: String, required: true },    // URL or path to image
  audio: { type: String, required: true },    // URL or path to pronunciation audio
}, { timestamps: true }); // optional: keeps track of createdAt/updatedAt

module.exports = mongoose.model("Word", wordSchema);
