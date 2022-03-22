import { ThemeProvider } from "@emotion/react";
import { Container, Grid, ScopedCssBaseline, Typography } from "@mui/material";
import React from "react";
import TitleBar from "../components/TitleBar";
import { darkTheme, lightTheme } from "../styles/theme";

const classes = {
    paragraph: {
        marginBottom: 2,
    },
};

const Tokenomics = () => {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <ScopedCssBaseline>
                    <TitleBar title="tokenomics" />
                </ScopedCssBaseline>
            </ThemeProvider>
            <ThemeProvider theme={lightTheme}>
                <ScopedCssBaseline>
                    <Container sx={{ paddingBottom: "48px" }}>
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h5">
                                    Token Allocation
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={classes.paragraph}
                                >
                                    SHINE allocation is divided between
                                    scheduled releases, a secured team wallet,
                                    presale members, and a marketing wallet.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={classes.paragraph}
                                >
                                    SHINE holders will be eligible to collect
                                    weekly auto-stake rewards in BNB. For every
                                    active user transaction, a 2% SHINE reward
                                    is granted to holders of the SHINE token in
                                    decentralized wallets.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={classes.paragraph}
                                >
                                    This incentivizes healthy decentralization
                                    of the ecosystem, and long-term investment
                                    in the network. Shine is a BEP-20 token
                                    launching on the Binance Smart Chain in
                                    January 2022. The maximum supply of SHINE
                                    tokens is 10 billion.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
        </>
    );
};

export default Tokenomics;
