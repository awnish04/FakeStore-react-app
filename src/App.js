import React from "react";

// Import react router dom
import { BrowserRouter as Router } from "react-router-dom";

// scroll to top
import ScrollToTop from "../src/scrolltotop_component/ScrollToTop";

// Import components
import Header from "./components/Header";
import AnimateRoutes from "./components/AnimateRoutes";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <ScrollToTop />
        <AnimateRoutes />
      </Router>
    </div>
  );
};

export default App;
