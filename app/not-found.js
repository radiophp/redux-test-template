"use client"
import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { usePathname } from 'next/navigation';
 
export default function HttpCode(props) {
  const currentPath = usePathname();  

  const content = {
    'image': 'nereus-assets/img/illustrations/error.svg',
    'code': 'Whoops!',
    'header': 'Something went wrong!',
    'description': 'Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus.',
    'primary-action': 'Return to the homepage',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="sm">
        <Box pt={6} pb={10} textAlign="center">
          <img src={content['image']} alt=""   />
          <Typography variant="h3" color="primary">{content['code']}</Typography>
          <Typography variant="h3" component="h2" gutterBottom={true}>{content['header']}<br />The current path is: <b>{currentPath}</b></Typography>
          <Typography variant="subtitle1" color="textSecondary">{content['description']} , </Typography>
          <Box mt={3}>
            <Button variant="contained" color="primary">{content['primary-action']}</Button>
          </Box>
          
        </Box>
      </Container>
    </section>
  );
}