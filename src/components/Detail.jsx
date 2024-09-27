// src/components/Detail/Detail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Detail.module.css"; // Importando estilos CSS Modules
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Icono de flecha
import { useSelector, useDispatch } from "react-redux";
import { getPropiedades } from "../redux/actions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        <FaArrowLeft style={{ color: "black", fontSize: "20px" }} />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        <FaArrowRight style={{ color: "black", fontSize: "20px" }} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className={styles.container}>
      <Link
        to={
          propiedad.operacion === "Venta"
            ? "/comprar"
            : propiedad.operacion === "Alquiler"
            ? "/alquilar"
            : "/desarrollos"
        }
        className={styles.icon}
      >
        <FaArrowLeft /> Volver al Listado
      </Link>
      <div className={styles.card}>
        <Slider {...settings} className={styles.image}>
          {propiedad.imagen.map((image, index) => (
            <div key={index} className={styles.image}>
              <img
                src={image}
                alt={`Slide ${index}`}
                style={{ width: "100%", height: "auto", display: "block" }}
                className={styles.image}
              />
            </div>
          ))}
        </Slider>
        {/* <img
          src={propiedad.imagen[0]}
          alt={propiedad.nombre}
          className={styles.image}
        /> */}
        <div className={styles.content}>
          <h1 className={styles.h1title}>
            {propiedad.tipo} en {propiedad.ubicacion}
          </h1>
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
      <div class="info-container" className={styles.div_iconos}>
        <div class="info-item">
          <i class="fas fa-home icon"></i>
          <span class="label">Ambientes: {propiedad.ambientes}</span>
        </div>
        <div class="info-item">
          <i class="fas fa-bed icon"></i>
          <span class="label">Dormitorios: {propiedad.dormitorios}</span>
        </div>
        <div class="info-item">
          <i class="fas fa-bath icon"></i>
          <span class="label">Baños: {propiedad.baños}</span>
        </div>
        <div class="info-item">
          <i class="fas fa-clock icon"></i>
          <span class="label">Antigüedad: {propiedad.antiguedad} años</span>
        </div>
      </div>
      <div className={styles.separador}></div>
      <div className={styles.mapcontainer}>
        <iframe
          src={propiedad.mapa}
          width="900"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Detail;
