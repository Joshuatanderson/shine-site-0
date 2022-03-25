import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";

import logoSmall from "../public/logoSmall.png";
import Link from "./Link";
import { useRouter } from "next/router";
import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "../styles/theme";
import { Grid, ScopedCssBaseline } from "@mui/material";

const pages = [
    {
        display: "Whitepaper",
        path: "whitepaper",
    },
    {
        display: "Team",
        path: "team",
    },
    {
        display: "FAQ",
        path: "faq",
    },
    {
        display: "Tokenomics",
        path: "tokenomics",
    },
];

const classes = {
    menuButtonTextItems: {
        textDecoration: "none",
    },
    menuTextItems: {
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "flex-end",
    },
    popoutMenu: {
        flexGrow: 1,
        display: { xs: "flex", md: "none" },
        justifyContent: "flex-end",
    },
};

export const Header = () => {
    const router = useRouter();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleClick = (e: React.MouseEvent<HTMLElement>, path: string) => {
        e.preventDefault();
        router.push(path);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <ScopedCssBaseline>
                <AppBar
                    position="static"
                    sx={{
                        paddingBottom: "24px",
                        backgroundImage: "none",
                    }}
                >
                    <Container>
                        <Toolbar disableGutters>
                            <Box
                                component={Link}
                                sx={{ height: 32, maxHeight: 32 }}
                                href="/"
                            >
                                <Image
                                    height={31.37}
                                    width={32}
                                    src={logoSmall}
                                    alt="shine logo"
                                />
                            </Box>

                            <Box sx={classes.menuTextItems}>
                                {pages.map((page) => (
                                    <Button
                                        key={page.display}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
                                            color: "white",
                                            display: "block",
                                        }}
                                    >
                                        <Link
                                            href={`/${page.path}`}
                                            sx={{ textDecoration: "none" }}
                                        >
                                            {page.display}
                                        </Link>
                                    </Button>
                                ))}
                                <Button
                                    key="buy-shine"
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: "white",
                                        display: "block",
                                    }}
                                >
                                    <Typography variant="h6">
                                        <Link
                                            href="/buy"
                                            sx={{ textDecoration: "none" }}
                                        >
                                            Buy SHINE
                                        </Link>
                                    </Typography>
                                </Button>
                            </Box>
                            <Box sx={classes.popoutMenu}>
                                <Grid
                                    container
                                    justifyContent="flex-end"
                                    alignContent="center"
                                >
                                    <Typography align="center" variant="h6">
                                        <Link
                                            href="/buy"
                                            sx={classes.menuButtonTextItems}
                                        >
                                            BUY SHINE
                                        </Link>
                                    </Typography>
                                </Grid>

                                <IconButton
                                    size="large"
                                    aria-label="menu"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left",
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: "block", md: "none" },
                                        textDecoration: "none",
                                    }}
                                >
                                    {pages.map((page) => (
                                        <Link
                                            href={`/${page.path}`}
                                            onClick={handleCloseNavMenu}
                                            key={page.path}
                                            sx={{ textDecoration: "none" }}
                                        >
                                            <MenuItem
                                                key={page.path}
                                                onClick={handleCloseNavMenu}
                                            >
                                                <Typography
                                                    sx={{
                                                        my: 2,
                                                        color: "white",
                                                        display: "block",
                                                    }}
                                                >
                                                    {page.display.toUpperCase()}
                                                </Typography>
                                            </MenuItem>
                                        </Link>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ScopedCssBaseline>
        </ThemeProvider>
    );
};
