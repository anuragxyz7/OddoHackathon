// src/pages/Auth/Login.jsx
import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xs" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <TextField
        fullWidth
        label="Email"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
      />
      <Button 
        fullWidth 
        variant="contained" 
        sx={{ mt: 3 }}
        onClick={() => navigate('/browse')}
      >
        Login
      </Button>
    </Container>
  );
};

export default Login;