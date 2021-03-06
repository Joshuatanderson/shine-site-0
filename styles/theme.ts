import { createTheme, ThemeOptions } from "@mui/material";

export const dark = "#212936";
export const yellow = "#F2C04A";
export const lightYellow = "#FBDF78";
export const white = "#fff";
export const coral = "#E07453";
export const seafoam = "#80BDB9";

const base: ThemeOptions = {
    typography: {
        fontFamily: '"Roboto", "Helvetica", sans-serif',
        h1: {
            fontFamily: "'Bebas Neue', sans-serif",
        },
        h2: {
            fontFamily: "'Bebas Neue', sans-serif",
        },
        h3: {
            fontFamily: "'Bebas Neue', sans-serif",
        },
        h4: {
            fontFamily: "'Bebas Neue', sans-serif",
        },
        h5: {
            fontFamily: "'Bebas Neue', sans-serif",
        },
        h6: {
            fontFamily: "'Bebas Neue', sans-serif",
        },
        body1: {
            fontFamily: '"Roboto Condensed", "Helvetica", sans-serif',
        },
    },
};

export const lightTheme = createTheme({
    ...base,
    palette: {
        // mode: 'light',
        primary: {
            main: dark,
        },
        secondary: {
            main: yellow,
        },
        text: {
            primary: dark,
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorInherit: {
                    backgroundColor: dark,
                    color: white,
                },
            },
        },
    },
});

export const darkTheme = createTheme({
    ...base,
    palette: {
        mode: "dark",
        primary: {
            main: yellow,
        },
        secondary: {
            main: white,
        },
        text: {
            primary: yellow,
        },
        background: {
            paper: dark,
            default: dark,
        },
    },
    // components: {
    //     MuiButton: {
    //         styleOverrides: {
    //             colorInherit: {
    //                 backgroundColor: yellow,
    //                 color: dark,
    //               },
    //         }
    //       },
    //   }
});

export const yellowTheme = createTheme({
    ...base,
    palette: {
        // mode: 'light',
        primary: {
            main: yellow,
        },
        secondary: {
            main: white,
        },
        text: {
            primary: dark,
            secondary: white,
        },
        background: {
            paper: lightYellow,
            default: lightYellow,
        },
    },
});
