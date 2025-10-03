const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const User = require('../models/User'); 

// Route to handle user feedback submission
router.post('/', async (req, res) => {
  try {
    const { user_id, message, rating } = req.body;
    const newFeedback = new Feedback({ user_id, message, rating });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

// Route to handle admin retrieval of all feedback
router.get('/', async (req, res) => {
  try {
    const feedback = await Feedback.find().populate('user_id', 'username');
    res.status(200).json(feedback);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

module.exports = router;