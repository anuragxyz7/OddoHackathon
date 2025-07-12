import User from '../models/User.js';

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // 1. Find user
    const user = await User.findOne({ username });
    
    // 2. If user doesn't exist or password doesn't match
    if (!user || user.password !== password) {
      return res.status(401).json({ 
        success: false,
        message: 'Invalid username or password' 
      });
    }

    // 3. On successful login
    res.json({
      success: true,
      user: {
        username: user.username,
        profilePhoto: user.profilePhoto || '/default-avatar.png'
      }
    });

  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Server error' 
    });
  }
};