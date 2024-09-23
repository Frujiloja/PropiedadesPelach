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
      <div className={styles.card}>
        <img
          src={propiedad.imagen[0]}
          alt={propiedad.nombre}
          className={styles.image}
        />
        <div className={styles.content}>
          <h2 className={styles.price}>
            Valor: <strong>USD{propiedad.precio}</strong>
          </h2>
          <h4 className={styles.h4}>
            Tipo de Propiedad: <strong>{propiedad.tipo}</strong>
          </h4>
          <h4 className={styles.h4}>
            Operación: <strong>{propiedad.operacion}</strong>
          </h4>
          <h4 className={styles.h4}>
            Metros: <strong>{propiedad.metros}</strong>
          </h4>
          <h4 className={styles.h4}>
            Barrio: <strong>{propiedad.ubicacion}</strong>
          </h4>
          <h4 className={styles.h4}>
            Dirección: <strong>{propiedad.direccion}</strong>
          </h4>
          <h4 className={styles.h4}>
            Antiguedad: <strong>{propiedad.antiguedad} años</strong>
          </h4>
          <h4 className={styles.h4}>
            Ambientes: <strong>{propiedad.ambientes}</strong>
          </h4>
          <h4 className={styles.h4}>
            Dormitorios: <strong>{propiedad.dormitorios}</strong>
          </h4>
          <h4 className={styles.h4}>
            Baños: <strong>{propiedad.baños}</strong>
          </h4>
          <h4 className={styles.h4}>
            Estado General: <strong>{propiedad.estado_general}</strong>
          </h4>
          <h4 className={styles.h4}>
            Entre: <strong>{propiedad.entre}</strong>
          </h4>
          <h4 className={styles.h4}>
            Proximo A: <strong>{propiedad.proximo_a}</strong>
          </h4>
          <h4 className={styles.h4}>
            Orientacion: <strong>{propiedad.orientacion}</strong>
          </h4>

          <br />
          <p className={styles.description}>{propiedad.descripcion}</p>
          {/* Puedes agregar más detalles aquí */}
        </div>
      </div>
    </div>
  );
};

export default Detail;
