import styles from "./Contacto.module.css";
import React from "react";
import edificios from "../assets/vecteezy_city-background-illustration-black_22227434.png";

const Contacto = () => {
  return (
    <div className={styles.contacto_container}>
      <img className={styles.edificios} src={edificios} alt="edificios" />
    </div>
  );
};

export default Contacto;
