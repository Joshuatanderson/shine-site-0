import "@fontsource/roboto";
import "@fontsource/bebas-neue";
import CssBaseline from "@mui/material/CssBaseline";

import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { ThemeProvider } from "@mui/system";
import { lightTheme } from "../styles/theme";
import { ScopedCssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <CssBaseline>
                <ThemeProvider theme={lightTheme}>
                    <Header />

                    <Component {...pageProps} />
                </ThemeProvider>
            </CssBaseline>
        </>
    );
}

export default MyApp;
