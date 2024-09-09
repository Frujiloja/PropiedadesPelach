import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
// import About from "./components/About.jsx"



const RouterConfig = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* Navbar se muestra en todas las rutas */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>

      {/* Footer se muestra en todas las rutas */}
      <Footer />
    </Router>
  );
};

export default RouterConfig;
