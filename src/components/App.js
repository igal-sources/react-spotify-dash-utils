import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./main-container/appRoutes";
import "semantic-ui-css/semantic.min.css";
import { useToken } from "services/hooks";
import { Grid } from "semantic-ui-react";
import Sidebar from "../components/main-container/side-bar/SideBar";
import Header from "./main-container/header/Header";
import Footer from "./main-container/footer/Footer";
import "./app.scss";

const App = () => {
  const token = useToken();
  console.log("token: ", token);
  localStorage.setItem("token", token);

  return (
    <BrowserRouter>
      <div className="App-main">
        <div className="App-header">
          <Header />
        </div>
        <Grid>
          <Grid.Column className="App-sidebar" width={2}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column className="App-content" width={14}>
            <Routes />
          </Grid.Column>
        </Grid>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
