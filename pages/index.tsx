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
import {
    CloudCircleOutlined,
    CloudOutlined,
    PersonOutline,
} from "@mui/icons-material";
import { jsx } from "@emotion/react";

const Home: NextPage = () => {
    const classes = {
        icon: {
            fontSize: 80,
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
                    <Container sx={{ paddingBottom: "48px" }}>
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
                                    Earn passive BNB rewards through tokenized
                                    mining.
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
                    <Container sx={{ paddingBottom: "48px" }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h1" align="center">
                                    Solving the mining problem
                                </Typography>
                            </Grid>
                            <Grid container item xs={12} sm={6} spacing={3}>
                                <Grid item xs justifyContent="center">
                                    <Typography align="center">
                                        <PersonOutline
                                            color="secondary"
                                            sx={classes.icon}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={8}>
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
                                <Grid item xs>
                                    <Typography align="center">
                                        <CloudOutlined
                                            color="secondary"
                                            sx={classes.icon}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Typography variant="h3">
                                        Cloud mining
                                    </Typography>
                                    <Typography variant="body2">
                                        Cloud mining tries to correct this
                                        problem but fails by canceling out its
                                        pros with its cons. While it eliminates
                                        the need for technical skills and lowers
                                        the barrier to entry it requires price
                                        minimums and contracts that can lock you
                                        in for 1-2 years. Many also limit the
                                        crypto you can mine and it further
                                        centralizes cryptocurrency mining.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>

            <ThemeProvider theme={yellowTheme}>
                <ScopedCssBaseline>
                    <Container sx={{ paddingBottom: "48px" }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h3">
                                    ShineMine is the better way to mine
                                </Typography>
                                <Typography variant="body2">
                                    ShineMine breaks down all of these barriers
                                    and allows anyone to get involved with
                                    crypto mining. ShineMine is a tokenized
                                    crypto mining operation that allows anyone
                                    to reap the profits of crypto mining at any
                                    price point regardless of their knowledge or
                                    experience with crypto. All someone needs to
                                    do is hold SHINE tokens to participate. Once
                                    SHINE tokens are purchased, the benefits of
                                    crypto mining begin, without the drawbacks.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
        </>
    );
};

export default Home;
