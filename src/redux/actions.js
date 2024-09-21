export const GET_PROPIEDADES = "GET_PROPIEDADES";
export const GET_PROPIEDADES_VENTA = "GET_PROPIEDADES_VENTA";
export const GET_PROPIEDADES_ALQUILER = "GET_PROPIEDADES_ALQUILER";
export const GET_PROPIEDADES_DESARROLLO = "GET_PROPIEDADES_DESARROLLO";
export const APLICAR_FILTROS = "APLICAR_FILTROS";
export const APLICAR_FILTROS_HOME = "APLICAR_FILTROS_HOME";
export const EMPTY_STATES = "EMPTY_STATES";
export const EMPTY_HOME = "EMPTY_HOME";
import propertiesData from "../ProductsDB.json"; // Ajusta la ruta según la ubicación real del archivo

export const getPropiedades = () => {
  return function (dispatch) {
    try {
      // Aquí no usamos await porque ya tenemos los datos importados directamente
      const propiedades = propertiesData;
      dispatch({ type: GET_PROPIEDADES, payload: propiedades });
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };
};

export const getPropiedadesVenta = () => {
  return function (dispatch) {
    try {
      // Aquí no usamos await porque ya tenemos los datos importados directamente
      const propiedades = propertiesData;
      dispatch({ type: GET_PROPIEDADES_VENTA, payload: propiedades });
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };
};

export const getPropiedadesAlquiler = () => {
  return function (dispatch) {
    try {
      // Aquí no usamos await porque ya tenemos los datos importados directamente
      const propiedades = propertiesData;
      dispatch({ type: GET_PROPIEDADES_ALQUILER, payload: propiedades });
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };
};

export const getPropiedadesDesarrollo = () => {
  return function (dispatch) {
    try {
      // Aquí no usamos await porque ya tenemos los datos importados directamente
      const propiedades = propertiesData;
      dispatch({ type: GET_PROPIEDADES_DESARROLLO, payload: propiedades });
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };
};

export const aplicarFiltros = (filtros) => {
  return {
    type: APLICAR_FILTROS,
    payload: filtros,
  };
};

export const aplicarFiltrosHome = (filtros) => {
    return {
      type: APLICAR_FILTROS_HOME,
      payload: filtros,
    };
  };

export const emptyStates = () => {
  return {
    type: EMPTY_STATES,
  };
};

export const emptyHome = () => {
  return {
    type: EMPTY_HOME,
  };
};
