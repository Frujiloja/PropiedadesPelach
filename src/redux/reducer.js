import { GET_PROPIEDADES } from "./actions";
import { GET_PROPIEDADES_VENTA } from "./actions";
import { GET_PROPIEDADES_ALQUILER } from "./actions";
import { GET_PROPIEDADES_DESARROLLO } from "./actions";
import { APLICAR_FILTROS } from "./actions";
import { APLICAR_FILTROS_HOME } from "./actions";
import { EMPTY_STATES } from "./actions";
import { EMPTY_HOME } from "./actions";

const initialState = {
  propiedades: [],
  propiedadesVenta: [],
  propiedadesAlquiler: [],
  propiedadesDesarrollo: [],
  propiedadesFiltradas: [],
  propiedadesFiltradasHome: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPIEDADES:
      return { ...state, propiedades: action.payload };
    case GET_PROPIEDADES_VENTA:
      return {
        ...state,
        propiedadesVenta: action.payload.filter(
          (el) => el.operacion === "Venta"
        ),
      };
    case GET_PROPIEDADES_ALQUILER:
      return {
        ...state,
        propiedadesAlquiler: action.payload.filter(
          (el) => el.operacion === "Alquiler"
        ),
      };
    case GET_PROPIEDADES_DESARROLLO:
      return {
        ...state,
        propiedadesDesarrollo: action.payload.filter(
          (el) => el.operacion === "Desarrollo"
        ),
      };
    case APLICAR_FILTROS: {
      const {
        barrio,
        tipo,
        operacion,
        ubicacion,
        ambientes,
        precioMin,
        precioMax,
      } = action.payload;

      // Función para convertir precios con puntos como separadores de miles a números
      const parsePrecio = (precio) => {
        // Quitar puntos y convertir a número
        return parseFloat(precio.replace(/\./g, "").replace(/[^0-9.-]/g, ""));
      };

      const propiedadesFiltradas = state.propiedades.filter((propiedad) => {
        const precioPropiedad = parsePrecio(propiedad.precio);
        const precioMinNum = parseFloat(precioMin) || 0;
        const precioMaxNum = parseFloat(precioMax) || Infinity;

        return (
          (!barrio || propiedad.barrio === barrio) &&
          (!tipo || propiedad.tipo === tipo) &&
          (!ubicacion || propiedad.ubicacion === ubicacion) &&
          (ambientes === "" ||
            (ambientes === "4" &&
              (propiedad.ambientes >= 4 || propiedad.ambientes === "-")) ||
            propiedad.ambientes === ambientes) &&
          (!operacion || propiedad.operacion === operacion) &&
          (isNaN(precioMinNum) || precioPropiedad >= precioMinNum) &&
          (isNaN(precioMaxNum) || precioPropiedad <= precioMaxNum)
        );
      });

      const propiedadesFiltradasHome = state.propiedadesFiltradasHome.filter((propiedad) => {
        const precioPropiedad = parsePrecio(propiedad.precio);
        const precioMinNum = parseFloat(precioMin) || 0;
        const precioMaxNum = parseFloat(precioMax) || Infinity;

        return (
          (!barrio || propiedad.barrio === barrio) &&
          (!tipo || propiedad.tipo === tipo) &&
          (!ubicacion || propiedad.ubicacion === ubicacion) &&
          (ambientes === "" ||
            (ambientes === "4" &&
              (propiedad.ambientes >= 4 || propiedad.ambientes === "-")) ||
            propiedad.ambientes === ambientes) &&
          (!operacion || propiedad.operacion === operacion) &&
          (isNaN(precioMinNum) || precioPropiedad >= precioMinNum) &&
          (isNaN(precioMaxNum) || precioPropiedad <= precioMaxNum)
        );
      });

      return {
        ...state,
        propiedadesFiltradas,
        propiedadesFiltradasHome
      };
    }

    case APLICAR_FILTROS_HOME: {
      console.log("Payload recibido:", action.payload); // Verifica los datos aquí

      const { barrio, tipo, operacion, ubicacion, precioMin, precioMax } =
        action.payload;

      // Función para convertir precios con puntos como separadores de miles a números
      const parsePrecio = (precio) => {
        // Quitar puntos y convertir a número
        return parseFloat(precio.replace(/\./g, "").replace(/[^0-9.-]/g, ""));
      };

      const propiedadesFiltradasHome = state.propiedadesFiltradasHome.length > 0 ? (state.propiedadesFiltradasHome.filter((propiedad) => {
        const precioPropiedad = parsePrecio(propiedad.precio);
        const precioMinNum = parseFloat(precioMin) || 0;
        const precioMaxNum = parseFloat(precioMax) || Infinity;

        return (
          (!barrio || propiedad.barrio === barrio) &&
          (!tipo || propiedad.tipo === tipo) &&
          (!ubicacion || propiedad.ubicacion === ubicacion) &&
          (!operacion || propiedad.operacion === operacion) &&
          (isNaN(precioMinNum) || precioPropiedad >= precioMinNum) &&
          (isNaN(precioMaxNum) || precioPropiedad <= precioMaxNum)
        );
      })) : ((state.propiedades.filter((propiedad) => {
        const precioPropiedad = parsePrecio(propiedad.precio);
        const precioMinNum = parseFloat(precioMin) || 0;
        const precioMaxNum = parseFloat(precioMax) || Infinity;

        return (
          (!barrio || propiedad.barrio === barrio) &&
          (!tipo || propiedad.tipo === tipo) &&
          (!ubicacion || propiedad.ubicacion === ubicacion) &&
          (!operacion || propiedad.operacion === operacion) &&
          (isNaN(precioMinNum) || precioPropiedad >= precioMinNum) &&
          (isNaN(precioMaxNum) || precioPropiedad <= precioMaxNum)
        );
      })))

      console.log(propiedadesFiltradasHome);

      return {
        ...state,
        propiedadesFiltradasHome,
      };
    }

    case EMPTY_STATES:
      return {
        ...state,
        propiedadesFiltradas: [],
      };

    case EMPTY_HOME:
      return {
        ...state,
        propiedadesFiltradasHome: [],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
