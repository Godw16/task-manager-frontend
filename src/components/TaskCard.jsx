import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  CardActions,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'High':
      return '#ff6b6b';
    case 'Medium':
      return '#feca57';
    case 'Low':
      return '#1dd1a1';
    default:
      return '#A9B5DF';
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Completed':
      return '#2D336B';
    case 'In Progress':
      return '#7886C7';
    case 'To Do':
      return '#A9B5DF';
    default:
      return '#A9B5DF';
  }
};

const TaskCard = ({ task, onEdit, onDelete }) => {
  const { id, title, description, status, priority, dueDate } = task;

  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Card sx={{ mb: 2, bgcolor: '#ffffff' }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
          <Typography variant="h6" component="div" noWrap sx={{ mb: 1, fontWeight: 600 }}>
            {title}
          </Typography>
          <Chip 
            label={priority} 
            size="small" 
            sx={{ 
              bgcolor: getPriorityColor(priority),
              color: '#ffffff',
              fontWeight: 500,
              fontSize: '0.7rem'
            }} 
          />
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: '40px' }}>
          {description.length > 100 ? `${description.substring(0, 100)}...` : description}
        </Typography>
        
        <Box display="flex" alignItems="center" mb={1} sx={{ color: 'text.secondary' }}>
          <CalendarTodayIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">
            {formatDate(dueDate)}
          </Typography>
        </Box>

        <Chip 
          label={status} 
          size="small" 
          sx={{ 
            bgcolor: getStatusColor(status),
            color: '#ffffff',
            fontWeight: 500
          }} 
        />
      </CardContent>

      <CardActions sx={{ justifyContent: 'flex-end', pb: 2, px: 2 }}>
        <IconButton 
          size="small" 
          onClick={onEdit}
          sx={{ color: '#7886C7' }}
        >
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton 
          size="small" 
          onClick={onDelete}
          sx={{ color: '#ff6b6b' }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TaskCard;