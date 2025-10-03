const express = require("express");
const router = express.Router();
const { addWord, deleteWord, getWords, updateWord,addAnimal, getAnimals, deleteAnimal, updateAnimal } = require("../controllers/adminController");

// Word management (CRUD) - no login/auth for now
router.post("/words", addWord);
router.get("/words", getWords);
router.put("/words/:id", updateWord);
router.delete("/words/:id", deleteWord);

router.post("/animals", addAnimal);
router.get("/animals", getAnimals);
router.put("/animals/:id", updateAnimal);
router.delete("/animals/:id", deleteAnimal);

module.exports = router;
