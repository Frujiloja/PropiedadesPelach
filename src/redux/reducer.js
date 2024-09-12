// import { GET_POKEMONS } from "./actions";

const initialState = {
    propiedades: [],
};

const rootReducer=(state = initialState, action)=>{
    switch (action.type) {
        case GET_POKEMONS:
            return {...state, propiedades:action.payload};
        default:
            return {...state};
    }
}


export default rootReducer;