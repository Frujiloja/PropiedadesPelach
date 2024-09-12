import { GET_PROPIEDADES } from "./actions";

const initialState = {
    propiedades: [],
};

const rootReducer=(state = initialState, action)=>{
    switch (action.type) {
        case GET_PROPIEDADES:
            return {...state, propiedades:action.payload};
        default:
            return {...state};
    }
}


export default rootReducer;