const express = require('express');
const router = express.Router();
// Import the functions from the new controller file
const feedbackController = require('../controllers/feedbackController');

// POST /api/feedback  -> sends request to the submitFeedback function
router.post('/', feedbackController.submitFeedback);

// GET /api/feedback   -> sends request to the getAllFeedback function
router.get('/', feedbackController.getAllFeedback);

module.exports = router;