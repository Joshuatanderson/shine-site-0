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

import ComparisonChart from "../public/comparisonChart.png";
import OperationStructure from "../public/operationStructure.png";
import ApyChart from "../public/apyChart.png";

import Amb from "../public/featured/amb.png";
import Benzinga from "../public/featured/Benzinga.png";
import CryptoDaily from "../public/featured/cryptodaily.png";
import Yahoo from "../public/featured/Yahoo.png";
import NewsBtc from "../public/featured/newsBtc.png";

import { coral, yellow, seafoam } from "../styles/theme";

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
    strikeThrough: {
        textDecoration: "line-through",
        textDecorationColor: coral,
    },
    paragraph: {
        marginTop: darkTheme.spacing(1),
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
                                Earn passive BNB rewards <br />
                                through tokenized mining.
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
                                    <Typography
                                        variant="h3"
                                        sx={classes.strikeThrough}
                                    >
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
                                    <Typography
                                        variant="h3"
                                        sx={classes.strikeThrough}
                                    >
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
                            <Grid container item xs={12} sm={6}>
                                <Typography variant="h3">
                                    <Box
                                        component="u"
                                        sx={classes.whiteUnderline}
                                    >
                                        ShineMine is{" "}
                                    </Box>
                                    the better way to mine
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={classes.paragraph}
                                >
                                    ShineMine breaks down barriers and allows
                                    anyone to get involved with crypto mining.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={classes.paragraph}
                                >
                                    ShineMine is a tokenized crypto mining
                                    operation that allows anyone to reap the
                                    profits of crypto mining at any price point
                                    regardless of their knowledge or experience
                                    with crypto.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={classes.paragraph}
                                >
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
                                        url="https://www.youtube.com/watch?v=97BEp-Q8gMs"
                                    />
                                </Box>
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
                                                start mining crypto with any
                                                investment and no long term
                                                contract.
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
                                                and code is open source.
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
                                                Mitigates the impact of
                                                intensive blockchain energy
                                                usage.
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
                        <Grid container spacing={3}>
                            <Grid
                                container
                                item
                                xs={12}
                                spacing={3}
                                justifyContent="center"
                            >
                                <Grid container item xs={12} md={8} lg={6}>
                                    <Image src={ComparisonChart} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography
                                        variant="h4"
                                        color="secondary"
                                        align="center"
                                    >
                                        You win no matter what with ShineMine
                                    </Typography>
                                    <Typography variant="body1" align="center">
                                        The more people that hold SHINE tokens
                                        will increase the value of your SHINE.
                                        The less people that hold SHINE
                                        increases the amount of rewards you can
                                        claim.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
            <ThemeProvider theme={lightTheme}>
                <ScopedCssBaseline>
                    <Container sx={classes.section}>
                        <Grid container item spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h3">
                                    Staking & Rewards
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                justifyContent="center"
                            >
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    md={8}
                                    lg={6}
                                    justifyContent="center"
                                >
                                    <Image src={ApyChart} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h5">
                                    APY Projections
                                </Typography>
                                <Typography variant="body1">
                                    APY projections are calculated based on an
                                    estimated total APY from the mining
                                    operation at today&apos;s profitability
                                    rate. Half of the total APY is allocated to
                                    the rewards pool.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h5">
                                    Reinvestment (included in APY)
                                </Typography>
                                <Typography variant="body1">
                                    Half of the total APY is allocated to
                                    reinvestment in acquiring additional mining
                                    equipment and updating obsolete units in
                                    order to expand the mining operation thus
                                    increasing the rewards pool as well as
                                    ensuring the longevity of the project with
                                    continued procurement of the most
                                    competitive hashing computers.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h5">
                                    Calculation details
                                </Typography>
                                <Typography variant="body1">
                                    Compounded APY is calculated based on a
                                    holder reinvesting their BNB rewards into
                                    additional SHINE tokens staked in their
                                    respective pool.
                                </Typography>
                            </Grid>

                            <Grid
                                container
                                item
                                xs={12}
                                justifyContent="center"
                            >
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    md={8}
                                    lg={6}
                                    justifyContent="center"
                                >
                                    <Image src={OperationStructure} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} justifyContent="center">
                                <Typography variant="h5">
                                    Reward Pool Allocations
                                </Typography>
                                <Typography variant="body1">
                                    The Silver Pool will receive 50% of the
                                    rewards pool allocation. The Gold Pool will
                                    receive 25% of the rewards pool allocation
                                    and the Diamond Pool will also receive 25%
                                    of the rewards pool allocation. Holders
                                    staking at the Silver level will claim
                                    rewards from the Silver Pool. Holders
                                    staking at the Gold level will receive
                                    rewards from both the Silver and the Gold
                                    pools. Holders staking at the Diamond level
                                    will receive rewards from all three pools.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
            <ThemeProvider theme={lightTheme}>
                <ScopedCssBaseline>
                    <Container>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h2">Roadmap</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} container>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        textDecoration: "underline",
                                        textDecorationColor: coral,
                                    }}
                                >
                                    PHASE 1
                                </Typography>
                                <Grid
                                    item
                                    xs={12}
                                    sx={{
                                        border: 4,
                                        borderRadius: 2,
                                        padding: 4,
                                        borderColor: coral,
                                    }}
                                >
                                    <Typography variant="h5">
                                        MARKETING
                                    </Typography>
                                    <Typography variant="body1">
                                        ✅ Launch website.
                                    </Typography>
                                    <Typography variant="h5">Token</Typography>
                                    <Typography variant="body1">
                                        ✅ Find facility to host initial
                                        ShineMine mining rigs.
                                    </Typography>
                                    <Typography variant="body1">
                                        ✅ Line up mining rig supplier.
                                    </Typography>
                                    <Typography variant="body1">
                                        ✅ Launch presale
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} container>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        textDecoration: "underline",
                                        textDecorationColor: yellow,
                                    }}
                                >
                                    PHASE 2
                                </Typography>
                                <Grid
                                    item
                                    xs={12}
                                    sx={{
                                        border: 4,
                                        borderRadius: 2,
                                        padding: 4,
                                        borderColor: yellow,
                                    }}
                                >
                                    <Typography variant="h5">
                                        MARKETING
                                    </Typography>
                                    <Typography variant="body1">
                                        ✅ Whitepaper redesign
                                    </Typography>
                                    <Typography variant="body1">
                                        ✅ Launch national marketing campaign.
                                    </Typography>
                                    <Typography variant="body1">
                                        2,000 Discord members
                                    </Typography>
                                    <Typography variant="h5">Token</Typography>
                                    <Typography variant="body1">
                                        Hit $100 million in market cap
                                    </Typography>
                                    <Typography variant="body1">
                                        ✅ Listing on Coin Gecko
                                    </Typography>
                                    <Typography variant="body1">
                                        Listing on Coin Market Cap
                                    </Typography>
                                    <Typography variant="body1">
                                        Begin listing discussions with
                                        centralized exchanges.
                                    </Typography>
                                    <Typography variant="body1">
                                        1,000 SHINE holders
                                    </Typography>
                                    <Typography variant="body1">
                                        ✅ Start security audit
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} sm={6}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        textDecoration: "underline",
                                        textDecorationColor: seafoam,
                                    }}
                                >
                                    PHASE 3
                                </Typography>
                                <Grid
                                    item
                                    xs={12}
                                    sx={{
                                        border: 4,
                                        borderRadius: 2,
                                        padding: 4,
                                        borderColor: seafoam,
                                    }}
                                >
                                    <Typography variant="h5">
                                        MARKETING
                                    </Typography>
                                    <Typography variant="body1">
                                        5,000 Discord members
                                    </Typography>
                                    <Typography variant="body1">
                                        International marketing campaign
                                    </Typography>
                                    <Typography variant="h5">
                                        MISSION
                                    </Typography>
                                    <Typography variant="body1">
                                        Achieve carbon neutrality for Shine
                                        Mine.
                                    </Typography>
                                    <Typography variant="h5">Token</Typography>
                                    <Typography variant="body1">
                                        Hit $500 million in market cap
                                    </Typography>
                                    <Typography variant="body1">
                                        10,000 SHINE holders
                                    </Typography>
                                    <Typography variant="body1">
                                        List on centralized exchanges.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} sm={6}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        textDecoration: "underline",
                                        textDecorationColor: coral,
                                    }}
                                >
                                    PHASE 4
                                </Typography>
                                <Grid
                                    item
                                    xs={12}
                                    sx={{
                                        border: 4,
                                        borderRadius: 2,
                                        padding: 4,
                                        borderColor: coral,
                                    }}
                                >
                                    <Typography variant="h5">
                                        MARKETING
                                    </Typography>
                                    <Typography variant="body1">
                                        10,000 Discord members
                                    </Typography>
                                    <Typography variant="h5">
                                        MISSION
                                    </Typography>
                                    <Typography variant="body1">DAO</Typography>
                                    <Typography variant="h5">Token</Typography>
                                    <Typography variant="body1">
                                        Launch a community marketplace for Shine
                                        Mine NFT&apos;s.
                                    </Typography>
                                    <Typography variant="body1">
                                        Hit $1.2 billion in market cap
                                    </Typography>
                                </Grid>
                            </Grid>
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
