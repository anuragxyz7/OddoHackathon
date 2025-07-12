// src/pages/Profile/Profile.jsx
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Divider,
  IconButton,
  FormControlLabel,
  Switch
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.username || 'Saurav yadav',
    location: 'Manager',
    profilePhoto: user?.profilePhoto || '/default-avatar.png', // Fixed default photo
    skillsOffered: user?.skillsOffered || ['Python', 'Java Script'],
    skillsWanted: user?.skillsWanted || ['Graphic Design', ''],
    availability: 'weekends',
    profileVisibility: 'public' // Added visibility toggle
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleVisibilityToggle = (e) => {
    setFormData(prev => ({
      ...prev,
      profileVisibility: e.target.checked ? 'public' : 'private'
    }));
  };

  const handleSkillChange = (type, index, value) => {
    setFormData(prev => {
      const newSkills = [...prev[type]];
      newSkills[index] = value;
      return { ...prev, [type]: newSkills };
    });
  };

  const addSkill = (type) => {
    setFormData(prev => ({
      ...prev,
      [type]: [...prev[type], '']
    }));
  };

  const removeSkill = (type, index) => {
    setFormData(prev => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    const cleanedData = {
      ...formData,
      skillsOffered: formData.skillsOffered.filter(skill => skill.trim() !== ''),
      skillsWanted: formData.skillsWanted.filter(skill => skill.trim() !== '')
    };
    console.log('Saved:', cleanedData);
    setIsEditing(false);
  };

  const handleDiscard = () => {
    setFormData({
      name: user?.username || 'Saurav yadav',
      location: 'Manager',
      profilePhoto: user?.profilePhoto || '/default-avatar.png',
      skillsOffered: user?.skillsOffered || ['Python', 'Java Script'],
      skillsWanted: user?.skillsWanted || ['Graphic Design', ''],
      availability: 'weekends',
      profileVisibility: 'public'
    });
    setIsEditing(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Typography variant="h4">Profile</Typography>
        {isEditing ? (
          <Box>
            <Button variant="outlined" onClick={handleDiscard} sx={{ mr: 2 }}>
              Discard
            </Button>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          </Box>
        ) : (
          <Button variant="contained" onClick={() => setIsEditing(true)}>
            Edit Profile
          </Button>
        )}
      </Box>

      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            disabled={!isEditing}
          />
          
          <TextField
            fullWidth
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            margin="normal"
            disabled={!isEditing}
          />

          <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
            Skills Offered
            {isEditing && (
              <IconButton onClick={() => addSkill('skillsOffered')} color="primary">
                <AddCircleOutlineIcon />
              </IconButton>
            )}
          </Typography>
          {formData.skillsOffered.map((skill, index) => (
            <Box key={`offered-${index}`} sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                fullWidth
                value={skill}
                onChange={(e) => handleSkillChange('skillsOffered', index, e.target.value)}
                margin="normal"
                disabled={!isEditing}
              />
              {isEditing && (
                <IconButton 
                  onClick={() => removeSkill('skillsOffered', index)} 
                  color="error"
                  sx={{ ml: 1 }}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              )}
            </Box>
          ))}

          <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
            Availability
          </Typography>
          <TextField
            fullWidth
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            margin="normal"
            disabled={!isEditing}
          />

          {/* Added Profile Visibility Toggle */}
          <FormControlLabel
            control={
              <Switch
                checked={formData.profileVisibility === 'public'}
                onChange={handleVisibilityToggle}
                disabled={!isEditing}
                color="primary"
              />
            }
            label={
              <Typography>
                Profile: {formData.profileVisibility === 'public' ? 'Public' : 'Private'}
              </Typography>
            }
            sx={{ mt: 2 }}
          />
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar
              src={formData.profilePhoto}
              sx={{ 
                width: 150, 
                height: 150, 
                mb: 2,
                border: '2px solid #3f51b5'
              }}
            />
            {isEditing && (
              <>
                <Button variant="outlined" component="label" sx={{ mb: 1 }}>
                  {formData.profilePhoto === '/default-avatar.png' ? 'Add Photo' : 'Change Photo'}
                  <input 
                    type="file" 
                    hidden 
                    accept="image/*" 
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          setFormData(prev => ({
                            ...prev,
                            profilePhoto: event.target.result
                          }));
                        };
                        reader.readAsDataURL(e.target.files[0]);
                      }
                    }}
                  />
                </Button>
                {formData.profilePhoto && formData.profilePhoto !== '/default-avatar.png' && (
                  <Button 
                    variant="outlined" 
                    color="error"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      profilePhoto: '/default-avatar.png'
                    }))}
                  >
                    Remove Photo
                  </Button>
                )}
              </>
            )}
          </Box>

          <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
            Skills Wanted
            {isEditing && (
              <IconButton onClick={() => addSkill('skillsWanted')} color="primary">
                <AddCircleOutlineIcon />
              </IconButton>
            )}
          </Typography>
          {formData.skillsWanted.map((skill, index) => (
            <Box key={`wanted-${index}`} sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                fullWidth
                value={skill}
                onChange={(e) => handleSkillChange('skillsWanted', index, e.target.value)}
                margin="normal"
                disabled={!isEditing}
              />
              {isEditing && (
                <IconButton 
                  onClick={() => removeSkill('skillsWanted', index)} 
                  color="error"
                  sx={{ ml: 1 }}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              )}
            </Box>
          ))}
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Swap Requests
      </Typography>
      <Grid container spacing={2}>
        {['Truthful Turtle', 'Reasonable Octopus', 'Velvety Jack'].map((name) => (
          <Grid item xs={12} sm={6} key={name}>
            <Box border={1} borderColor="divider" p={2} borderRadius={1}>
              <Typography variant="h6">{name}</Typography>
              <Typography>Skills: {name.includes('Turtle') ? 'JavaScript' : 'Python'}</Typography>
              <Typography>Availability: Public</Typography>
              <Button variant="outlined" sx={{ mt: 1 }}>View Profile</Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Profile;
