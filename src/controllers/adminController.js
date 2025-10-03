import Word from "../models/Word.js";
import Animal from "../models/Animal.js"; 
// Add a new word
export const addWord = async (req, res) => {
  try {
    const word = new Word(req.body);
    const saved=await word.save();
    console.log("Saved Word:", saved);
    res.json({ message: "Word added", word });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all words
export const getWords = async (req, res) => {
  try {
    const words = await Word.find();
    res.json(words);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a word
export const updateWord = async (req, res) => {
  try {
    const updatedWord = await Word.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedWord) return res.status(404).json({ message: "Word not found" });
    res.json({ message: "Word updated", word: updatedWord });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a word
export const deleteWord = async (req, res) => {
  try {
    const deletedWord = await Word.findByIdAndDelete(req.params.id);
    if (!deletedWord) return res.status(404).json({ message: "Word not found" });
    res.json({ message: "Word deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Add animal
export const addAnimal = async (req, res) => {
  try {
    const animal = new Animal(req.body);
    const saved = await animal.save();
    res.json({ message: "Animal added", animal: saved });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all animals
export const getAnimals = async (req, res) => {
  try {
    const animals = await Animal.find({});
    res.json(animals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete animal
export const deleteAnimal = async (req, res) => {
  try {
    await Animal.findByIdAndDelete(req.params.id);
    res.json({ message: "Animal deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update animal
export const updateAnimal = async (req, res) => {
  try {
    const updated = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Animal updated", animal: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//export default { addWord, deleteWord, updateWord, getWords, addAnimal, getAnimals, deleteAnimal, updateAnimal };

