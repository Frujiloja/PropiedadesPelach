import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import styles from "../components/Navbar.module.css";
import logo from "../assets/Logo blanco.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link to="/">
        <img className={styles.logo} src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={styles.navbar_container}>
        <ul>
          <li>
            <Link className={styles.link} to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/comprar">
              Comprar
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/alquilar">
              Alquilar
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/desarrollos">
              Desarrollos
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/tasaciones">
              Tasaciones
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/nosotros">
              Nosotros
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/novedades">
              Novedades
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
