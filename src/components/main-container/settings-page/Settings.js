import React from "react";
import { Grid } from "semantic-ui-react";
import { BrowserRouter } from "react-router-dom";
import SettingsSideBar from "./settings-side-bar/SettingsSideBar";
import Routes from "./SettingsRoutes";

const Settings = () => {
  return (
    <BrowserRouter>
      <div>
        <Grid>
          <Grid.Column className="Settings-sidebar" width={2}>
            <SettingsSideBar />
          </Grid.Column>
          <Grid.Column className="Settings-content" width={14}>
            <Routes />
          </Grid.Column>
        </Grid>
      </div>
    </BrowserRouter>
  );
};

export default Settings;
