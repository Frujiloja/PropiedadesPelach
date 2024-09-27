import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import styles from "../components/Navbar.module.css";
import logo from "../assets/Logo blanco.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className={styles.navbar}>
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
            {/* <li>
            <Link className={styles.link} to="/desarrollos">
              Desarrollos
            </Link>
          </li> */}
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
              <Link className={styles.link} to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className={styles.burguernav}>
        <div>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={styles.burguermenu}>
          <div
            className={`${styles.burguericon} ${menuOpen ? styles.open : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`${styles.menulinks} ${menuOpen ? styles.open : ""}`}>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/comprar" onClick={toggleMenu}>
                Comprar
              </a>
            </li>
            <li>
              <a href="/alquilar" onClick={toggleMenu}>
                Alquilar
              </a>
            </li>
            <li>
              <a href="/tasaciones" onClick={toggleMenu}>
                Tasaciones
              </a>
            </li>
            <li>
              <a href="/nosotros" onClick={toggleMenu}>
                Nosotros
              </a>
            </li>
            <li>
              <a href="/contacto" onClick={toggleMenu}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
