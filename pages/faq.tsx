import { ThemeProvider } from "@emotion/react";
import {
    Box,
    Container,
    Grid,
    List,
    ListItem,
    ScopedCssBaseline,
    Typography,
} from "@mui/material";
import React, { SyntheticEvent, useEffect, useState } from "react";

import TitleBar from "../components/TitleBar";
import { darkTheme, lightTheme } from "../styles/theme";
import shineCoin from "../public/coin.png";
import Image from "next/image";
import Link from "../components/Link";

const classes = {
    section: {
        // marginBottom: 5,
        paddingTop: 5,
        paddingBottom: 10,
    },
    paragraph: {
        marginTop: 2,
    },
    slidingItem: {
        color: "#bbb",
        transition: "all .3s",
        "&:hover": {
            color: darkTheme.palette.common.white,
        },
    },
    activeSlidingItem: {
        color: "#fff",
        transition: "all .3s",
    },
    imageCont: {
        width: 100,
    },
};

interface SlidingItem {
    name: string;
    description: JSX.Element;
    id: any;
    cta?: string;
    children?: any;
}

const slidingItems: Record<number, SlidingItem> = {
    0: {
        name: "How do I buy (SHINE)",
        description: (
            <Typography variant="body1">
                <Link href="https://www.shinemine.io/buy-shine">Go here. </Link>
                We&apos;re live on PancakeSwap with a BNB/SHINE pairing.
            </Typography>
        ),
        id: 0,
    },
    1: {
        name: "How many SHINE tokens will there be?",
        description: (
            <Typography variant="body1">
                There are 10 billion SHINE. The ShineMine smart contract
                disallows minting of new tokens. Over time you can expect to see
                the number gradually decrease as scheduled burns take place.
            </Typography>
        ),
        id: 1,
    },
    2: {
        name: "How are team tokens secured?",
        description: (
            <Typography variant="body1">
                30% of the SHINE supply are locked in a gnosis multi-sig wallet
                for increased security. Team funds will remain locked for a
                minimum of six months, with a vesting period spanning up to 2
                years.
            </Typography>
        ),
        id: 2,
    },
    3: {
        name: "Can I see technical details?",
        description: (
            <Typography variant="body1">
                Check out our <Link href="/whitepaper">whitepaper</Link>. If
                you&apos;re looking for addresses, check out our{" "}
                <Link href="/transparency">transparency</Link> page.
            </Typography>
        ),
        id: 3,
    },
    4: {
        name: "What is 'Mining-as-a-Service'?",
        description: (
            <Typography variant="body1">
                Instead of purchasing a traditional cloud mining contract and
                getting stuck with the same coin, same hashrate, and same
                hardware, MaaS allows you to purchase a service token that
                secures your share of a diversified, ever-expanding and
                continually optimized mining operation. Mining-as-a-Service
                differs from cloud mining in two crucial ways - it can
                compensate for the increase in mining difficulty through
                reinvestment strategies and it is optimized for profitability
                using scripting and advanced mining strategies. You receive
                monthly mining results in proportion to the tokens you hold. The
                results are transferred directly into your Binance Smart Chain
                compatible wallet through the use of a smart contract.
            </Typography>
        ),
        id: 4,
    },
    5: {
        name: "What are SHINE tokens and how do they work?",
        description: (
            <Typography variant="body1">
                SHINE tokens are hardware-backed utility tokens, which can be
                used to access ShineMine&apos;s cryptocurrency mining services
                and the reward pool associated with the growing endeavor. Once
                acquired, the tokens can appreciate in value as they distribute
                weekly mining rewards. Additional utility for SHINE tokens will
                be unlocked throughout our roadmap, through NFT&apos;s,
                ShineDAO, and any other future aspects of the ShineMine project.
                SHINE tokens are issued on the Binance platform, as BEP-20
                tokens.
            </Typography>
        ),
        id: 5,
    },
    6: {
        name: "Where and how can I store my SHINE tokens?",
        description: (
            <>
                <Typography variant="body1">
                    Any Binance Smart Chain wallet that is BEP-20 compatible can
                    be used for storing and transferring SHINE tokens. The
                    following are common options:
                </Typography>
                <List>
                    <ListItem>Trust Wallet</ListItem>
                    <ListItem>Hardware wallets: Trezor and Ledger</ListItem>
                    <ListItem>
                        MetaMask Wallet: Plugin for Chrome, with 2FA (two-factor
                        authentication)
                    </ListItem>
                </List>
            </>
        ),
        id: 6,
    },
    7: {
        name: "How will ShineMine keep up with increasing mining difficulty?",
        description: (
            <>
                <Typography variant="body1">
                    Which currencies do you mine?
                </Typography>
                <Typography variant="body1">
                    Short answer: the ones that are most profitable at the
                    moment. To achieve this goal, we engage in diversified
                    mining. Our analysts and bots find the most profitable coins
                    to mine and our automated systems switch to them every hour.
                    We manage and treat the mining portfolio in the exact same
                    way as an investment portfolio - diversifying risk and
                    rewards with:
                </Typography>
                <List>
                    <ListItem>Industrial-grade ASICs</ListItem>
                    <ListItem>
                        Multiple generations of GPUs (because different
                        coins/algorithms respond differently to different
                        hardware)
                    </ListItem>
                    <ListItem>Data and Liquidity Mining</ListItem>
                </List>
                <Typography variant="body1">
                    In short, the operation is optimized by algorithms that
                    &apos;hunt&apos; for the most profitable mining activities
                    and switch to them hourly.
                </Typography>
            </>
        ),
        id: 7,
    },
    8: {
        name: "What is wallet 0x284...34A6c?",
        description: (
            <Typography variant="body1">
                This wallet controls the Shine contract. It is where the
                scheduled supply releases are currently held. It manages
                liquidity, by making sure that there is not a bubble early on,
                for the long term health of the project. It does so by providing
                incremental supply releases of SHINE, and taking incremental
                amounts of BNB from the liquidity pool. The BNB is allocated 40%
                to buy mining hardware rigs, 40% placed back into liquidity, 10%
                marketing, and 10% reserves / liquidity mining.
            </Typography>
        ),
        id: 8,
    },
};

