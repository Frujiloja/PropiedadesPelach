import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Alquilar from "./components/Alquilar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Contacto from "./components/Contacto.jsx";
import Comprar from "./components/Comprar.jsx";
import Vender from "./components/Vender.jsx";
import Desarrollo from "./components/Desarrollo.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Detail from "./components/Detail.jsx"



const RouterConfig = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* Navbar se muestra en todas las rutas */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alquilar" element={<Alquilar />} />
        <Route path="/comprar" element={<Comprar />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/desarrollos" element={<Desarrollo />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/tasaciones" element={<Vender />} />
        <Route path="/detail/:id" element={<Detail />} />

        {/* <Route path="/about" element={<About />} /> */}
      </Routes>

      {/* Footer se muestra en todas las rutas */}
      <Footer  />
    </Router>
  );
};

export default RouterConfig;
