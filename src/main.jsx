import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { GestorApp } from "./GestorApp";
import { Provider } from "react-redux";

import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter basename="http://192.168.1.136/">
      <GestorApp />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
