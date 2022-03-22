import { ThemeProvider } from "@emotion/react";
import { Container, Grid, ScopedCssBaseline, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import React, { useEffect, useRef, useState } from "react";
import TitleBar from "../components/TitleBar";
import {
    coral,
    dark,
    darkTheme,
    lightTheme,
    seafoam,
    yellow,
} from "../styles/theme";

const classes = {
    paragraph: {
        marginBottom: 2,
    },
};

const allocationChartData = {
    labels: ["Scheduled Releases", "Team", "Presale", "Marketing"],
    datasets: [
        {
            label: "Token Distribution",
            data: [50, 30, 10, 10],
            backgroundColor: [yellow, seafoam, coral, dark],
            borderColor: [yellow, seafoam, coral, dark],
            borderWidth: 1,
        },
    ],
};

const chartOptions = {
    plugins: {
        legend: {
            labels: {
                font: {
                    family: "Bebas Neue",
                    size: darkTheme.typography.htmlFontSize,
                },
            },
            position: "bottom",
        },
    },
};

const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
        {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

const Tokenomics = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    // useEffect(() => {}, []);
    // useEffect(() => {
    //     ChartJS.register(ArcElement, Tooltip, Legend);
    // }, []);
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
                            <Grid item xs={12} sm={6}>
                                <Pie
                                    data={allocationChartData}
                                    options={chartOptions}
                                ></Pie>
                            </Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
        </>
    );
};

export default Tokenomics;
