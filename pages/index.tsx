import type { NextPage } from "next";
import Head from "next/head";
import classNames from "classnames";

import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    createStyles,
    CssBaseline,
    Grid,
    ScopedCssBaseline,
    ThemeProvider,
    Typography,
} from "@mui/material";
import { darkTheme, lightTheme, yellowTheme } from "../styles/theme";
import CloudIcon from "@mui/icons-material/Cloud";
import { CloudCircleOutlined, CloudOutlined } from "@mui/icons-material";
import { jsx } from "@emotion/react";

const Home: NextPage = () => {
    const classes = {
        icon: {
            fontSize: 80,
            display: "inlineBlock",
        },
    };

    return (
        <>
            <Head>
                <title>ShineMine</title>
                <meta name="description" content="A new way to mine" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={darkTheme}>
                <ScopedCssBaseline>
                    <Container sx={{ paddingBottom: "24px" }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h1" align="center">
                                    A new way to mine
                                </Typography>
                                <Typography
                                    color="secondary"
                                    variant="body1"
                                    align="center"
                                    fontStyle="italic"
                                >
                                    The cryptocurrency that keeps paying you
                                    back through tokenized mining that’s
                                    accessible to anyone
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                container
                                justifyContent="space-around"
                            >
                                <Button variant="contained" color="primary">
                                    Buy Shine
                                </Button>
                                <Button variant="contained" color="primary">
                                    View Whitepaper
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
            <ThemeProvider theme={lightTheme}>
                <ScopedCssBaseline>
                    <Container>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h1" align="center">
                                    There's a mining problem
                                </Typography>
                            </Grid>
                            <Grid container item xs={12} sm={6}>
                                <Grid item>
                                    <Typography variant="h3">
                                        Solo Mining
                                    </Typography>
                                    <Typography variant="body2">
                                        Cryptocurrency mining was once dominated
                                        by individuals and their home computers.
                                        To solo mine now requires hardware that
                                        is expensive, loud, consumes a lot of
                                        energy, requires technical knowledge,
                                        and generates a significant amount of
                                        heat. A mining rig alone can cost tens
                                        of thousands of dollars and finding a
                                        suitable hosting facility is time
                                        consuming and costly.
                                    </Typography>
                                </Grid>
                                <Grid container item>
                                    <Typography component="span" variant="h3">
                                        Cloud mining
                                    </Typography>
                                    <Grid container item>
                                        <Grid item>
                                            <CloudOutlined
                                                color="secondary"
                                                sx={classes.icon}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2">
                                                Cloud mining tries to correct
                                                this problem but fails by
                                                canceling out its pros with its
                                                cons. While it eliminates the
                                                need for technical skills and
                                                lowers the barrier to entry it
                                                requires price minimums and
                                                contracts that can lock you in
                                                for 1-2 years. Many also limit
                                                the crypto you can mine and it
                                                further centralizes
                                                cryptocurrency mining.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
        </>
    );
};

export default Home;
