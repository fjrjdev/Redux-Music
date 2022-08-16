import React from "react";
import { Container } from "@mui/material";
import ResposiveAppBar from "../../components/ResposiveAppBar";
import CartList from "../../components/CartList";

const Cart = () => {
  return (
    <Container maxWidth="xl" sx={{ minHeight: "100vh" }}>
      <ResposiveAppBar />
      <CartList />
    </Container>
  );
};

export default Cart;
