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
            <Link className={styles.link} to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/">
              Comprar
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/">
              Alquilar
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/">
              Vender
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/">
              Nosotros
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/">
              Desarrollos
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/">
              Novedades
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
