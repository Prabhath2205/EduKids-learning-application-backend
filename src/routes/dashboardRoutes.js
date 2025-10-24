import express from "express";
import {
  getUserCount,
  getFeedbackCount,
  getMonthlyFeedback,
  getAllFeedback,
} from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/user-count", getUserCount);
router.get("/feedback-count", getFeedbackCount);
router.get("/monthly-feedback", getMonthlyFeedback);
router.get("/all-feedback", getAllFeedback);

export default router;
