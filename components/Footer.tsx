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
import { Instagram, Twitter } from "@mui/icons-material";
import { FaDiscord } from "react-icons/fa";
import { isAbsolute } from "node:path/win32";

const classes = {
    footer: {
        position: "relative",
        width: "100%",

        backgroundColor: darkTheme.palette.background.default, // needs manual spec due to abs position
        padding: darkTheme.spacing(3),
        // marginTop: "18px",
    },
    footerCont: {
        position: "absolute",
        bottom: 0,
        width: "100%",
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
                                        <Link href="https://storageapi.fleek.co/joshuatanderson-team-bucket/white paper 2.2.0.pdf">
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
                                <Twitter
                                    href="https://twitter.com/ShineMine_io"
                                    target="_blank"
                                />
                                <Instagram
                                    target="_blank"
                                    href="https://www.instagram.com/shinemine.io/"
                                />
                                <SvgIcon
                                    target="_blank"
                                    href="https://discord.gg/exsBtmkpxh"
                                >
                                    <FaDiscord />
                                </SvgIcon>
                            </Grid>
                        </Grid>
                        {/* </Container> */}
                    </Box>
                </ScopedCssBaseline>
            </ThemeProvider>
        </Box>
    );
};

export default Footer;
