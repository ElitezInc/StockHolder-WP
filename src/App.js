import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import ProductsList from "./components/ProductsList";
  
function App() {
    return (
        <div className="App">
            <Navigation logoName={"logo.svg"}/>
            <ProductsList data={products} />
        </div>
    );
}

export default App;
