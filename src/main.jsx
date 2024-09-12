import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterConfig from "./Router.jsx";
import "./index.css";
import { Provider } from 'react-redux';
import store from './redux/store.js'; // Asegúrate de que la ruta al archivo del store sea correcta

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterConfig />
    </Provider>
  </StrictMode>
);
