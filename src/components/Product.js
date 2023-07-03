import React from "react";
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    IconButton,
    Box,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

function Product({ product, handleAddToCart }) {
    return (
        <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            raised
        >
            <CardMedia
                sx={{ paddingTop: "56.25%", margin: "5%" }}
                image={product.image.url}
                alt={product.name}
            />
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
                <Typography
                    dangerouslySetInnerHTML={{ __html: product.description }}
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph
                />
            </CardContent>
            <Box sx={{ flexGrow: "1" }} />
            <CardActions>
                <Typography variant="h5">
                    {product.price.formatted_with_symbol}
                </Typography>
                <Box sx={{ flexGrow: "1" }} />
                <IconButton
                    aria-label="Add to Cart"
                    onClick={() => handleAddToCart(product.id, 1)}
                >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Product;
