import React, { useState } from 'react';
import { Avatar, Button, Typography, Box, Rating, Snackbar, Alert } from '@mui/material';
import '../UserCard.css';
<<<<<<< HEAD
import { useAuth } from '../contexts/AuthContext';


const UserCard = ({ user }) => {
  const { isAuthenticated } = useAuth(); // Get auth status
  const [openSnackbar, setOpenSnackbar] = useState(false);
=======
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <Box className="user-card-container" sx={{ marginLeft: '24px' }}>
      <Avatar 
        src={user.profilePhoto} 
        alt={user.name}
        sx={{ 
          width: 70, 
          height: 70,
          marginRight: '20px',
          fontSize: '28px',
          backgroundColor: '#3f51b5',
          fontFamily: "'Roboto', sans-serif"
        }}
      >
        {user.name.charAt(0)}
      </Avatar>
>>>>>>> 9c5d4ec (xyz)

  const handleRequestClick = () => {
    if (!isAuthenticated) {
      setOpenSnackbar(true);
      return;
    }
    // Proceed with request logic if authenticated
    console.log('Request sent to:', user.name);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Box className="user-card-container" sx={{ marginLeft: '24px' }}>
        <Avatar 
          src={user.profilePhoto} 
          alt={user.name}
          sx={{ 
            width: 70, 
            height: 70,
            marginRight: '20px',
            fontSize: '28px',
            backgroundColor: '#3f51b5',
            fontFamily: "'Roboto', sans-serif"
          }}
        >
          {user.name.charAt(0)}
        </Avatar>

        <Box className="user-info">
          <Typography variant="h5" fontWeight="bold" fontFamily="'Roboto', sans-serif">
            {user.name}
          </Typography>
          
          <Box className="skills-section">
            <Typography variant="body1" fontFamily="'Roboto', sans-serif">
              <span className="skill-label">Skills offered:</span> {user.skillsOffered.join(', ')}
            </Typography>
            <Typography variant="body1" fontFamily="'Roboto', sans-serif">
              <span className="skill-label">Skills wanted:</span> {user.skillsWanted.join(', ')}
            </Typography>
          </Box>
          
          <Box className="rating-section">
            <Rating 
              value={user.rating} 
              precision={0.1} 
              readOnly 
              size="medium"
            />
            <Typography variant="body1" ml={1} fontFamily="'Roboto', sans-serif">
              ({user.totalRatings} reviews)
            </Typography>
          </Box>
        </Box>

        <Button 
          variant="contained" 
          color="primary"
          onClick={handleRequestClick}
          sx={{
            marginLeft: 'auto',
            alignSelf: 'center',
            minWidth: '120px',
            height: '42px',
            fontSize: '16px',
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 'bold'
          }}
        >
          REQUEST
        </Button>
      </Box>

<<<<<<< HEAD
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
=======
      <Button 
        onClick={() => navigate("/request")}  // Now properly using the navigate function
        variant="contained" 
        color="primary"
        sx={{
          marginLeft: 'auto',
          alignSelf: 'center',
          minWidth: '120px',
          height: '42px',
          fontSize: '16px',
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 'bold'
        }}
>>>>>>> 9c5d4ec (xyz)
      >
        <Alert onClose={handleCloseSnackbar} severity="warning" sx={{ width: '100%' }}>
          Please login first to send a request
        </Alert>
      </Snackbar>
    </>
  );
};

export default UserCard;