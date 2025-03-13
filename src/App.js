import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import theme from './theme/theme';
import { store } from './redux/store';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
    </Provider>
  );
}

export default App;