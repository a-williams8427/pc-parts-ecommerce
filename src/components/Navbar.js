import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    Typography,
    Box,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar({ handleSidebarToggle, totalItems }) {
    const location = useLocation();

    return (
        <>
            <AppBar
                component="nav"
                position="sticky"
                sx={{
                    backgroundColor: "#fafafa",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Toolbar>
                    {location.pathname === "/" && (
                        <IconButton
                            aria-label="open sidebar"
                            edge="start"
                            onClick={handleSidebarToggle}
                            sx={{ mr: 2, display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography
                        component={Link}
                        to="/"
                        variant="h5"
                        color="MenuText"
                        sx={{ textDecoration: "none", fontWeight: "bold" }}
                    >
                        PC Hardware Shop
                    </Typography>
                    <Box sx={{ flexGrow: "1" }} />
                    {location.pathname === "/" && (
                        <IconButton
                            component={Link}
                            to="/cart"
                            aria-label="Show cart"
                        >
                            <Badge badgeContent={totalItems} color="error">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
