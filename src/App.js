import React from "react";
import Navigation from "./components/Navigation";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import ProductsPage from "./components/pages/ProductsPage";
import ProductList from "./components/ProductList";
  
export const api = new WooCommerceRestApi({
  url: "http://localhost",
  consumerKey: "ck_6c43d9b667acd786614f8faf427a243687a7a81e",
  consumerSecret: "cs_d79dec45583d71e802af4067e9fefb410742bfec",
  version: "wc/v3",
});

function App() {
    return (
        <div className="App">
            <Navigation logoName={"logo.svg"}/>
            <ProductsPage/>
            <ProductList/>
        </div>
    );
}

export default App;