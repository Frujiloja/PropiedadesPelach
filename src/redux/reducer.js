import { GET_PROPIEDADES } from "./actions";
import { GET_PROPIEDADES_VENTA } from "./actions";
import { GET_PROPIEDADES_ALQUILER } from "./actions";
import { GET_PROPIEDADES_DESARROLLO } from "./actions";

const initialState = {
  propiedades: [],
  propiedadesVenta: [],
  propiedadesAlquiler: [],
  propiedadesDesarrollo: [],
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
    default:
      return { ...state };
  }
};

export default rootReducer;
