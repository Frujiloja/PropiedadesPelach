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
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className={styles.desarrollo_container}>
      <div className={styles.cards_filter}>
        {/* <div className={styles.filtros}>
          <select className={styles.selectFiltro}>
            <option value="">Barrio</option>
            <option value="palermo">Palermo</option>
            <option value="belgrano">Belgrano</option>
            <option value="recoleta">Recoleta</option>
            <option value="caballito">Caballito</option>
          </select>

          <select className={styles.selectFiltro}>
            <option value="">Tipo de Propiedad</option>
            <option value="departamento">Departamento</option>
            <option value="casa">Casa</option>
            <option value="ph">PH</option>
            <option value="duplex">Dúplex</option>
          </select>

          <select className={styles.selectFiltro}>
            <option value="">Cantidad de Ambientes</option>
            <option value="1">1 Ambiente</option>
            <option value="2">2 Ambientes</option>
            <option value="3">3 Ambientes</option>
            <option value="4">4 o más Ambientes</option>
          </select>

          <input
            type="number"
            className={styles.inputFiltro}
            placeholder="Precio Mínimo"
            min="0"
          />

          <input
            type="number"
            className={styles.inputFiltro}
            placeholder="Precio Máximo"
            min="0"
          />
          <button className={styles.botonBuscar}>Buscar</button>
          <button className={styles.botonBuscar2}>Limpiar Filtros</button>
        </div> */}
        <div className={styles.cards}>
          {propiedades.map((propiedad) => (
            <div key={propiedad.id} className={styles.card}>
              <img src={propiedad.imagen} alt="foto propiedad" />
              <div className={styles.card_content}>
                <h2>USD {propiedad.precio}</h2>
                <p className={styles.p_card}><strong>Dirección: </strong>{propiedad.direccion}</p>
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
                <Link to={`/detail/${propiedad.id}`} className={styles.botonContactar}>Ver Detalle</Link>
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
