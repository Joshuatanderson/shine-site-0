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
import { ScopedCssBaseline } from "@mui/material";

const pages = [
    {
        display: "Roadmap",
        path: "roadmap",
    },
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

// const pages = ["Roadmap", "Whitepaper", "Team", "Faq", "Tokenomics"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
        // router.push(href);
    };
    // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClick = (event) => {
        event.preventDefault();
        console.log(event);
        // router.push(href);
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
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            {/* <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                    >
                        ShineMine
                    </Typography> */}
                            <Box
                                component="a"
                                sx={{ height: 32, maxHeight: 32 }}
                            >
                                <Image
                                    height={31.37}
                                    width={32}
                                    src={logoSmall}
                                    alt="shine logo"
                                />
                            </Box>
                            {/* <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        ShineMine
                    </Typography> */}
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "none", md: "flex" },
                                }}
                            >
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
                                            onClick={(e) => handleClick(e)}
                                        >
                                            {page.display}
                                        </Link>
                                    </Button>
                                ))}
                            </Box>

                            {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <Typography
                                variant="h6"
                                color="secondary"
                                onClick={handleOpenUserMenu}
                            >
                                <Avatar
                            </Typography>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "flex", md: "none" },
                                }}
                            >
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
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem
                                            key={page.path}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <Typography textAlign="center">
                                                <Link href={`/${page.path}`}>
                                                    {page.display}
                                                </Link>
                                            </Typography>
                                        </MenuItem>
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
