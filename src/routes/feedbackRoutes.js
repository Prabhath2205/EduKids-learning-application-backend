import express from 'express';
// We import the controller as a default object, which is how we export it below
import feedbackController from '../controllers/feedbackController.js'; 

const router = express.Router();

// The lines linking the URL to the controller function remain the same
router.post('/submit', feedbackController.submitFeedback);
router.get('/view', feedbackController.getAllFeedback);

// Final, clean ES Module export
export default router;