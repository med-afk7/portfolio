import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function OutlinedCard2() {
  return (
    <Box sx={{ minWidth: 275, padding: 2 }}>
      <Card variant="outlined" sx={{ backgroundColor: '#1e1e2f', color: 'white', borderRadius: 2 }}>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'gray', fontSize: 14 }}>
            Tic-Tac-Toe Bot
          </Typography>
          <Typography variant="h5" component="div">
            C++ / Agent-Oriented Programming
          </Typography>
          <Typography sx={{ color: 'lightgray', mb: 1.5 }}>
            Description
          </Typography>
          <Typography variant="body2">
            A bot that plays Tic-Tac-Toe with you.<br />
            Uses simple AI algorithms — specifically the Minimax algorithm.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href="https://github.com/med-afk7/learningc-"
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
