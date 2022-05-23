import React from "react";

import { ThemeProvider } from "@emotion/react";
import { Container, Grid, ScopedCssBaseline, Typography } from "@mui/material";

import TitleBar from "../components/TitleBar";
import Link from "../components/Link";
import { darkTheme, lightTheme } from "../styles/theme";

const classes = {
    body: {
        whiteSpace: "pre-wrap",
        marginTop: "6px",
    },
};

const Transparency = () => {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <ScopedCssBaseline>
                    <TitleBar title="Transparency" />
                </ScopedCssBaseline>
            </ThemeProvider>
            <ThemeProvider theme={lightTheme}>
                <ScopedCssBaseline>
                    <Container sx={{ paddingBottom: "48px" }}>
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h5">
                                    Important addresses to the ShineMine
                                    project.
                                </Typography>
                                <Typography variant="body1" sx={classes.body}>
                                    SHINE Smart Contract Address:
                                    0xbB78CD9d658201119a78395dE350e3F531c12273
                                </Typography>
                                <Typography variant="body1" sx={classes.body}>
                                    SHINE Smart Contract Owner Address:
                                    0x284a8488f02e2fe75efdd6669c820269ada34a6c
                                </Typography>
                                <Typography variant="body1" sx={classes.body}>
                                    Marketing :
                                    0x3464DE7caf9f384aa5f41e69E151b707903b409F
                                </Typography>
                                <Typography variant="body1" sx={classes.body}>
                                    Staking Contract:
                                    0x1653B9aa9c9ce3aE976720b7B449bcEb281E1BFc
                                </Typography>
                                <Typography variant="body1" sx={classes.body}>
                                    Auto-liquidity address (internal code use):
                                    0x5420B45d9A0aeC7dd06ca8a828A54d9B1c6f449d
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5">
                                    Project Gnosis Safes
                                </Typography>
                                <Typography variant="body1" sx={classes.body}>
                                    Main Gnosis Safe (Long-term Gnosis
                                    multisig):
                                    0x91f26E2eEaAFA5c44d32C57Fd4937881931343D3
                                </Typography>
                                <Typography variant="body1" sx={classes.body}>
                                    Team tokens (Long-term Gnosis multisig):
                                    0xD19DbE5937E8B700Ea02D1a6e547bfaa4B054015
                                </Typography>
                                <Typography variant="body1" sx={classes.body}>
                                    Marketing (Long-term Gnosis multisig):
                                    0xaba69D6FA8CC1f5152b3e0E21BE18428215E840e
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5">
                                    Smart Contract Audit
                                </Typography>
                                <Typography variant="body1" sx={classes.body}>
                                    The{" "}
                                    <Link href="https://storageapi.fleek.co/joshuatanderson-team-bucket/ShineMine_hashex_final_audit.pdf">
                                        SHINE smart contract audit{" "}
                                    </Link>
                                    was performed by Hashex, March 2022.
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5">
                                    Liquidity locked
                                </Typography>
                                <Typography variant="body1" sx={classes.body}>
                                    View our locked liquidity (secured through
                                    CryptEx&apos;s locking service){" "}
                                    <Link href="https://cryptexlock.me/pair/56/0x1c05535C3f51b6C4Eb3aB86Cd3B8Be64271B2564">
                                        here.
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
        </>
    );
};

export default Transparency;
