// src/components/TaskList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Typography,
  Grid,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  selectFilteredTasks,
  selectFilter,
  selectStatusFilters,
  setFilter,
} from '../redux/taskSlice';
import TaskCard from './TaskCard';

const TaskList = ({ onEditTask, onDeleteTask }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const tasks = useSelector(selectFilteredTasks);
  const currentFilter = useSelector(selectFilter);
  const statusFilters = useSelector(selectStatusFilters);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChangeFilter = (event, newValue) => {
    dispatch(setFilter(statusFilters[newValue]));
  };

  const getCurrentFilterIndex = () => {
    return statusFilters.findIndex(filter => filter === currentFilter);
  };

  return (
    <Box sx={{ width: '100%', mt: 3 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={getCurrentFilterIndex()}
          onChange={handleChangeFilter}
          variant={isMobile ? "scrollable" : "standard"}
          scrollButtons={isMobile ? "auto" : false}
          allowScrollButtonsMobile
          centered={!isMobile}
        >
          {statusFilters.map((filter, index) => (
            <Tab 
              label={filter} 
              key={index} 
              sx={{ 
                fontWeight: 500,
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: 'primary.main',
                  fontWeight: 700,
                }
              }}
            />
          ))}
        </Tabs>
      </Box>

      {tasks.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography variant="body1" color="text.secondary">
            No tasks found. Add a new task to get started!
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {tasks.map((task) => (
            <Grid item xs={12} sm={6} md={4} key={task.id}>
              <TaskCard
                task={task}
                onEdit={() => onEditTask(task)}
                onDelete={() => onDeleteTask(task.id)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default TaskList;