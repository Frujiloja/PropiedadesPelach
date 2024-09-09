import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import styles from "../components/Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.navbar}>
      <nav className={styles.desktopnav}>
        <div className={styles.menu}>
          <ul className={styles.menuitems}>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/shows">Shows & Eventos</Link>
            </li>
            <li className={styles.dropdown}>
              <a >Talleres</a>
              <ul className={styles.dropdownMenu}>
                <li>
                  <a className={styles.a1} href="/seminario">Seminario de Interpretacion de la Cancion</a>
                </li>
                <li>
                  <a className={styles.a1} href="#workshop2">Curso de Canto Para Principiantes</a>
                </li>
                <li>
                  <a className={styles.a1} href="#workshop3">Taller de Canto Presencial</a>
                </li>
                <li>
                  <a className={styles.a1} href="#workshop3">Taller de Canto Online</a>
                </li>
                <li>
                  <a className={styles.a1} href="#workshop3">Taller de Teatro Presencial</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/agenda">Agenda De Eventos</a>
            </li>
            <li>
              <a href="/about">Acerca De Mi</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className={styles.burguernav}>
        <div className={styles.logo}>
          <img src="/Logo png.png" alt="logo" className={styles.logo} />
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
              <Link to="/shows" onClick={toggleMenu}>
                Shows & Eventos
              </Link>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Talleres
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Agenda De Eventos
              </a>
            </li>
            <li>
              <Link to="/home" onClick={toggleMenu}>
                {/* <a href="#about" onClick={toggleMenu}> */}
                Acerca De Mi
                {/* </a> */}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
