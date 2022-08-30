import "@fontsource/roboto";
import "@fontsource/bebas-neue";
import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from "next/router";
import { useEffect } from "react";

import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Box, ThemeProvider } from "@mui/system";
import { lightTheme } from "../styles/theme";
import Footer from "../components/Footer";
import { pageview } from "../lib/ga";

const classes = {
    app: {
        minHeight: "calc(100vh - 104px)",
    },
};

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            pageview(url);
        };
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on("routeChangeComplete", handleRouteChange);

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);
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
