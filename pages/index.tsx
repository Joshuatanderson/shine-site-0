import type { NextPage } from "next";
import Head from "next/head";

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
import ReactPlayer from "react-player/youtube";
import TitleBar from "../components/TitleBar";
import Image from "next/image";

import Amb from "../public/featured/amb.png";
import Benzinga from "../public/featured/Benzinga.png";
import CryptoDaily from "../public/featured/cryptodaily.png";
import Yahoo from "../public/featured/Yahoo.png";
import NewsBtc from "../public/featured/newsBtc.png";
import Link from "../components/Link";
import { palette } from "@mui/system";

const classes = {
    icon: {
        fontSize: 80,
    },
    whiteUnderline: {
        textDecorationColor: lightTheme.palette.common.white,
    },
    section: {
        paddingTop: "48px",
        paddingBottom: "48px",
    },
    playerWrapper: {
        position: "relative",
    },
    reactPlayer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
    },
};

const images = [Yahoo, Amb, Benzinga, CryptoDaily, NewsBtc];

const makeImages = images.map((img, index) => (
    <Grid
        key={`featured_${index}`}
        container
        item
        xs={5}
        sm={3}
        alignContent="center"
    >
        <Box
            component={Image}
            src={img}
            sx={{
                filter: "grayscale(100%)",
                WebkitFilter: "grayscale(100%)",
                transition: "all .3s",
                "&:hover": {
                    filter: "grayscale(0%)",
                    WebkitFilter: "grayscale(0%)",
                },
            }}
        />
    </Grid>
));

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>ShineMine</title>
                <meta name="description" content="A new way to mine" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={darkTheme}>
                <ScopedCssBaseline>
                    <TitleBar title="a new way to mine">
                        <Grid item xs={12}>
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
                            <Button variant="contained" href="/buy">
                                Buy Shine
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                href="https://storageapi.fleek.co/joshuatanderson-team-bucket/white%20paper%202.2.0.pdf"
                            >
                                View Whitepaper
                            </Button>
                        </Grid>
                    </TitleBar>
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
                    <Container sx={classes.section}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h3">
                                    <Box
                                        component="u"
                                        sx={classes.whiteUnderline}
                                    >
                                        ShineMine is{" "}
                                    </Box>
                                    the better way to mine
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
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                sx={{
                                    justifyContent: "center",
                                    alignContent: "center",
                                }}
                            >
                                <Box sx={classes.playerWrapper}>
                                    <ReactPlayer
                                        sx={classes.reactPlayer}
                                        width="100%"
                                        height={260}
                                        light="true"
                                        url="https://www.youtube.com/watch?v=97BEp-Q8gMs"
                                    />
                                </Box>
                                {/* <Player>
                                    <source src="https://www.youtube.com/watch?v=97BEp-Q8gMs" />
                                </Player> */}
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
                                <Grid
                                    item
                                    container
                                    justifyContent="space-around"
                                    xs={12}
                                >
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        href="/buy"
                                    >
                                        Buy Shine
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        href="https://storageapi.fleek.co/joshuatanderson-team-bucket/white%20paper%202.2.0.pdf"
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
            <ThemeProvider theme={lightTheme}>
                <ScopedCssBaseline>
                    <Container sx={classes.section}>
                        <Grid container item xs={12}>
                            <Grid item xs={12}>
                                <Typography variant="h4" color="secondary">
                                    You win no matter what with ShineMine
                                </Typography>
                                <Typography variant="body1">
                                    The more people that hold SHINE tokens will
                                    increase the value of your SHINE. The less
                                    people that hold SHINE increases the amount
                                    of rewards you can claim.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h2">Roadmap</Typography>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
            <ThemeProvider theme={darkTheme}>
                <ScopedCssBaseline>
                    <Container sx={classes.section}>
                        <Grid container item xs={12} spacing={3}>
                            <Grid
                                container
                                item
                                xs={12}
                                justifyContent="space-around"
                            >
                                <Button variant="contained" href="/buy">
                                    Buy Shine
                                </Button>
                                <Button
                                    variant="contained"
                                    href="https://storageapi.fleek.co/joshuatanderson-team-bucket/white%20paper%202.2.0.pdf"
                                >
                                    View Whitepaper
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
            <ThemeProvider theme={lightTheme}>
                <ScopedCssBaseline>
                    <Container sx={classes.section}>
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h3">
                                    Featured in
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                justifyContent="space-around"
                            >
                                {makeImages}
                            </Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
        </>
    );
};

export default Home;
