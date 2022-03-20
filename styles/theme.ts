// import { ThemeOptions } from '@mui/material/styles/';

import { createTheme, ThemeOptions } from "@mui/material";

const dark = "#212936";
const yellow = "#F2C04A";
const white = "#fff";
const coral = "#E07453";
const seafoam = "#80BDB9";

export const theme = createTheme({
  palette: {
    // mode: 'light',
    primary: {
      main: dark,
    },
    secondary: {
      main: yellow,
    },
    text: {
        primary: white
    }
  },
  components: {
    MuiAppBar: {
        styleOverrides: {
            colorInherit: {
                backgroundColor: dark,
                color: white,
              },
        }
      },
  }
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: yellow,
        },
        secondary: {
            main: white,
        },
        text: {
            primary: white
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                colorInherit: {
                    backgroundColor: yellow,
                    color: dark,
                  },
            }
          },
      }
});

export const yellowTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: yellow,
        },
        secondary: {
            main: white,
        },
        text: {
            primary: dark
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorInherit: {
                    backgroundColor: '#689f38',
                    color: '#fff',
                  },
            }
          },
      }
});