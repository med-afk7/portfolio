import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275, padding: 2 }}>
      <Card variant="outlined" sx={{ backgroundColor: '#1e1e2f', color: 'white', borderRadius: 2 }}>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'gray', fontSize: 14 }}>
            Movie App
          </Typography>
          <Typography variant="h5" component="div">
            React JS, CSS, API Calling
          </Typography>
          <Typography sx={{ color: 'lightgray', mb: 1.5 }}>
            Description
          </Typography>
          <Typography variant="body2">
            A movie app that displays current top movies.<br />
            Includes a working search bar with API integration,<br />
            and a favorites page to save your picks.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href="https://github.com/med-afk7/Moviesapp-apicalling"
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
