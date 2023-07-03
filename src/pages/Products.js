import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Product from "../components/Product";
import { CircularProgress } from "@mui/material";

function Products({ products, sidebarWidth, handleAddToCart }) {
    if (products.length === 0)
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
        <>
            <Box
                sx={{
                    display: "flex",
                    width: { sm: `calc(100% - ${sidebarWidth})` },
                }}
            >
                <Grid
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        paddingLeft: "5%",
                        paddingRight: "5%",
                    }}
                    container
                    justify="center"
                    spacing={4}
                >
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} md={3}>
                            <Product
                                product={product}
                                handleAddToCart={handleAddToCart}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}

export default Products;
