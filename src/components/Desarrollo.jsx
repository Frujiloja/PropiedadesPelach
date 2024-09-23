import styles from "./Desarrollo.module.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPropiedadesDesarrollo } from "../redux/actions";
import { Link } from "react-router-dom";
import edificios from "../assets/vecteezy_city-background-illustration-black_22227434.png";

const Desarrollo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPropiedadesDesarrollo()); //me traigo las propiedades
  }, [dispatch]);

  const propiedades = useSelector((state) => state.propiedadesDesarrollo);

  // const propiedadesDesarrollo = propiedades.filter(
  //   (property) => property.operacion === "Desarrollo"
  // );

  const phoneNumber = "5491152280786"; // Reemplaza con el número de teléfono real
  const message = "Hola, me interesa más información"; // Mensaje predeterminado (opcional)

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className={styles.desarrollo_container}>
      <div className={styles.cards_filter}>
        <div className={styles.cards}>
          {propiedades.map((propiedad) => (
            <div key={propiedad.id} className={styles.card}>
              <Link to={`/detail/${propiedad.id}`} className={styles.img}>
                <img
                  src={propiedad.imagen[0]}
                  alt={`Propiedad en ${propiedad.ubicacion}`}
                  className={styles.img2}
                />
              </Link>
              <div className={styles.card_content}>
                <h2>USD {propiedad.precio}</h2>
                <p className={styles.p_card}>
                  <strong>Dirección: </strong>
                  {propiedad.direccion}
                </p>
                <p className={styles.p_card}>
                  <strong>Tipo:</strong> {propiedad.tipo}
                </p>
                <p className={styles.p_card}>
                  <strong>Ambientes:</strong> {propiedad.ambientes}
                </p>
                <p className={styles.p_card}>
                  <strong>Metros Totales:</strong> {propiedad.metros}
                </p>
                <p className={styles.p_card}>
                  {propiedad.descripcion}
                  {/* Ajusta el número de caracteres según sea necesario */}
                </p>
              </div>
              <div className={styles.card_buttons}>
                <button className={styles.botonWhatsapp} onClick={handleClick}>
                  WhatsApp<i className="fab fa-whatsapp"></i>
                </button>
                {/* <Link to="/contacto" className={styles.botonContactar}>
                  Contactar <i className="fas fa-envelope"></i>
                </Link> */}
                <Link
                  to={`/detail/${propiedad.id}`}
                  className={styles.botonContactar}
                >
                  Ver Detalle
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img className={styles.edificios} src={edificios} alt="edificios" />
    </div>
  );
};

export default Desarrollo;
