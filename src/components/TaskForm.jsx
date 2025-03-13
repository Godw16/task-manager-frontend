import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';

const initialFormState = {
  title: '',
  description: '',
  status: 'To Do',
  priority: 'Medium',
  dueDate: '',
};

const TaskForm = ({ open, onClose, onSubmit, task }) => {
  const [formData, setFormData] = useState(initialFormState);
  const isEditMode = Boolean(task?.id);

  useEffect(() => {
    if (task) {
      setFormData(task);
    } else {
      setFormData(initialFormState);
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialFormState);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {isEditMode ? 'Edit Task' : 'Create New Task'}
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                name="title"
                label="Task Title"
                type="text"
                fullWidth
                variant="outlined"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="description"
                name="description"
                label="Description"
                type="text"
                fullWidth
                variant="outlined"
                multiline
                rows={3}
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="dense">
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                  labelId="status-label"
                  id="status"
                  name="status"
                  value={formData.status}
                  label="Status"
                  onChange={handleChange}
                >
                  <MenuItem value="To Do">To Do</MenuItem>
                  <MenuItem value="In Progress">In Progress</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="dense">
                <InputLabel id="priority-label">Priority</InputLabel>
                <Select
                  labelId="priority-label"
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  label="Priority"
                  onChange={handleChange}
                >
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="dueDate"
                name="dueDate"
                label="Due Date"
                type="date"
                fullWidth
                variant="outlined"
                value={formData.dueDate}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button 
            onClick={onClose} 
            variant="outlined" 
            color="primary"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
          >
            {isEditMode ? 'Update Task' : 'Add Task'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default TaskForm;