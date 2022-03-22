import { ThemeProvider } from "@emotion/react";
import { Container, Grid, ScopedCssBaseline, Typography } from "@mui/material";
import React from "react";
import TitleBar from "../components/TitleBar";
import { darkTheme } from "../styles/theme";

const Faq = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ScopedCssBaseline>
                <TitleBar title="faq" />
            </ScopedCssBaseline>
        </ThemeProvider>
    );
};

export default Faq;
