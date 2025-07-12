// src/pages/Auth/Login.jsx
import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Alert,
  CircularProgress,
  Link
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  // Enhanced dummy user database with more realistic data
  const dummyUsers = [
    { 
      username: 'alex', 
      password: 'alex123', 
      profilePhoto: 'https://i.pravatar.cc/150?img=3',
      skillsOffered: ['JavaScript', 'React'],
      skillsWanted: ['Graphic Design']
    },
    { 
      username: 'sarah', 
      password: 'sarah123', 
      profilePhoto: 'https://i.pravatar.cc/150?img=5',
      skillsOffered: ['Python', 'Data Analysis'],
      skillsWanted: ['UI/UX Design']
    },
    { 
      username: 'mike', 
      password: 'mike123', 
      profilePhoto: 'https://i.pravatar.cc/150?img=7',
      skillsOffered: ['Java', 'Spring Boot'],
      skillsWanted: ['Mobile Development']
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password');
      return;
    }

    setLoading(true);
    setError('');

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
      const user = dummyUsers.find(
        u => u.username.toLowerCase() === username.toLowerCase() && 
             u.password === password
      );

      if (user) {
        login({
          username: user.username,
          profilePhoto: user.profilePhoto,
          skillsOffered: user.skillsOffered,
          skillsWanted: user.skillsWanted
        });
        navigate('/');
      } else {
        setError('Invalid username or password. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ 
      py: 4,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '70vh',
      justifyContent: 'center'
    }}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom
        sx={{ mb: 4, fontWeight: 'bold' }}
      >
        Welcome Back
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Username"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoFocus
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{ mb: 1 }}
        />
        
        <Link 
          href="#" 
          variant="body2" 
          sx={{ 
            display: 'block', 
            textAlign: 'right',
            mb: 3
          }}
        >
          Forgot password?
        </Link>
        
        <Button 
          fullWidth 
          variant="contained" 
          size="large"
          type="submit"
          disabled={loading}
          sx={{ 
            mt: 2,
            py: 1.5,
            fontSize: '1rem'
          }}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            'Sign In'
          )}
        </Button>
      </form>

      <Typography 
        variant="body2" 
        align="center" 
        sx={{ mt: 3 }}
      >
        Don't have an account?{' '}
        <Link href="#" fontWeight="medium">
          Sign up
        </Link>
      </Typography>
    </Container>
  );
};

export default Login;