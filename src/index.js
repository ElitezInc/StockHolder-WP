import React from 'react'
import ReactDOM from 'react-dom';
import './sass/styles.scss';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductsPage from './components/pages/ProductsPage'
import HomePage from './components/pages/HomePage'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products-page" element={<ProductsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
