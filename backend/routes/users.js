const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all public users
router.get('/', async (req, res) => {
  try {
    const users = await User.find({ isPublic: true });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Search users by skill
router.get('/search', async (req, res) => {
  const { skill } = req.query;
  
  try {
    const users = await User.find({
      isPublic: true,
      $or: [
        { skillsOffered: { $regex: skill, $options: 'i' } },
        { skillsWanted: { $regex: skill, $options: 'i' } }
      ]
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;