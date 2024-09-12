export const GET_PROPIEDADES = "GET_PROPIEDADES";
import propertiesData from './ProductsDB.json'; // Ajusta la ruta según la ubicación real del archivo

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

