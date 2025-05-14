import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../css/project1.css'


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function but() {

}
const card = (
  <React.Fragment>
    <CardContent className='card-c'>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        RSA encryption using GMP 
      </Typography>
      <Typography variant="h5" component="div">
       C++ / IMP library
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Discription</Typography>
      <Typography variant="body2">
       This is a simple encryption and decryption tool that uses RSA.<br/> The GMP library is utilized to handle large number<br></br> calculations, ensuring the security of the information.
      </Typography>
    </CardContent>
    <CardActions>
      <a href="https://github.com/med-afk7" target="_blank" rel="noopener noreferrer" className='gitbtn'>
  <button><GitHubIcon /></button>
</a>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard3() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
