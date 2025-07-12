// src/pages/BrowsePage.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/pagination/Pagination';

const BrowsePage = () => {
  // Sample data
  const users = [
    {
      id: 1,
      name: 'Mark Demo',
      skillsOffered: ['JavaScript', 'Python'],
      skillsWanted: ['Graphic Design'],
      rating: 3.9
    },
    // Add more users...
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Skill Swap Platform
      </Typography>
      
      <SearchBar />
      
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
      
      <Pagination />
    </Container>
  );
};

export default BrowsePage;