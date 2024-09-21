import styles from "./Alquilar.module.css";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPropiedadesAlquiler,
  aplicarFiltros,
  getPropiedades,
  emptyStates,
  emptyHome,
  aplicarFiltrosHome,
} from "../redux/actions";
import { Link } from "react-router-dom";
import edificios from "../assets/vecteezy_city-background-illustration-black_22227434.png";

const Alquilar = () => {
  const dispatch = useDispatch();

  const [barrios, setBarrios] = useState([]);
  const [tipoInmueble, settipoInmueble] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("");
  const [filtrosAplicados, setFiltrosAplicados] = useState(false);

  const propiedades = useSelector((state) => state.propiedadesAlquiler);
  const propiedadesHome = useSelector(
    (state) => state.propiedadesFiltradasHome
  );
  const propiedadesFiltradas = useSelector(
    (state) => state.propiedadesFiltradas
  );

  // Extraer barrios y tipos únicos
  const extractUniqueBarrios = useCallback(() => {
    if (propiedades && propiedades.length > 0) {
      const barriosUnicos = [
        ...new Set(propiedades.map((prop) => prop.ubicacion)),
      ];
      setBarrios(barriosUnicos);
    }
  }, [propiedades]);

  const extractUniqueTipos = useCallback(() => {
    if (propiedades && propiedades.length > 0) {
      const tiposUnicos = [...new Set(propiedades.map((prop) => prop.tipo))];
      settipoInmueble(tiposUnicos);
    }
  }, [propiedades]);

  useEffect(() => {
    console.log(propiedadesHome);
    dispatch(getPropiedades()); // Traer todas las propiedades
    dispatch(getPropiedadesAlquiler()); // Traer propiedades para alquiler
  }, [dispatch]);

  useEffect(() => {
    extractUniqueBarrios();
    extractUniqueTipos();
  }, [extractUniqueBarrios, extractUniqueTipos]);

  const phoneNumber = "5491152280786"; // Reemplaza con el número de teléfono real

  // Función para manejar clic en WhatsApp con mensaje específico de la propiedad
  const handleClick = (propiedad) => {
    const message = `Hola, me interesa más información sobre la propiedad ubicada en ${propiedad.ubicacion} con un precio de USD ${propiedad.precio}.`;
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

  // Manejar cambios en los inputs y selects
  const handleChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value,
    });
  };

  // Limpiar filtros
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
    dispatch(emptyHome());
    setSortCriteria("");
    setFiltrosAplicados(false);
    extractUniqueBarrios();
    extractUniqueTipos();
  };

  const aplicarFiltro = () => {
    dispatch(aplicarFiltros(filtros));
    dispatch(aplicarFiltrosHome(filtros));
    setFiltrosAplicados(true);
  };

  // Función de ordenamiento
  const sortProperties = useCallback((properties, criteria) => {
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
  }, []);

  // Aplicar ordenamiento
  const propiedadesOrdenadas = useMemo(() => {
    const source =
      propiedadesHome.length > 0
        ? propiedadesHome
        : filtrosAplicados
        ? propiedadesFiltradas
        : propiedades;
    return sortProperties(source, sortCriteria);
  }, [
    propiedades,
    propiedadesFiltradas,
    sortProperties,
    propiedadesHome,
    sortCriteria,
    filtrosAplicados,
  ]);

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
        {propiedadesHome > 0 ? (
            propiedadesHome
          ) : filtrosAplicados ? (
            propiedadesFiltradas.length > 0 ? (
              propiedadesOrdenadas.map((propiedad) => (
                <div key={propiedad.id} className={styles.card}>
                  <img
                    src={propiedad.imagen}
                    alt={`Propiedad en ${propiedad.ubicacion}`}
                  />
                  <div className={styles.card_content}>
                    <h2>USD {propiedad.precio.toLocaleString()}</h2>
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
                    <button
                      className={styles.botonWhatsapp}
                      onClick={() => handleClick(propiedad)}
                    >
                      WhatsApp <i className="fab fa-whatsapp"></i>
                    </button>
                    <Link to="/contacto" className={styles.botonContactar}>
                      Contactar <i className="fas fa-envelope"></i>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.none}>
                <h2>No se han encontrado propiedades</h2>
                <p>Prueba ajustando los filtros o busca en otra ubicación.</p>
              </div>
            )
          ) : (
            propiedadesOrdenadas.map((propiedad) => (
              <div key={propiedad.id} className={styles.card}>
                <img
                  src={propiedad.imagen}
                  alt={`Propiedad en ${propiedad.ubicacion}`}
                />
                <div className={styles.card_content}>
                  <h2>USD {propiedad.precio.toLocaleString()}</h2>
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
                  <button
                    className={styles.botonWhatsapp}
                    onClick={() => handleClick(propiedad)}
                  >
                    WhatsApp <i className="fab fa-whatsapp"></i>
                  </button>
                  <Link to="/contacto" className={styles.botonContactar}>
                    Contactar <i className="fas fa-envelope"></i>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <img
        className={styles.edificios}
        src={edificios}
        alt="Fondo de edificios"
      />
    </div>
  );
};

export default Alquilar;
