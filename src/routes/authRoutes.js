import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { loginAdmin } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/admin/login", loginAdmin);

export default router;
