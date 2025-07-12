import React from 'react';
import { Container, Typography } from '@mui/material';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/pagination/Pagination';

const Home = () => {
  // Sample data - same as BrowsePage
  const users = [
    {
      id: 1,
      name: 'Mark Demo',
      skillsOffered: ['JavaScript', 'Python'],
      skillsWanted: ['Graphic Design'],
      rating: 3.9,
      profilePhoto: ''
    },
    {
      id: 2,
      name: 'Michelle',
      skillsOffered: ['JavaScript', 'Python'],
      skillsWanted: ['Graphic Design'],
      rating: 2.5,
      profilePhoto: ''
    },
    {
      id: 3,
      name: 'Joe Wills',
      skillsOffered: ['JavaScript', 'Python'],
      skillsWanted: ['Graphic Design'],
      rating: 4.0,
      profilePhoto: ''
    }
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ mb: 4 }}>
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

export default Home;