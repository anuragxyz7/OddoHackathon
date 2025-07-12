import React from 'react';
import { Button } from '@mui/material'; // or your preferred UI library

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-header">
        <img 
          src={user.profilePhoto || '/default-avatar.png'} 
          alt={user.name}
          className="profile-photo"
        />
        <h3>{user.name}</h3>
      </div>
      
      <div className="skills-section">
        <div className="offered">
          <h4>Skills Offered:</h4>
          <p>{user.skillsOffered.join(', ')}</p>
        </div>
        <div className="wanted">
          <h4>Skills Wanted:</h4>
          <p>{user.skillsWanted.join(', ')}</p>
        </div>
      </div>
      
      <div className="rating">
        <span>Rating: {user.rating}/5</span>
      </div>
      
      <Button variant="contained" className="request-btn">
        Request Swap
      </Button>
    </div>
  );
};

export default UserCard;