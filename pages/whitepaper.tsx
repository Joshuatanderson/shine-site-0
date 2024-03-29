import { ThemeProvider } from "@emotion/react";
import {
    Box,
    Button,
    Container,
    Grid,
    ScopedCssBaseline,
    Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

import TitleBar from "../components/TitleBar";
import Link from "../components/Link";
import { darkTheme, lightTheme } from "../styles/theme";
import shineCoin from "../public/coin.png";
import Footer from "../components/Footer";

const classes = {
    imageCont: {
        maxWidth: 100,
    },
};

const slidingItems = {
    0: {
        name: "Our mission",
    },
    1: {
        name: "Our vision",
    },
    2: {
        name: "The problem",
    },
    3: {
        name: "Reinvestment",
    },
    4: {
        name: "Our Pledge",
    },
    5: {
        name: "Transparency",
    },
};

const Whitepaper = () => {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <ScopedCssBaseline>
                    <TitleBar title="Whitepaper" />
                </ScopedCssBaseline>
            </ThemeProvider>
            <ThemeProvider theme={lightTheme}>
                <ScopedCssBaseline>
                    <Container sx={{ paddingBottom: "48px" }}>
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={12} sm={8}>
                                <Typography variant="h5">
                                    ShineMine is the better way to mine
                                </Typography>
                                <Typography variant="body1">
                                    ShineMine is powered by real-world assets
                                    including mining rigs, land, energy
                                    contracts, and hosting centers. The profits
                                    that are generated from ShineMine are owned
                                    by SHINE token holders. SHINE holders will
                                    receive rewards paid in BNB every week
                                    through our DApp. In this way, ShineMine is
                                    mining-as-a-service (MaaS), where investors
                                    receive digital tokens that secures their
                                    share of a self-sustaining mining operation.
                                    ShineMine also diversifies into liquidity
                                    mining. The operation is entirely managed by
                                    a team of experts whose job is to optimize
                                    its profitability and scalability by always
                                    mining the best crypto in the market at that
                                    time.
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                sm={4}
                                justifyContent="center"
                            >
                                <Box sx={classes.imageCont}>
                                    <Image
                                        src={shineCoin}
                                        alt=""
                                        width={"100vw"}
                                        height={"100vw"}
                                    ></Image>
                                </Box>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                container
                                justifyContent="center"
                            >
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    href="https://storageapi.fleek.co/joshuatanderson-team-bucket/white%20paper%203.1.0.pdf"
                                    target="_blank"
                                >
                                    View Whitepaper
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
        </>
    );
};

export default Whitepaper;
