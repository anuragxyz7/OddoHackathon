import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const searchUsers = async (skill) => {
  const response = await axios.get(`${API_URL}/search?skill=${skill}`);
  return response.data;
};