const Feedback = require('../models/Feedback');
const User = require('../models/User'); // Still needed for populate

// 1. Logic for POST /api/feedback
exports.submitFeedback = async (req, res) => {
  try {
    const { user_id, message, rating } = req.body;
    const newFeedback = new Feedback({ user_id, message, rating });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

// 2. Logic for GET /api/feedback
exports.getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find().populate('user_id', 'username');
    res.status(200).json(feedback);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};