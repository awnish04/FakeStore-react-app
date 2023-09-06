import React, { useState, useEffect } from "react";

// import pages
import Home from "../pages/Home.js";
import ProductDetails from "../pages/ProductDetails.js";

// Import components
import Sidebar from "../components/Sidebar.js";
import Footer from "../components/Footer.js";

// import routes route & useLocation
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

const AnimRoutes = () => {
  const location = useLocation();

  const [showFooter, setShowFooter] = useState(false);
  // Simulate a delay using setTimeout
  useEffect(() => {
    const delay = 2000;
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Sidebar />
      {showFooter && <Footer />}
    </AnimatePresence>
  );
};

export default AnimRoutes;
