import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import styles from "../components/Navbar.module.css";
import logo from "../assets/Logo blanco.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <img className={styles.logo} src={logo} alt="Logo" />
      </div>
      <div className={styles.navbar_container}>
        <ul>
          <li>
            Inicio
          </li>
          <li>
            Comprar
          </li>
          <li>
            Alquilar
          </li>
          <li>
            Vender
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
