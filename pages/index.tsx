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
import {
    CloudOutlined,
    PersonOutline,
    SearchOutlined,
    CurrencyBitcoinOutlined,
    SolarPowerOutlined,
} from "@mui/icons-material";
import ReactPlayer from "react-player";

// import explainerVid from "../public/explainer.mov";

const Home: NextPage = () => {
    const classes = {
        icon: {
            fontSize: 80,
        },
        whiteUnderline: {
            textDecorationColor: lightTheme.palette.common.white,
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
                                    <Box
                                        component="u"
                                        sx={classes.whiteUnderline}
                                    >
                                        ShineMine
                                    </Box>{" "}
                                    is the better way to mine
                                </Typography>
                                <Typography variant="body2">
                                    ShineMine breaks down barriers and allows
                                    anyone to get involved with crypto mining.
                                </Typography>
                                <Typography variant="body2">
                                    ShineMine is a tokenized crypto mining
                                    operation that allows anyone to reap the
                                    profits of crypto mining at any price point
                                    regardless of their knowledge or experience
                                    with crypto.
                                </Typography>
                                <Typography variant="body2">
                                    All someone needs to do is hold SHINE tokens
                                    to participate. Once SHINE tokens are
                                    purchased, the benefits of crypto mining
                                    begin, without the drawbacks.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {/* <ReactPlayer src={explainerVid}></ReactPlayer> */}
                            </Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
                <ThemeProvider theme={lightTheme}>
                    <ScopedCssBaseline>
                        <Container
                            sx={{ marginTop: "48px", marginBottom: "48px" }}
                        >
                            <Grid container spacing={3}>
                                <Grid item container justifyContent="center">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                    >
                                        Buy Shine
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                    >
                                        View Whitepaper
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </ScopedCssBaseline>
                </ThemeProvider>
                <ThemeProvider theme={darkTheme}>
                    <ScopedCssBaseline>
                        <Container
                            sx={{ marginTop: "48px", paddingBottom: "48px" }}
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h2" color="secondary">
                                        Why Shine
                                    </Typography>
                                </Grid>
                                <Grid container item xs={12} sm={6} spacing={3}>
                                    <Grid container item xs={12} spacing={3}>
                                        <Grid item xs={3}>
                                            <CurrencyBitcoinOutlined
                                                sx={classes.icon}
                                            />
                                        </Grid>
                                        <Grid item xs>
                                            <Typography
                                                variant="h6"
                                                color="secondary"
                                            >
                                                No Minimum
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="secondary"
                                            >
                                                Start crypto mining at any price
                                                point
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <Grid item xs={3}>
                                            <SearchOutlined
                                                sx={classes.icon}
                                            ></SearchOutlined>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography
                                                variant="h6"
                                                color="secondary"
                                            >
                                                Transparent
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="secondary"
                                            >
                                                Activities and team are public
                                                and its code is open source
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <Grid item xs={3}>
                                            <SolarPowerOutlined
                                                sx={classes.icon}
                                            />
                                        </Grid>
                                        <Grid item xs container>
                                            <Typography
                                                variant="h6"
                                                color="secondary"
                                            >
                                                Carbon neutral
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="secondary"
                                            >
                                                Solves the problem of the high
                                                heat mining produces
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </ScopedCssBaseline>
                </ThemeProvider>
            </ThemeProvider>
        </>
    );
};

export default Home;
