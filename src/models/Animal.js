const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  label: { type: String, required: true },  // Name of the animal
  image: { type: String, required: true },  // Visual representation URL
  audio: { type: String, required: true },  // Pronunciation audio URL
}, { timestamps: true });

module.exports = mongoose.model("Animal", animalSchema);
