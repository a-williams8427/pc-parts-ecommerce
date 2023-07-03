import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Box,
} from "@mui/material";
import React from "react";

function CartItem({ item, handleUpdateCartQty, handleRemoveFromCart }) {
    return (
        <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            raised
        >
            <CardMedia
                sx={{ paddingTop: "56.25%", margin: "5%" }}
                image={item.image.url}
                alt={item.name}
            />
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {item.name}
                </Typography>
                <Typography variant="h6">
                    {item.line_total.formatted_with_symbol}
                </Typography>
            </CardContent>
            <Box sx={{ flexGrow: "1" }} />
            <CardActions>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button
                        type="button"
                        size="small"
                        onClick={() =>
                            handleUpdateCartQty(item.id, item.quantity - 1)
                        }
                    >
                        -
                    </Button>
                    <Typography>{item.quantity}</Typography>
                    <Button
                        type="button"
                        size="small"
                        onClick={() =>
                            handleUpdateCartQty(item.id, item.quantity + 1)
                        }
                    >
                        +
                    </Button>
                </Box>
                <Box sx={{ flexGrow: "1" }} />
                <Button
                    variant="contained"
                    type="button"
                    color="error"
                    onClick={() => handleRemoveFromCart(item.id)}
                >
                    Remove
                </Button>
            </CardActions>
        </Card>
    );
}

export default CartItem;
