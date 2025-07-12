import mongoose from 'mongoose';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

// Sample users data
const users = [
  { username: 'alex', password: 'alex123' },
  { username: 'sarah', password: 'sarah123' },
  { username: 'mike', password: 'mike123' }
];

const insertSampleUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing users
    await User.deleteMany({});
    console.log('Cleared existing users');

    // Insert new users
    await User.insertMany(users);
    console.log('Inserted sample users:');
    console.log(users);

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

insertSampleUsers();