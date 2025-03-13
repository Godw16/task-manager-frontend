import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { 
      id: '1', 
      title: 'Implement Authentication', 
      description: 'Create login and signup flows with JWT authentication',
      status: 'In Progress',
      priority: 'High',
      dueDate: '2025-03-20',
    },
    { 
      id: '2', 
      title: 'Design Dashboard UI', 
      description: 'Create wireframes and implement responsive dashboard layout',
      status: 'Completed',
      priority: 'Medium',
      dueDate: '2025-03-10',
    },
    { 
      id: '3', 
      title: 'API Integration', 
      description: 'Connect frontend with backend REST APIs',
      status: 'To Do',
      priority: 'High',
      dueDate: '2025-03-25',
    },
  ],
  statusFilters: ['All', 'To Do', 'In Progress', 'Completed'],
  activeFilter: 'All',
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now().toString(),
        ...action.payload,
      });
    },
    updateTask: (state, action) => {
      const { id } = action.payload;
      const index = state.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const { addTask, updateTask, deleteTask, setFilter } = taskSlice.actions;

export const selectTasks = state => state.tasks.tasks;
export const selectFilteredTasks = state => {
  const { tasks, activeFilter } = state.tasks;
  if (activeFilter === 'All') return tasks;
  return tasks.filter(task => task.status === activeFilter);
};
export const selectFilter = state => state.tasks.activeFilter;
export const selectStatusFilters = state => state.tasks.statusFilters;

export default taskSlice.reducer;