import styles from "./Novedades.module.css";
import React from "react";
import edificios from "../assets/vecteezy_city-background-illustration-black_22227434.png";

const Novedades = () => {
  return (
    <div className={styles.novedades_container}>
      <div className={styles.novedades}>
        <h1 >
          La AFIP reafirmó la imposibilidad de compensar Bienes Personales
        </h1>
      </div>
      <img className={styles.edificios} src={edificios} alt="edificios" />
    </div>
  );
};

export default Novedades;
