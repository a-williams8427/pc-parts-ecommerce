import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import { Box, CssBaseline } from "@mui/material";

import { commerce } from "./lib/commerce";

import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Sidebar from "./components/Sidebar";
import Cart from "./pages/Cart";

function App() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [mobileOpen, setMobileOpen] = useState(false);

    const fetchProducts = async () => {
        const response = await commerce.products.list();

        setProducts(response.data);
        setFilteredProducts(response.data);
    };

    const fetchCategories = async () => {
        const response = await commerce.categories.list();

        setCategories(response.data);
    };

    const fetchCart = async () => {
        const response = await commerce.cart.retrieve();

        setCart(response);
    };

    const handleAddToCart = async (productId, quantity) => {
        const response = await commerce.cart.add(productId, quantity);

        setCart(response);
    };

    const handleUpdateCartQty = async (productId, quantity) => {
        const response = await commerce.cart.update(productId, { quantity });

        setCart(response);
    };

    const handleRemoveFromCart = async (productId) => {
        const response = await commerce.cart.remove(productId);

        setCart(response);
    };

    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();

        setCart(response);
    };

    useEffect(() => {
        fetchProducts();
        fetchCategories();
        fetchCart();
    }, []);

    const filterProducts = (filter) => {
        const filtered = products.filter((product) =>
            product.categories.find((category) => category.name === filter)
        );
        setFilteredProducts(filtered);
    };

    const resetFilter = () => {
        setFilteredProducts(products);
    };

    const handleSidebarToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const sidebarWidth = "240px";

    return (
        <>
            <CssBaseline />
            <Navbar
                handleSidebarToggle={handleSidebarToggle}
                totalItems={cart === null ? 0 : cart.total_items}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Box component="main" sx={{ display: "flex" }}>
                            <Sidebar
                                sidebarWidth={sidebarWidth}
                                mobileOpen={mobileOpen}
                                handleSidebarToggle={handleSidebarToggle}
                                categories={categories}
                                filterProducts={filterProducts}
                                resetFilter={resetFilter}
                            />
                            <Products
                                products={filteredProducts}
                                sidebarWidth={sidebarWidth}
                                handleAddToCart={handleAddToCart}
                            />
                        </Box>
                    }
                />

                <Route
                    path="/cart"
                    element={
                        <Cart
                            cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        />
                    }
                />
            </Routes>
        </>
    );
}

export default App;
