import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { FaRegNewspaper , FaPhone, FaCalculator   } from "react-icons/fa";
import { Link } from "react-router-dom";
import Banner from "../assets/Banner.gif";
import logogif from "../assets/cucicba-logo.gif";
import { useDispatch } from "react-redux";
import { getPropiedades } from "../redux/actions";

const Home = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPropiedades()); //me traigo las propiedades
},[dispatch])

  const [activeTab, setActiveTab] = useState(0);

  // Función para cambiar la pestaña activa
  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.home_container}>
      <div className={styles.img}>
        <div className={styles.search_container}>
          <div className={styles.container}>
            {/* Contenedor de las pestañas */}
            <div className={styles.tabs}>
              {["Comprar", "Alquilar", "Desarrollos"].map((tabLabel, index) => (
                <button
                  key={index}
                  className={`${styles.tab} ${
                    activeTab === index ? styles.active : ""
                  }`}
                  onClick={() => changeTab(index)}
                >
                  {tabLabel}
                  {/* Línea de color debajo */}
                  {activeTab === index && (
                    <div className={styles.activeLine}></div>
                  )}
                </button>
              ))}
            </div>

            {/* Contenido de la pestaña activa */}
            <div className={styles.content}>
              {activeTab === 0 && (
                <div className={styles.h4_container}>
                  <input type="text" placeholder="Tipo de Propiedad" />
                  <input type="text" placeholder="Ciudades o Barrios" />
                  <div className={styles.precio}>
                    <div className={styles.h4_price}>
                      <h4>Precio:</h4>
                    </div>
                    <div className={styles.inputs_price}>
                      <span className={styles.currency}>USD</span>
                      <input type="text" placeholder="Desde" />
                      <span className={styles.currency}>USD</span>
                      <input type="text" placeholder="Hasta" />
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div className={styles.h4_container}>
                  <input type="text" placeholder="Tipo de Propiedad" />
                  <input type="text" placeholder="Ciudades o Barrios" />
                  <div className={styles.precio}>
                    <div className={styles.h4_price}>
                      <h4>Precio:</h4>
                    </div>
                    <div className={styles.inputs_price}>
                      <span className={styles.currency}>ARS</span>
                      <input type="text" placeholder="Desde" />
                      <span className={styles.currency}>ARS</span>
                      <input type="text" placeholder="Hasta" />
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className={styles.h4_container}>
                  <input type="text" placeholder="Tipo de Propiedad" />
                  <input type="text" placeholder="Ciudades o Barrios" />
                  <div className={styles.precio}>
                    <div className={styles.h4_price}>
                      <h4>Precio:</h4>
                    </div>
                    <div className={styles.inputs_price}>
                      <span className={styles.currency}>USD</span>
                      <input type="text" placeholder="Desde" />
                      <span className={styles.currency}>USD</span>
                      <input type="text" placeholder="Hasta" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button className={styles.btn}>Buscar</button>
          </div>
        </div>
      </div>
      <div className={styles.box_container}>
        <Link className={styles.recuadro} to="/tasaciones">
          <div className={styles.recuadro}>
            <FaCalculator  className={styles.icon} /> {/* Ícono de la casa */}
            <h4>Tasar Con Un Profesional</h4>
            <p>
              El primer paso para que puedas vender o alquilar tu propiedad.
            </p>
          </div>
        </Link>
        <Link className={styles.recuadro} to="/contacto">
          <div className={styles.recuadro}>
            <FaPhone  className={styles.icon} /> {/* Ícono de la casa */}
            <h4>Contactanos</h4>
            <p>Entérate de todas las opciones disponibles en CABA. </p>
          </div>
        </Link>
        <Link className={styles.recuadro} to="/novedades">
          <div className={styles.recuadro}>
            <FaRegNewspaper  className={styles.icon} /> {/* Ícono de la casa */}
            <h4>Enterate Nuestras Novedades</h4>
            <p>
              Conocé nuestra ultimas novedades y nuevas leyes inmobiliarias.
            </p>
          </div>
        </Link>
      </div>
      <div>
        <img src={Banner} alt="Banner" className={styles.banner} />
      </div>
      <p className={styles.ptext}>
        LEY 2340 ARTICULO 11 - DERECHOS SON DERECHOS DE LOS CORREDORES
        INMOBILIARIOS: <br />
        <br /> Inciso 2º: Percibir honorarios por la actividad realizada y
        comisiones de su comitente según la retribución que libremente pacten y,
        de quien resulte cocontratante, la que se establezca por la ley. En el
        caso de tratarse de alquiler de inmuebles destinados a vivienda
        administrados por un corredor inmobiliario, el monto de los honorarios
        mensuales no podrá ser exigido a los inquilinos. <br />
        <br /> ARTICULO 57 Artículo 57 - Hasta tanto se regulen los aranceles
        según lo previsto en el inciso 2º del artículo 11, para los casos de
        locación de inmuebles destinados a vivienda única, el monto máximo de la
        comisión a cobrar al inquilino, será el equivalente al cuatro, quince
        centésimos por ciento (4,15%) del valor total del respectivo contrato{" "}
        <br />
        <br /> LEY Nº 3.588 Artículo 1º.- Los corredores inmobiliarios deben
        exhibir en forma visible y destacada en los locales u oficinas
        comerciales en que desarrollen sus actividades -así como en su sitio
        web, si lo tuvieran- la transcripción de los artículos 11, inciso 2º, y
        57 de la Ley Nº 2.340, y de las normas nacionales aplicables en la
        materia, o las que en el futuro las reemplacen. <br />
        <br /> Artículo 2º.- Sin perjuicio de las facultades conferidas por ley
        al Colegio único de Corredores Inmobiliarios de la Ciudad Autónoma de
        Buenos Aires, las infracciones a la presente ley son pasibles de las
        sanciones previstas por las leyes nacionales Nº 22.802 y 24.240, según
        el caso, a través del procedimiento establecido por la Ley Nº 757.{" "}
        <br />
        <br />
        Artículo 3º.- Comuníquese, etc.
      </p>
      <img className={styles.logogif} src={logogif} alt="logo gif" />
      <p className={styles.pblack}>
        <h5>Pelach Propiedades</h5>CUCICBA Matrícula 1892 Las Heras 3780 -
        C.A.B.A Tel. (011) 4801-2877 info@pelachpropiedades.com.ar
      </p>
    </div>
  );
};

export default Home;
