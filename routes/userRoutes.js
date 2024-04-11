// routes/userRoutes.js
const express = require('express');
const User = require('../models/TestUser');

const router = express.Router();

// Route to handle user registration
router.post('/register', async (req, res) => {
  const { username, email, phone, password } = req.body;

  // Basic validation
  if (!username || !email || !phone || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: 'Email already registered' });
  }

  try {
    // Create new user object
    const newUser = new User({
      username,
      email,
      phone,
      password,
    });

    // Save user to database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
    console.log(`User ${username} regsitered`);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
