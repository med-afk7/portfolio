import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function OutlinedCard3() {
  return (
    <Box sx={{ minWidth: 275, padding: 2 }}>
      <Card variant="outlined" sx={{ backgroundColor: '#1e1e2f', color: 'white', borderRadius: 2 }}>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'gray', fontSize: 14 }}>
            GYM App
          </Typography>
          <Typography variant="h5" component="div">
            HTML / CSS / JS / PHP
          </Typography>
          <Typography sx={{ color: 'lightgray', mb: 1.5 }}>
            Description
          </Typography>
          <Typography variant="body2">
            Gym app that tracks your workouts and signs you<br />
            into your gym via barcodes. Includes a working SQL database.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href="https://github.com/med-afk7" // Ideally: link directly to this repo
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#24292e',
              '&:hover': { backgroundColor: '#333' },
              textTransform: 'none',
              fontWeight: 'bold'
            }}
          >
            GitHub Repo
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
