import React from "react";
import "./App.css";
import Header from "./components/Header";
import CardProducts from "./components/CardProducts";
import CarouselProducts from "./components/Carousel";
import ImageProduct from '../src/components/ImageProduct'

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselProducts />
      <CardProducts />
      <ImageProduct />
    </div>
  );
}

export default App;
