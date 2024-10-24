import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6DA14E',  // for buttons
    },
    secondary: {
      main: '#2C423F',  // background and darker accents
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      color: '#FFFFFF',
    },
    body1: {
      fontSize: '1rem',
      color: '#FFFFFF',
    },
  },
});

export default theme;
