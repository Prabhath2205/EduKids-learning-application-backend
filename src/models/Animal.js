import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
  label: { type: String, required: true },  // Name of the animal
  image: { type: String, required: true },  // Visual representation URL
  audio: { type: String, required: true },  // Pronunciation audio URL
}, { timestamps: true });

export default mongoose.model("Animal", animalSchema);

