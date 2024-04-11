// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
}, { collection: 'TestUser' }); // Specify the collection name here

const User = mongoose.model('User', userSchema);

module.exports = User;
