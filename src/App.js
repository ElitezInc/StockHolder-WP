import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import ProductsList from "./components/ProductsList";
import Pagination from "./components/PaginationComponent";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { useEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const api = new WooCommerceRestApi({
    url: "http://localhost",
    consumerKey: "ck_6c43d9b667acd786614f8faf427a243687a7a81e",
    consumerSecret: "cs_d79dec45583d71e802af4067e9fefb410742bfec",
    version: "wc/v3",
  });
  
function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchProducts();
    }, []);
  
    let fetchProducts = () => {
      api
        .get("products", {
          per_page: 20,
        })
        .then((response) => {
          if (response.status === 200) {
            setProducts(response.data);
          }
        })
        .catch((error) => { console.error(error)});
    };

    return (
        <div className="App">
            <Navigation logoName={"logo.svg"}/>
            <ProductsList data={products} />
            <Pagination data={ProductsList}/>
        </div>
    );
}

export default App;
