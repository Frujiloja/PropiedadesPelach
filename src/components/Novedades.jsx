import styles from "./Novedades.module.css";
import React from "react";
import edificios from "../assets/vecteezy_city-background-illustration-black_22227434.png";

const Novedades = () => {
  return (
    <div className={styles.novedades_container}>
      <img className={styles.edificios} src={edificios} alt="edificios" />
    </div>
  );
};

export default Novedades;
