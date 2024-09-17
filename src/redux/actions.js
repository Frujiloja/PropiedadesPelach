export const GET_PROPIEDADES = "GET_PROPIEDADES";
export const GET_PROPIEDADES_VENTA = "GET_PROPIEDADES_VENTA";
export const GET_PROPIEDADES_ALQUILER = "GET_PROPIEDADES_ALQUILER";
export const GET_PROPIEDADES_DESARROLLO = "GET_PROPIEDADES_DESARROLLO";
import propertiesData from '../ProductsDB.json'; // Ajusta la ruta según la ubicación real del archivo

export const getPropiedades = () => {
    return function(dispatch){
        try {
            // Aquí no usamos await porque ya tenemos los datos importados directamente
            const propiedades = propertiesData;
            dispatch({ type: GET_PROPIEDADES, payload: propiedades });
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };
};

export const getPropiedadesVenta = () => {
    return function(dispatch){
        try {
            // Aquí no usamos await porque ya tenemos los datos importados directamente
            const propiedades = propertiesData;
            dispatch({ type: GET_PROPIEDADES_VENTA, payload: propiedades });
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };
};

export const getPropiedadesAlquiler = () => {
    return function(dispatch){
        try {
            // Aquí no usamos await porque ya tenemos los datos importados directamente
            const propiedades = propertiesData;
            dispatch({ type: GET_PROPIEDADES_ALQUILER, payload: propiedades });
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };
};

export const getPropiedadesDesarrollo = () => {
    return function(dispatch){
        try {
            // Aquí no usamos await porque ya tenemos los datos importados directamente
            const propiedades = propertiesData;
            dispatch({ type: GET_PROPIEDADES_DESARROLLO, payload: propiedades });
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };
};