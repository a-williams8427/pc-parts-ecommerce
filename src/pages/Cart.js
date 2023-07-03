import {
    Button,
    Container,
    Grid,
    Typography,
    CircularProgress,
    Box,
} from "@mui/material";
import React from "react";
import CartItem from "../components/CartItem";

function Cart({
    cart,
    handleUpdateCartQty,
    handleRemoveFromCart,
    handleEmptyCart,
}) {
    const EmptyCart = () => (
        <Typography variant="h6" sx={{ textAlign: "center" }}>
            Your cart is empty
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem
                            item={item}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />
                    </Grid>
                ))}
            </Grid>
            <Grid
                container
                sx={{ paddingTop: "1rem", paddingBottom: "1.5rem" }}
            >
                <Typography variant="h4" sx={{ paddingTop: "1rem" }}>
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <Box sx={{ flexGrow: "1" }} />
                <Button
                    size="large"
                    type="button"
                    variant="contained"
                    color="error"
                    sx={{ marginRight: "1rem" }}
                    onClick={() => handleEmptyCart()}
                >
                    Empty Cart
                </Button>
                <Button
                    size="large"
                    type="button"
                    variant="contained"
                    color="error"
                >
                    Check Out
                </Button>
            </Grid>
        </>
    );

    if (cart === null)
        return (
            <>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "90vh",
                        flexGrow: 1,
                    }}
                >
                    <CircularProgress />
                </Box>
            </>
        );

    return (
        <Container>
            <Typography
                variant="h4"
                sx={{ textAlign: "center", paddingTop: "1rem" }}
                gutterBottom
            >
                Your Cart
            </Typography>
            {cart.line_items.length === 0 ? <EmptyCart /> : <FilledCart />}
        </Container>
    );
}

export default Cart;
