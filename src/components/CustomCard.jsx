import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function CustomCard({ title, tech, description, link }) {
  return (
<Card
  sx={{
    height: '100%',
    maxWidth: 350, // this keeps the card from growing too wide
    mx: 'auto', // center it
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    p: 2,
    borderRadius: 2,
    backgroundColor: '#2b2b2b',
    color: '#87ceeb',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)',
    },
  }}
>

      <CardContent>
        <Typography gutterBottom sx={{ color: '#b7410e', fontSize: 14 }}>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {tech}
        </Typography>
        <Typography sx={{ color: '#ccc', mb: 1.5 }}>Description</Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#fff',
            display: '-webkit-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          startIcon={<GitHubIcon />}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: '#b7410e',
            '&:hover': { backgroundColor: '#9a350c' },
            textTransform: 'none',
          }}
        >
          GitHub Repo
        </Button>
      </CardActions>
    </Card>
  );
}
