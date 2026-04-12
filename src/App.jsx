import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Categories from "./components/categories/Categories";
import Box from "./components/boxs/Box";
import Products from "./components/products/Products";
import Bestsalles from "./components/bestsalles/Bestsalles";
import Deals from "./components/deals/Deals";
import StayHome from "./components/stay/StayHome";
import Icons from "./components/icons/Icons";
import Footer from "./components/footer/Footer";
import TopSallings from "./components/topsallings/TopSallings";

import Cart from "./pages/cart/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  // 👇 حفظ السلة
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // 👇 تخزين في المتصفح
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Header cart={cart} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <Box />

              <Products cart={cart} setCart={setCart} />

              {/* 👇 مهم */}
              <Bestsalles cart={cart} setCart={setCart} />

              <Deals />
              <TopSallings />
              <StayHome />
              <Icons />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />{" "}
      </Routes>
    </div>
  );
}

export default App;
//////////////////////
