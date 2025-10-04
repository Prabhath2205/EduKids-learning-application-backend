import express from "express";
const router = express.Router();

import {addWord, deleteWord, getWords, updateWord,addAnimal, getAnimals, deleteAnimal, updateAnimal} from "../controllers/adminController.js";

// Word management (CRUD) - no login/auth for now
router.post("/words", addWord);
router.get("/words", getWords);
router.put("/words/:id", updateWord);
router.delete("/words/:id", deleteWord);

router.post("/animals", addAnimal);
router.get("/animals", getAnimals);
router.put("/animals/:id", updateAnimal);
router.delete("/animals/:id", deleteAnimal);

export default router;
