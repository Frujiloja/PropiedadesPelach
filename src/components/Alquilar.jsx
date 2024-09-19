import styles from "./Alquilar.module.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPropiedadesAlquiler,
  aplicarFiltros,
  getPropiedades,
  emptyStates,
} from "../redux/actions";
import { Link } from "react-router-dom";
import edificios from "../assets/vecteezy_city-background-illustration-black_22227434.png";

const Alquilar = () => {
  const dispatch = useDispatch();

  const [barrios, setBarrios] = useState([]);
  const [tipoInmueble, settipoInmueble] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("");

  useEffect(() => {
    dispatch(getPropiedades()); //me traigo las propiedades
    dispatch(getPropiedadesAlquiler()); //me traigo las propiedades
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
    extractUniqueBarrios();
    extractUniqueTipos();
  }, [dispatch]);

  const propiedades = useSelector((state) => state.propiedadesAlquiler);
  const propiedadesFiltradas = useSelector(
    (state) => state.propiedadesFiltradas
  );

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

  const [filtros, setFiltros] = useState({
    ubicacion: "",
    tipo: "",
    ambientes: "",
    precioMin: "",
    precioMax: "",
    operacion: "Alquiler",
  });

  // Función para manejar cambios en los inputs y selects
  const handleChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value,
    });
  };

  // Función para limpiar los filtros
  const limpiarFiltros = () => {
    setFiltros({
      ubicacion: "",
      tipo: "",
      ambientes: "",
      precioMin: "",
      precioMax: "",
      operacion: "Alquiler",
    });
    dispatch(emptyStates());
    setSortCriteria("");
    extractUniqueBarrios();
    extractUniqueTipos();
  };

  const aplicarFiltro = () => {
    dispatch(aplicarFiltros(filtros));
  };

  // Función para ordenar las propiedades
  const sortProperties = (properties, criteria) => {
    switch (criteria) {
      case "menorprecio":
        return [...properties].sort((a, b) => a.precio - b.precio);
      case "mayorprecio":
        return [...properties].sort((a, b) => b.precio - a.precio);
      case "menosambientes":
        return [...properties].sort((a, b) => a.ambientes - b.ambientes);
      case "masambientes":
        return [...properties].sort((a, b) => b.ambientes - a.ambientes);
      default:
        return properties;
    }
  };

  // Aplicar ordenamiento
  const propiedadesOrdenadas = sortProperties(
    propiedadesFiltradas.length === 0 ? propiedades : propiedadesFiltradas,
    sortCriteria
  );

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  return (
    <div className={styles.alquilar_container}>
      <div className={styles.cards_filter}>
        <div className={styles.filtros}>
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
            name="ambientes"
            value={filtros.ambientes}
            onChange={handleChange}
            className={styles.selectFiltro}
          >
            <option value="">Cantidad de Ambientes</option>
            <option value="1">1 Ambiente</option>
            <option value="2">2 Ambientes</option>
            <option value="3">3 Ambientes</option>
            <option value="4">4 o más Ambientes</option>
          </select>

          <input
            type="number"
            name="precioMin"
            value={filtros.precioMin}
            onChange={handleChange}
            className={styles.inputFiltro}
            placeholder="Precio Mínimo"
            min="0"
          />

          <input
            type="number"
            name="precioMax"
            value={filtros.precioMax}
            onChange={handleChange}
            className={styles.inputFiltro}
            placeholder="Precio Máximo"
            min="0"
          />

          <button className={styles.botonBuscar} onClick={aplicarFiltro}>
            Buscar
          </button>
          <button className={styles.botonBuscar2} onClick={limpiarFiltros}>
            Limpiar Filtros
          </button>

          <select
            className={styles.selectFiltro}
            value={sortCriteria}
            onChange={handleSortChange}
          >
            <option value="">Ordenar</option>
            <option value="menorprecio">Menor Precio</option>
            <option value="mayorprecio">Mayor Precio</option>
            <option value="menosambientes">Menos Ambientes</option>
            <option value="masambientes">Más Ambientes</option>
          </select>

        </div>
        <div className={styles.cards}>
          {propiedadesOrdenadas.map((propiedad) => (
            <div key={propiedad.id} className={styles.card}>
              <img src={propiedad.imagen} alt="foto propiedad" />
              <div className={styles.card_content}>
                <h2>USD {propiedad.precio}</h2>
                <p className={styles.p_card}>
                  <strong>Ubicación: </strong>
                  {propiedad.ubicacion}
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
                  {truncateText(propiedad.descripcion, 100)}
                </p>
              </div>
              <div className={styles.card_buttons}>
                <button className={styles.botonWhatsapp} onClick={handleClick}>
                  WhatsApp<i className="fab fa-whatsapp"></i>
                </button>
                <Link to="/contacto" className={styles.botonContactar}>
                  Contactar <i className="fas fa-envelope"></i>
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

export default Alquilar;
