import React from 'react';
import './UserProfile.css';
import { useNavigate } from 'react-router-dom';

const SweepRequest = () => {
  const navigate = useNavigate();
  
  const user = {
    name: 'Tanmay',
    skillsOffered: ['JavaScript', 'Python'],
    skillsWanted: ['BlockChain', 'Dance'],
    rating: 5,
    reviews: 29
  };

  const handleAccept = () => {
    console.log('Request accepted');
    navigate('/swap-confirmation');
  };

  const handleReject = () => {
    console.log('Request rejected');
    navigate('/');
  };

  return (
    <div className="sweep-request-container">
      <div className="profile-header">
        <div className="avatar">
          {user.name.charAt(0)}
        </div>
        <h2 className="username">{user.name}</h2>
      </div>

      <div className="skills-section">
        <div className="skills-group">
          <h3 className="section-title">Skills offered:</h3>
          <div className="skills-list">
            {user.skillsOffered.map((skill, index) => (
              <span key={`offered-${index}`} className="skill-tag offered">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-group">
          <h3 className="section-title">Skills wanted:</h3>
          <div className="skills-list">
            {user.skillsWanted.map((skill, index) => (
              <span key={`wanted-${index}`} className="skill-tag wanted">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="rating-section">
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="star">★</span>
          ))}
        </div>
        <span className="reviews">({user.reviews} reviews)</span>
      </div>

    
    </div>
  );
};

export default UserProfile;