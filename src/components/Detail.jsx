// src/components/Detail/Detail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Detail.module.css"; // Importando estilos CSS Modules
import { FaArrowLeft } from "react-icons/fa"; // Icono de flecha
import { useSelector, useDispatch } from "react-redux";
import { getPropiedades } from "../redux/actions";

const Detail = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPropiedades()); // Trae las propiedades
  }, [dispatch]);
  const { id } = useParams(); // Obtener el ID de la ruta
  //   const [propiedad, setPropiedad] = useState(null);
  const propiedades = useSelector((state) => state.propiedades);

  const propiedad = propiedades.find((prop) => prop.id === parseInt(id));

  if (!propiedad) {
    return <div className={styles.notFound}>Propiedad no encontrada.</div>;
  }

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>
        <FaArrowLeft className={styles.backIcon} /> Volver al Listado
      </Link>
      <div className={styles.card}>
        <img
          src={propiedad.imagen}
          alt={propiedad.nombre}
          className={styles.image}
        />
        <div className={styles.content}>
          <h1 className={styles.title}>{propiedad.nombre}</h1>
          <p className={styles.description}>{propiedad.descripcion}</p>
          <div className={styles.price}>{propiedad.precio}</div>
          {/* Puedes agregar más detalles aquí */}
        </div>
      </div>
    </div>
  );
};

export default Detail;
