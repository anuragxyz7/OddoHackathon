// src/components/UserCard/UserCard.jsx
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Avatar, 
  Button, 
  Box,
  Divider
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const UserCard = ({ user }) => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ width: 56, height: 56, mr: 2 }}>
            {user.name.charAt(0)}
          </Avatar>
          <Typography variant="h6">{user.name}</Typography>
        </Box>
        
        <Divider sx={{ my: 1 }} />
        
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle2">Skills Offered:</Typography>
          <Typography>{user.skillsOffered.join(', ')}</Typography>
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2">Skills Wanted:</Typography>
          <Typography>{user.skillsWanted.join(', ')}</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {[...Array(5)].map((_, i) => (
            <StarIcon 
              key={i} 
              sx={{ color: i < Math.floor(user.rating) ? 'gold' : 'grey' }} 
            />
          ))}
          <Typography sx={{ ml: 1 }}>{user.rating}/5</Typography>
        </Box>
        
        <Button 
          variant="contained" 
          fullWidth
          sx={{ bgcolor: 'primary.main' }}
        >
          Request Swap
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserCard;