import { ThemeProvider } from "@emotion/react";
import { Container, Grid, ScopedCssBaseline, Typography } from "@mui/material";
import React from "react";

import TitleBar from "../components/TitleBar";
import { darkTheme, lightTheme } from "../styles/theme";
import shineCoin from "../public/coin.png";
import Image from "next/image";

const classes = {
    section: {
        // marginBottom: 5,
        paddingTop: 5,
    },
    paragraph: {
        marginTop: 2,
    },
};

const Faq = () => {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <ScopedCssBaseline>
                    <TitleBar title="faq" />
                </ScopedCssBaseline>
            </ThemeProvider>
            <ThemeProvider theme={lightTheme}>
                <ScopedCssBaseline>
                    <Container sx={classes.section}>
                        <Grid container spacing={3}>
                            <Grid item container xs={12} sm={8}>
                                <Typography variant="h3">
                                    How ShineMine works
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={classes.paragraph}
                                >
                                    ShineMine is powered by real-world assets
                                    including mining rigs, land, energy
                                    contracts, and hosting centers. The profits
                                    that are generated from ShineMine are owned
                                    by SHINE token holders.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={classes.paragraph}
                                >
                                    SHINE holders will receive rewards paid in
                                    BNB every week through our DApp. In this
                                    way, ShineMine is mining-as-a-service
                                    (MaaS), where investors receive digital
                                    tokens that secures their share of a
                                    self-sustaining mining operation.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={classes.paragraph}
                                >
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
                                <Image src={shineCoin}></Image>
                            </Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
            <ThemeProvider theme={darkTheme}>
                <ScopedCssBaseline>
                    <Container>
                        <Grid item container xs={12} spacing={3}>
                            <Grid item xs={12} sm={4}></Grid>
                            <Grid item xs={12} sm={8}></Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
        </>
    );
};

export default Faq;
