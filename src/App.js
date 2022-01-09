import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import ProductsList from "./components/ProductsList";

function App() {
    return (
        <div className="App">
            <Navigation logoName={"logo.svg"}/>
            <ProductsList />
        </div>
    );
}

export default App;
