import {
    Container,
    Divider,
    Grid,
    ScopedCssBaseline,
    SvgIcon,
    Typography,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import React, { Children, Component } from "react";
import { darkTheme, lightTheme } from "../styles/theme";
import Link from "../components/Link";
import { Box } from "@mui/system";
import { Instagram, Telegram, Twitter } from "@mui/icons-material";
import { FaDiscord } from "react-icons/fa";
import { isAbsolute } from "node:path/win32";

const classes = {
    footer: {
        position: "relative",
        width: "100%",

        backgroundColor: darkTheme.palette.background.default, // needs manual spec due to abs position
        padding: darkTheme.spacing(3),
    },
    footerCont: {
        width: "100%",
    },
    icon: {
        fontSize: 20,
    },
    discordIcon: {
        fontSize: 22,
    },
};

const Footer = () => {
    return (
        <Box sx={classes.footerCont}>
            <ThemeProvider theme={darkTheme}>
                <ScopedCssBaseline>
                    <Divider />
                    <Box component="div" sx={classes.footer}>
                        {/* <Container spacing={3}> */}
                        <Grid container item xs={12}>
                            <Grid container item xs={8} flexDirection="column">
                                <Grid item xs>
                                    <Typography variant="body1">
                                        © 2022 ShineMine. All rights reserved.
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body1">
                                        <Link href="/buy">Buy SHINE</Link>
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body1">
                                        <Link href="https://storageapi.fleek.co/joshuatanderson-team-bucket/white%20paper%203.1.0.pdf">
                                            Whitepaper
                                        </Link>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={4}
                                flexDirection="column"
                                justifyContent="center"
                                alignContent="center"
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
                                <Link
                                    target="_blank"
                                    href="https://discord.gg/exsBtmkpxh"
                                >
                                    <SvgIcon sx={classes.discordIcon}>
                                        <FaDiscord />
                                    </SvgIcon>
                                </Link>
                                <Link
                                    target="_blank"
                                    href="https://t.me/+qb0dOY9UZOE4OWEx"
                                >
                                    <Telegram sx={classes.icon} />
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </ScopedCssBaseline>
            </ThemeProvider>
        </Box>
    );
};

export default Footer;
