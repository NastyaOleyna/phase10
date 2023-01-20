const { createTheme } = require("@mui/material/styles");

export const Colors = {
  primary: "#faf4e9",
  secondary: "#4058a8",
  dark: "#2c4080",
  light: "#526bbd",
  border: "#DDDFE1",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#4f68bb",
};


const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary
    },
    secondary: {
      main: Colors.secondary
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        paper: {
          color: Colors.white,
        }
      }
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },


})
export default theme
