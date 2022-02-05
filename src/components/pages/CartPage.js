import React from 'react';
import Navigation from '../layout/Navigation';
import {CartProvider } from "react-use-cart";
import Cart from '../layout/Cart';

function CartPage() {
  return (
    <>
      <CartProvider>
        <Navigation logoName={"logo.svg"} />
        <Cart />
      </CartProvider>
    </>
  );
};

export default CartPage;
