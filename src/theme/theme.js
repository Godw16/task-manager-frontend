import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2D336B',
      light: '#7886C7',
    },
    secondary: {
      main: '#A9B5DF',
      light: '#FFF2F2',
    },
    background: {
      default: '#FFF2F2',
      paper: '#FFF2F2',
    },
    text: {
      primary: '#2D336B',
      secondary: '#7886C7',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: '#2D336B',
    },
    h2: {
      fontWeight: 600,
      color: '#2D336B',
    },
    h3: {
      fontWeight: 600,
      color: '#2D336B',
    },
    h4: {
      fontWeight: 500,
      color: '#2D336B',
    },
    button: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '10px 24px',
        },
        containedPrimary: {
          backgroundColor: '#2D336B',
          '&:hover': {
            backgroundColor: '#7886C7',
          },
        },
        outlinedPrimary: {
          borderColor: '#2D336B',
          color: '#2D336B',
          '&:hover': {
            borderColor: '#7886C7',
            backgroundColor: 'rgba(120, 134, 199, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#2D336B',
        },
      },
    },
  },
});

export default theme;