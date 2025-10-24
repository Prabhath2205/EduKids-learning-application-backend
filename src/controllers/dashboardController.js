import User from "../models/users.js";
import Feedback from "../models/Feedback.js";

// Get total user count
export const getUserCount = async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get total feedback count
export const getFeedbackCount = async (req, res) => {
  try {
    const count = await Feedback.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get this month's feedback count
export const getMonthlyFeedback = async (req, res) => {
  try {
    const startOfMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      1
    );
    const count = await Feedback.countDocuments({
      createdAt: { $gte: startOfMonth },
    });
    res.json({ thisMonth: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all feedback
export const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find()
      .sort({ createdAt: -1 })
      .populate("userId", "childname email");
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
