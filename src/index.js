import React from 'react'
import ReactDOM from 'react-dom';
import './sass/styles.scss';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Routes, Route } from 'react-router-dom'
import ProductsPage from './components/pages/ProductsPage'
import HomePage from './components/pages/HomePage'
import CartPage from './components/pages/CartPage';
import { CartProvider } from 'react-use-cart';
import CheckoutPage from './components/pages/CheckoutPage';
import { builder } from '@builder.io/react'
 
builder.init('28dfaf6d02c24581bc359386a322bead');

const Routing = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/cart" element={<CartPage />} />
                <Route exact path="/products-page" element={<ProductsPage />} />
                <Route exact path="/checkout-page" element={<CheckoutPage />} />
            </Routes>
        </HashRouter>
    )
}

ReactDOM.render(<CartProvider><Routing /></CartProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
