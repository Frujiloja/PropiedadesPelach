import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import { thunk } from 'redux-thunk'; // Importación ajustada

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)) // Aplicar middleware redux-thunk
);

export default store;
