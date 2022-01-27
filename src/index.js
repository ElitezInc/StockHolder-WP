import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import "./sass/styles.scss";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsPage from './components/pages/ProductsPage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
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
