import type { NextPage } from "next";
import Head from "next/head";
import classNames from "classnames";

import {
    Box,
    Card,
    CardContent,
    Container,
    CssBaseline,
    Grid,
    ScopedCssBaseline,
    ThemeProvider,
    Typography,
} from "@mui/material";
import { darkTheme, lightTheme, yellowTheme } from "../styles/theme";

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
                    <Container>
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
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
            <ThemeProvider theme={lightTheme}>
                <ScopedCssBaseline>
                    <Container>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <Typography variant="h1" align="center">
                                    There's a mining problem
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Typography variant="h3">Solo Mining</Typography>
                            <Typography variant="body2">
                                Cryptocurrency mining was once dominated by
                                individuals and their home computers. To solo
                                mine now requires hardware that is expensive,
                                loud, consumes a lot of energy, requires
                                technical knowledge, and generates a significant
                                amount of heat. A mining rig alone can cost tens
                                of thousands of dollars and finding a suitable
                                hosting facility is time consuming and costly.
                            </Typography>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
        </>
    );
};

export default Home;
