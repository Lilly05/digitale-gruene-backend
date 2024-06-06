const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: Number,
  birtdate: String,
  address: String,
  place: String,
  zip: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;
