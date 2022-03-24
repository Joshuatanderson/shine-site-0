import "@fontsource/roboto";
import "@fontsource/bebas-neue";
import CssBaseline from "@mui/material/CssBaseline";

import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Box, ThemeProvider } from "@mui/system";
import { lightTheme } from "../styles/theme";
import Footer from "../components/Footer";

const classes = {
    app: {
        minHeight: "calc(100vh - 104px)",
    },
};

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <CssBaseline>
                <ThemeProvider theme={lightTheme}>
                    <Box component="div" sx={classes.app}>
                        <Header />

                        <Component {...pageProps} />
                    </Box>
                    <Footer />
                </ThemeProvider>
            </CssBaseline>
        </>
    );
}

export default MyApp;
