import { Container, Grid, ScopedCssBaseline, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/private-theming";
import React, { Children, Component } from "react";
import { darkTheme } from "../styles/theme";

interface TitleBarProps {
    title: string;
    children?: any;
}

const classes = {
    title: {
        fontSize: "4rem",
    },
};

const TitleBar = ({ title, children }: TitleBarProps) => {
    return (
        <Container sx={{ paddingBottom: "48px" }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h1" align="center" sx={classes.title}>
                        {title}
                    </Typography>
                </Grid>
                {children}
            </Grid>
        </Container>
    );
};

export default TitleBar;
