import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { FaRegNewspaper, FaPhone, FaCalculator } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../assets/Banner.gif";
import logogif from "../assets/cucicba-logo.gif";
import { useDispatch, useSelector } from "react-redux";
import {
  getPropiedades,
  aplicarFiltrosHome,
  emptyHome,
} from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(getPropiedades()); // Trae las propiedades

  const propiedades = useSelector((state) => state.propiedades);
  const navigate = useNavigate(); // Hook de navegación

  const [barrios, setBarrios] = useState([]);
  const [tipoInmueble, settipoInmueble] = useState([]);

  const extractUniqueBarrios = () => {
    const barriosUnicos = [
      ...new Set(propiedades.map((prop) => prop.ubicacion)),
    ];
    setBarrios(barriosUnicos);
  };
  const extractUniqueTipos = () => {
    const tiposUnicos = [...new Set(propiedades.map((prop) => prop.tipo))];
    settipoInmueble(tiposUnicos);
  };

  useEffect(() => {
    dispatch(getPropiedades()); // Trae las propiedades
    dispatch(emptyHome());
  }, [dispatch]);

  useEffect(() => {
    if (propiedades.length > 0) {
      extractUniqueBarrios();
      extractUniqueTipos();
    }
  }, [propiedades]); // Solo se ejecuta cuando 'propiedades' cambie

  const [activeTab, setActiveTab] = useState(0);

  // Función para cambiar la pestaña activa
  const changeTab = (index) => {
    setActiveTab(index);
  };

  const [filtros, setFiltros] = useState({
    ubicacion: "",
    tipo: "",
    precioMin: "",
    precioMax: "",
  });

  const handleChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    let url;
    switch (activeTab) {
      case 0:
        console.log(filtros);
        const filtrosConVenta = { ...filtros, operacion: "Venta" };
        dispatch(aplicarFiltrosHome(filtrosConVenta));
        url = "/comprar"; // URL para la pestaña "Comprar"
        break;
      case 1:
        console.log(filtros);
        const filtrosConAlquiler = { ...filtros, operacion: "Alquiler" };
        dispatch(aplicarFiltrosHome(filtrosConAlquiler));
        url = "/alquilar"; // URL para la pestaña "Alquilar"
        break;
      case 2:
        console.log(filtros);
        const filtrosConDesarrollo = { ...filtros, operacion: "Desarrollo" };
        dispatch(aplicarFiltrosHome(filtrosConDesarrollo));
        url = "/desarrollos"; // URL para la pestaña "Desarrollos"
        break;
      default:
        url = "/";
    }
    navigate(url); // Redirige a la URL correspondiente
  };

  return (
    <div className={styles.home_container}>
      <div className={styles.img}>
        <div className={styles.titulo}>
          <h1>Propiedades en venta y alquiler</h1>
          <h2>Encontrá tu hogar</h2>
        </div>
        <div className={styles.search_container}>
          <div className={styles.container}>
            {/* Contenedor de las pestañas */}
            <div className={styles.tabs}>
              {["Comprar", "Alquilar"].map((tabLabel, index) => (
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
                  <select
                    name="tipo"
                    value={filtros.tipo}
                    onChange={handleChange}
                    className={styles.selectFiltro}
                  >
                    <option value="">Tipo de Propiedad</option>
                    {tipoInmueble.map((tipo, index) => (
                      <option key={index} value={tipo}>
                        {tipo}
                      </option>
                    ))}
                  </select>
                  <select
                    name="ubicacion"
                    value={filtros.ubicacion}
                    onChange={handleChange}
                    className={styles.selectFiltro}
                  >
                    <option value="">Barrio</option>
                    {barrios.map((barrio, index) => (
                      <option key={index} value={barrio}>
                        {barrio}
                      </option>
                    ))}
                  </select>
                  {/* <div className={styles.precio}>
                    <div className={styles.inputs_price}>
                      <span className={styles.currency}>USD</span>
                      <input
                        onChange={handleChange}
                        name="precioMin"
                        value={filtros.precioMin}
                        className={styles.selectFiltro2}
                        type="text"
                        placeholder="Desde"
                      />
                      <span className={styles.currency}>USD</span>
                      <input
                        onChange={handleChange}
                        name="precioMax"
                        value={filtros.precioMax}
                        className={styles.selectFiltro2}
                        type="text"
                        placeholder="Hasta"
                      />
                    </div>
                  </div> */}
                </div>
              )}
              {activeTab === 1 && (
                <div className={styles.h4_container}>
                  <select
                    name="tipo"
                    value={filtros.tipo}
                    onChange={handleChange}
                    className={styles.selectFiltro}
                  >
                    <option value="">Tipo de Propiedad</option>
                    {tipoInmueble.map((tipo, index) => (
                      <option key={index} value={tipo}>
                        {tipo}
                      </option>
                    ))}
                  </select>
                  <select
                    name="ubicacion"
                    value={filtros.ubicacion}
                    onChange={handleChange}
                    className={styles.selectFiltro}
                  >
                    <option value="">Barrio</option>
                    {barrios.map((barrio, index) => (
                      <option key={index} value={barrio}>
                        {barrio}
                      </option>
                    ))}
                  </select>
                  {/* <div className={styles.precio}>
                    <div className={styles.inputs_price}>
                      <span className={styles.currency}>USD</span>
                      <input
                        onChange={handleChange}
                        name="precioMin"
                        value={filtros.precioMin}
                        className={styles.selectFiltro2}
                        type="text"
                        placeholder="Desde"
                      />
                      <span className={styles.currency}>USD</span>
                      <input
                        onChange={handleChange}
                        name="precioMax"
                        value={filtros.precioMax}
                        className={styles.selectFiltro2}
                        type="text"
                        placeholder="Hasta"
                      />
                    </div>
                  </div> */}
                </div>
              )}
            </div>
            <button className={styles.btn} onClick={handleSearch}>
              Buscar
            </button>
          </div>
        </div>
      </div>
      <div className={styles.titulo2}>
        <h1>
          ¡Descubrí las oportunidades más destacadas en compra y alquiler!
        </h1>
        <h2>
          En Pelach propiedades somos referentes en el mercado de propiedades y
          bienes raíces en Argentina. <br />
          Si estás buscando alquilar o comprar una casa, departamento, local
          comercial, oficina o terreno, estás en el lugar indicado.
        </h2>
      </div>
      <div className={styles.destacadas}>
        <Link to="/detail/1">
          <div className={styles.card}>
            <img
              src={propiedades[0].imagen[0]}
              alt="Descripción de la imagen"
              className={styles.card_image}
            />
            <div className={styles.card_text}>
              <p>Ver Mas</p>
            </div>
          </div>
        </Link>
        <Link to="/detail/30">
          <div className={styles.card}>
            <img
              src={propiedades[27].imagen[0]}
              alt="Descripción de la imagen"
              className={styles.card_image}
            />
            <div className={styles.card_text}>
              <p>Ver Mas</p>
            </div>
          </div>
        </Link>
        <Link to="/detail/6">
          <div className={styles.card}>
            <img
              src={propiedades[5].imagen[0]}
              alt="Descripción de la imagen"
              className={styles.card_image}
            />
            <div className={styles.card_text}>
              <p>Ver Mas</p>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.box_container}>
        <Link className={styles.recuadro} to="/tasaciones">
          <div className={styles.recuadro}>
            <FaCalculator className={styles.icon} />
            <h4>Tasar Con Un Profesional</h4>
            <p>Te ayudamos a que puedas vender o alquilar tu propiedad.</p>
          </div>
        </Link>
        <Link className={styles.recuadro} to="/contacto">
          <div className={styles.recuadro}>
            <FaPhone className={styles.icon} />
            <h4>Contactanos</h4>
            <p>Entérate de todas las opciones disponibles en CABA. </p>
          </div>
        </Link>
        {/* <Link className={styles.recuadro} to="/novedades">
          <div className={styles.recuadro}>
            <FaRegNewspaper className={styles.icon} />
            <h4>Enterate Nuestras Novedades</h4>
            <p>
              Conocé nuestra ultimas novedades y nuevas leyes inmobiliarias.
            </p>
          </div>
        </Link> */}
      </div>
      <div></div>
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
