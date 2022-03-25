import { Instagram, Twitter } from "@mui/icons-material";
import {
    Container,
    Grid,
    ScopedCssBaseline,
    SvgIcon,
    Typography,
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
        fontSize: "4rem",
    },
    icon: {
        fontSize: 20,
    },
    discordIcon: {
        fontSize: 22,
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
