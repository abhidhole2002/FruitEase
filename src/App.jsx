import React from "react";
import Home from "./pages/Homepage/Home";
import Productcard from "./pages/Products/Productcard";
import Product from "./pages/Products/Product";
import Deal from "./pages/Deal/Deal";
import User from "./pages/Users/User";
import NewsCard from "./pages/News/NewsCard";
import News from "./pages/News/News";
import Footer from "./pages/Footer/Footer";

const App = () => {
  return (
    <div>
      <Home />
      <Product />
      <Deal />
      <User />
      <News />
      <Footer />
    </div>
  );
};

export default App;
