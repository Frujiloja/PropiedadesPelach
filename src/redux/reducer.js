import { GET_PROPIEDADES } from "./actions";
import { GET_PROPIEDADES_VENTA } from "./actions";
import { GET_PROPIEDADES_ALQUILER } from "./actions";
import { GET_PROPIEDADES_DESARROLLO } from "./actions";
import { APLICAR_FILTROS } from "./actions";
import { EMPTY_STATES } from "./actions";

const initialState = {
  propiedades: [],
  propiedadesVenta: [],
  propiedadesAlquiler: [],
  propiedadesDesarrollo: [],
  propiedadesFiltradas: [],
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
        
        console.log("Payload recibido:", action.payload);
        
        // Función para convertir precios con puntos como separadores de miles a números
        const parsePrecio = (precio) => {
          // Quitar puntos y convertir a número
          return parseFloat(precio.replace(/\./g, '').replace(/[^0-9.-]/g, ''));
        };
      
        const propiedadesFiltradas = state.propiedades.filter((propiedad) => {
          const precioPropiedad = parsePrecio(propiedad.precio);
          const precioMinNum = parseFloat(precioMin) || 0;
          const precioMaxNum = parseFloat(precioMax) || Infinity;
          
          console.log("Precio Propiedad:", precioPropiedad);
          console.log("Precio Min:", precioMinNum);
          console.log("Precio Max:", precioMaxNum);
      
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
      
        console.log("Propiedades Filtradas:", propiedadesFiltradas);
      
        return {
          ...state,
          propiedadesFiltradas,
        };
      }
      
      
    case EMPTY_STATES:
      return {
        ...state,
        propiedadesFiltradas: [],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
