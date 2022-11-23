import React from "react";
import "./App.css";
import Header from "./components/Header";
import CardProducts from "./components/CardProducts";
import CarouselProducts from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselProducts />
      <CardProducts />
    </div>
  );
}

export default App;
