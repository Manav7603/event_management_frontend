import * as React from 'react';
import {
  Popover,
  Avatar,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Link
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Person as PersonIcon,
  Work as WorkIcon
} from '@mui/icons-material';

const UserInfoCard = () => {
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    address: '123 Main Street, New York, USA',
    position: 'Event Manager',
    photo: 'https://example.com/photo.jpg' 
  };

  return (
    <div>
   
      
        <Box sx={{ 
          p: 3, 
          maxWidth: 300,
          backgroundColor: 'background.paper'
        }}>
          {/* Profile Section */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            mb: 2 
          }}>
            <Avatar
              alt={userData.name}
              src={userData.photo}
              sx={{ 
                width: 80, 
                height: 80,
                mb: 2
              }}
            />
            <Typography variant="h6" gutterBottom>
              {userData.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {userData.position}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Contact Info List */}
          <List dense>
            <ListItem>
              <ListItemIcon>
                <EmailIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Email" 
                secondary={userData.email} 
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <PhoneIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Phone" 
                secondary={userData.phone} 
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <LocationIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Address" 
                secondary={userData.address} 
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Position" 
                secondary={userData.position} 
              />
            </ListItem>
          </List>
        </Box>
    
    </div>
  );
};

export default UserInfoCard;
