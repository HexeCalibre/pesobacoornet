import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PESOBACOORNET
          </Typography>
          <Button color="inherit">Jobs</Button>
          <Button color="inherit">Job Fairs</Button>
          <Button color="inherit">Trainings</Button>
          <Button color="inherit">Career Advocacy</Button>
          <Button color="inherit">Accredited Employers</Button>
          <Button color="inherit">SIGN UP</Button>
          <Button color="inherit">LOGIN</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}