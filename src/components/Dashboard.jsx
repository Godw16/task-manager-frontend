import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Box,
  Paper,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { addTask, updateTask, deleteTask } from '../redux/taskSlice';
import Navbar from './Navbar';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const Dashboard = () => {
  const [openForm, setOpenForm] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenForm = () => {
    setEditTask(null);
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setEditTask(null);
  };

  const handleEditTask = (task) => {
    setEditTask(task);
    setOpenForm(true);
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleSubmitTask = (taskData) => {
    if (editTask) {
      dispatch(updateTask(taskData));
    } else {
      dispatch(addTask(taskData));
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar onAddTask={handleOpenForm} />
      
      <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: isMobile ? 2 : 4, 
                borderRadius: 2,
                bgcolor: 'secondary.light',
                mb: 3
              }}
            >
              <Typography variant="h4" component="h1" gutterBottom>
                Task Dashboard
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Manage your Daily Tasks with our task management system. Add, edit, and track tasks with ease.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: isMobile ? 2 : 4, 
                borderRadius: 2,
              }}
            >
              <TaskList 
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <TaskForm
        open={openForm}
        onClose={handleCloseForm}
        onSubmit={handleSubmitTask}
        task={editTask}
      />

      <Box 
        component="footer" 
        sx={{ 
          py: 3, 
          px: 2, 
          mt: 'auto',
          bgcolor: 'primary.main',
          color: 'white'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © 2025 Task Manager
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;