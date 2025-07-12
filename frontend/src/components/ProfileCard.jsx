import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ profile }) => {
    const navigate = useNavigate();
  return (
    <div className="profile-card">
      <div className="profile-left">
        <img 
          src={profile.profilePhoto} 
          alt={profile.name} 
          className="profile-photo"
        />
      </div>
      
      <div className="profile-middle">
        <h3>{profile.name}</h3>
        
        <div className="skills-section">
          <div className="skills-offered">
            <h4>Skills offered:</h4>
            <div className="skills-tags">
              {profile.skillsOffered.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="skills-wanted">
            <h4>Skills wanted:</h4>
            <div className="skills-tags">
              {profile.skillsWanted.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="rating">
          Rating: {profile.rating}/5 ({profile.totalRatings} reviews)
        </div>
      </div>
      
      <div className="profile-right">
        <button onClick={() => navigate("/request")}  className="request-button">asda</button>
      </div>
    </div>
  );
};

export default ProfileCard;