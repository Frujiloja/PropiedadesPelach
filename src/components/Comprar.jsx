import styles from "./Comprar.module.css";
import React from "react";
import { useSelector } from "react-redux";
import edificios from "../assets/vecteezy_city-background-illustration-black_22227434.png";

const Comprar = () => {
  const propiedades = useSelector((state) => state.propiedades);

  return (
    <div className={styles.comprar_container}>
      <div className={styles.cards_filter}>
        <div className={styles.filtros}>FILTROS</div>
        <div className={styles.cards}>
          {propiedades.map((propiedad) => (
            <div key={propiedad.id} className={styles.card}>
              <img src={propiedad.imagen} alt="foto propiedad" />
              <div className={styles.card_content}>
                <h2>USD {propiedad.precio}</h2>
                <p>{propiedad.direccion}</p>
                <p>Tipo: {propiedad.tipo}</p>
                <p>{propiedad.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img className={styles.edificios} src={edificios} alt="edificios" />
    </div>
  );
};

export default Comprar;
