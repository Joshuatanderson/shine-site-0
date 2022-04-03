import { Instagram, Twitter } from "@mui/icons-material";
import {
    Container,
    Grid,
    ScopedCssBaseline,
    SvgIcon,
    Typography,
    Box,
} from "@mui/material";
import { ThemeProvider } from "@mui/private-theming";
import React, { Children, Component } from "react";
import { FaDiscord } from "react-icons/fa";
import { darkTheme } from "../styles/theme";
import Link from "./Link";

interface TitleBarProps {
    title: string;
    children?: any;
}

const classes = {
    title: {
        fontSize: "3.5rem",
    },
    icon: {
        fontSize: 20,
    },
    discordIcon: {
        fontSize: 22,
    },
    container: {
        // https://www.joshwcomeau.com/gradient-generator/
        backgroundImage: `linear-gradient(
        45deg,
        hsl(223deg 75% 9%) 0%,
        hsl(210deg 89% 12%) 26%,
        hsl(203deg 100% 14%) 39%,
        hsl(199deg 100% 16%) 50%,
        hsl(195deg 100% 19%) 61%,
        hsl(191deg 100% 21%) 74%,
        hsl(187deg 97% 23%) 100%
    );`,
        paddingBottom: "48px",
    },
};

const TitleBar = ({ title, children }: TitleBarProps) => {
    return (
        <Container sx={classes.container}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={10}>
                    <Typography variant="h1" align="center" sx={classes.title}>
                        {title}
                    </Typography>
                </Grid>
                <Grid
                    container
                    item
                    xs={1}
                    flexDirection="column"
                    sx={{ position: "absolute", right: 20 }}
                >
                    <Link
                        target="_blank"
                        href="https://twitter.com/ShineMine_io"
                    >
                        <Twitter sx={classes.icon} />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://www.instagram.com/shinemine.io/"
                    >
                        <Instagram sx={classes.icon} />
                    </Link>
                    <Link target="_blank" href="https://discord.gg/exsBtmkpxh">
                        <SvgIcon sx={classes.discordIcon}>
                            <FaDiscord />
                        </SvgIcon>
                    </Link>
                </Grid>
                {children}
            </Grid>
        </Container>
    );
};

export default TitleBar;
