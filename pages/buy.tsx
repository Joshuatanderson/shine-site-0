import { ThemeProvider } from "@emotion/react";
import {
    Button,
    Container,
    Grid,
    ScopedCssBaseline,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ReactPlayer from "react-player";
import Link from "../components/Link";
import TitleBar from "../components/TitleBar";
import { darkTheme, lightTheme } from "../styles/theme";

const classes = {
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

const Buy = () => {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <ScopedCssBaseline>
                    <TitleBar title="buy shine" />
                </ScopedCssBaseline>
            </ThemeProvider>
            <ThemeProvider theme={lightTheme}>
                <ScopedCssBaseline>
                    <Container sx={{ paddingBottom: "48px" }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} container>
                                <Grid item>
                                    <Typography variant="h5">
                                        Smart Contract address:
                                    </Typography>

                                    <Typography variant="body1">
                                        0xbB78CD9d658201119a78395dE350e3F531c12273
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} container>
                                <Grid item>
                                    <Typography variant="h5">
                                        Live on PancakeSwap!
                                    </Typography>
                                    <Typography variant="body1">
                                        PancakeSwap (
                                        <Link href="https://pancakeswap.finance/">
                                            PancakeSwap.finance
                                        </Link>
                                        ) is a popular DeFi site, with a total
                                        of over 4 billion in liquidity in their
                                        protocol.
                                    </Typography>
                                    <Typography variant="body1">
                                        The SHINE liquidity pool is a BNB/SHINE
                                        pairing.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Box sx={classes.playerWrapper}>
                                    <ReactPlayer
                                        sx={classes.reactPlayer}
                                        width="100%"
                                        height="70vw"
                                        url="https://www.youtube.com/watch?v=AQKU73zp43c&t=1s"
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
        </>
    );
};

export default Buy;
