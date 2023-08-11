"use client"
import React from 'react';
 

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
  
 
  
const Contact_us = (props) => {
  //const classes = useStyles();

  const content = {
    'header': 'Lorem ipsum dolor sit amet',
    'description': 'Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.',
    'contact1': 'Address',
    'contact1-desc1': '1652 Cordia Cir',
    'contact1-desc2': ' Newton, North Carolina(NC), 28658',
    'contact2': 'Email',
    'contact2-desc': 'hello@mui.dev',
    'contact3': 'Social Media',
    'contact4': 'Phone',
    'contact4-desc': '(318) 285-9856',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" component="h2" gutterBottom={true}>{content['header']}</Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div  >
                <Box display="flex" mb={3}>
                  <div>
                    <Avatar  >
                      <RoomIcon color="primary" fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>{content['contact1']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact1-desc1']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact1-desc2']}</Typography>
                  </Box>
                </Box>
                <Box display="flex">
                  <div>
                    <Avatar >
                      <EmailIcon color="primary" fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>{content['contact2']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact2-desc']}</Typography>
                  </Box>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" mb={3}>
                <div>
                  <Avatar >
                    <WebAssetIcon color="primary" fontSize="small" />
                  </Avatar>
                </div>
                <Box ml={2}>
                  <Typography variant="h6" gutterBottom={true}>{content['contact3']}</Typography>
                  <IconButton href="#" color="inherit">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton href="#" color="inherit">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton href="#" color="inherit">
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Box>
              <Box display="flex">
                <div>
                  <Avatar >
                    <PhoneIcon color="primary" fontSize="small" />
                  </Avatar>
                </div>
                <Box ml={2}>
                  <Typography variant="h6" gutterBottom={true}>{content['contact4']}</Typography>
                  <Typography variant="body2" color="textSecondary">{content['contact4-desc']}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}



export default Contact_us;