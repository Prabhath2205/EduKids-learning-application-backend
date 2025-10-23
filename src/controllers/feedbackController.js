import Feedback from '../models/Feedback.js'; // Use import and .js extension
import User from '../models/users.js';       // Use import and .js extension

// Logic for POST /api/feedback
const submitFeedback = async (req, res) => { // Removed 'exports.'
  try {
    const { user_id, message, rating } = req.body;
    const newFeedback = new Feedback({ user_id, message, rating });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

// Logic for GET /api/feedback
const getAllFeedback = async (req, res) => { // Removed 'exports.'
  try {
    const feedback = await Feedback.find().populate('user_id', 'childname');
    res.status(200).json(feedback);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

// Export both functions as a single object so feedbackRoutes.js can use them
export default {
    submitFeedback,
    getAllFeedback
};