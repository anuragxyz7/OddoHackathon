import React from 'react';
import { Container, Typography } from '@mui/material';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/pagination/Pagination';
import { mockUsers } from '../components/data/mockUsers';

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ mb: 4 }}>
        Skill Swap Platform
      </Typography>
      
      <SearchBar />
      
      {mockUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
      
      <Pagination />
    </Container>
  );
};

export default Home;