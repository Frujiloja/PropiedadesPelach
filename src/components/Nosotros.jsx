import styles from "./Nosotros.module.css";
import React from "react";
import edificios from "../assets/vecteezy_city-background-illustration-black_22227434.png";
import foto from "../assets/Responsabilidad-de-las-Inmobiliarias.jpg";
import foto1 from "../assets/1.png";
import foto2 from "../assets/2.png";
import foto3 from "../assets/3.png";
import foto4 from "../assets/4.png";

const Nosotros = () => {
  return (
    <div className={styles.nosotros_container}>
      <div className={styles.text_container}>
        <div className={styles.text}>
          <h1 className={styles.h1}>Quienes somos?</h1>
          <p className={styles.p}>
            <strong>Pelach Propiedades</strong> es una de las empresas
            inmobiliarias con mayor tradición y reputación por la calidad de su
            producto, integridad profesional y servicio al cliente. <br />
            <br /> Nuestro conocimiento tanto del mercado inmobiliario como de
            las necesidades de los clientes más exigentes, nos permite ofrecerle
            la clave para un buen negocio inmobiliario. <br />
            <br /> <strong>Pelach Propiedades</strong> ha prestado sus servicios
            a gran cantidad de clientes satisfechos, estableciendo relaciones a
            largo plazo con compradores, vendedores y profesionales
            inmobiliarios. <br />
            <br />
            Nuestro personal altamente calificado tiene el firme compromiso de
            facilitar los más altos estándares de servicio y excelencia a
            nuestros clientes.
          </p>
        </div>
        <img src={foto} alt="foto" className={styles.foto} />
      </div>
      <div className={styles.servicios}>
      <div className={styles.line}>NUESTROS SERVICIOS</div>
      <div className={styles.recuadros}>
        <img src={foto1} className={styles.foto1} alt="foto1" />
        <img src={foto2} className={styles.foto1} alt="foto1" />
        <img src={foto3} className={styles.foto1} alt="foto1" />
        <img src={foto4} className={styles.foto1} alt="foto1" />
      </div>
      </div>
      <img className={styles.edificios} src={edificios} alt="edificios" />
    </div>
  );
};

export default Nosotros;
