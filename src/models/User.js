const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // We don't need all user details for now,
  // just a placeholder to satisfy the 'populate'
  username: {
    type: String,
    required: true,
  }
  // You would add more fields here later like email, password, etc.
});

const User = mongoose.model('User', userSchema);
module.exports = User;