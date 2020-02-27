import React from "react";
import ReactDOM from "react-dom";
import StoreProvider from "./services/store";
import App from "./components/App";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
