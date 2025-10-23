import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    // The 'ref' property links this to a 'User' model (to be created later)
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Feedback', feedbackSchema); 

