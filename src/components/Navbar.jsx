// src/components/Navbar.jsx
import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Button,
  useMediaQuery,
  useTheme,
  IconButton
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';

const Navbar = ({ onAddTask }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <DashboardIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        {isMobile ? (
          <IconButton 
            color="inherit" 
            onClick={onAddTask}
            size="large"
          >
            <AddIcon />
          </IconButton>
        ) : (
          <Button 
            variant="contained" 
            startIcon={<AddIcon />}
            onClick={onAddTask}
            sx={{ 
              bgcolor: 'secondary.main', 
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'secondary.light',
              }
            }}
          >
            Add Task
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;