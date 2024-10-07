import React from "react";
import Navbar from "./components/Navbar.jsx";
import Carousel from "./components/Carousel.jsx";
import Footer from "./components/Footer.jsx";
import Promotions from "./components/Promotions.jsx";
import LatestNewsUpdate from "./components/LatestNewsUpdate.jsx";
import ProductList from "./components/ProductList.jsx";
import OutletList from "./components/OutletList.jsx";
import NewArrivalProducts from "./components/NewArrivalProducts.jsx";
import HotSellingProducts from "./components/HotSellingProducts.jsx";


function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      <Carousel />
      <Promotions/>
      <LatestNewsUpdate/>
      <ProductList/>
      <OutletList/>
      <HotSellingProducts/>
      <NewArrivalProducts/>
      {/* Add other sections or components here */}
      <Footer/>
    </div>
  );
}

export default App;
