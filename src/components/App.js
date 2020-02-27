import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./main-container/appRoutes";
import "semantic-ui-css/semantic.min.css";
import Header from "./main-container/header/Header";
import Footer from "./main-container/footer/Footer";

import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App-main">
        <Header />
        <div className="App-content">
          <Routes />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