const Faq = () => {
    const [activeItem, setActiveItem] = useState<SlidingItem>(slidingItems[0]);

    const handleClick = (id: number) => {
        setActiveItem(slidingItems[id]);
    };

    const makeSelector = (
        data: Record<number, SlidingItem>,
        clickHandler: (id: number) => void
    ) =>
        Object.values(data).map((item) => (
            <Grid item xs={12} key={`answer-${item.id}`}>
                <Typography
                    variant="h5"
                    sx={
                        activeItem.id === item.id
                            ? classes.activeSlidingItem
                            : classes.slidingItem
                    }
                    onClick={(e: SyntheticEvent) =>
                        clickHandler(parseInt((e.target as HTMLElement).id))
                    }
                    id={`${item.id}`}
                >
                    {item.name}
                </Typography>
            </Grid>
        ));

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
                                <Box sx={classes.imageCont}>
                                    <Image
                                        alt="Shine coin"
                                        src={shineCoin}
                                        width={"100vw"}
                                        height={"100vw"}
                                    ></Image>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
            <ThemeProvider theme={darkTheme}>
                <ScopedCssBaseline>
                    <Container sx={classes.section}>
                        <Grid item container xs={12} spacing={3}>
                            <Grid item xs={12} sm={4}>
                                {makeSelector(slidingItems, handleClick)}
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                sm={8}
                                alignContent="center"
                                color={darkTheme.palette.common.white}
                            >
                                {activeItem.description}
                            </Grid>
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
        </>
    );
};

export default Faq;
