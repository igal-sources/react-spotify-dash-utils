import React from "react";
import { Grid } from "semantic-ui-react";
import { BrowserRouter } from "react-router-dom";
import SettingsSideBar from "./settings-side-bar/SettingsSideBar";
import { useTranslation } from "react-i18next";
import Routes from "./SettingsRoutes";

const Settings = () => {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <div>
        <h1>{t("settings")}</h1>
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
