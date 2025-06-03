import React from 'react';
import { Box, Grid } from '@mui/material';
import CustomCard from './CustomCard';

export default function ProjectGrid() {
  return (
    <Box sx={{ backgroundColor: '#1e1e1e', p: 4, minHeight: '100vh' }}>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomCard
            title="Movie App"
            tech="React JS / CSS / API"
            description="A movie app that shows trending films, supports search, and has a working favorites page."
            link="https://github.com/med-afk7/Moviesapp-apicalling"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomCard
            title="Tic-Tac-Toe Bot"
            tech="C++ / Minimax AI"
            description="A bot that plays Tic-Tac-Toe using the Minimax algorithm for optimal moves."
            link="https://github.com/med-afk7/learningc-"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomCard
            title="Gym App"
            tech="HTML / CSS / JS / PHP"
            description="A gym app with barcode login and SQL tracking of workouts and user sessions."
            link="https://github.com/med-afk7"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
