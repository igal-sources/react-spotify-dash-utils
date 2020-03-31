import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./user-profile-page/UserProfile";
import Languages from "../settings-page/languages/Languages";
import NotFoundPage from "../not-found-page/NotFoundPage";

export default () => (
  <Switch>
    <Route exact path="/settings/user-profile" component={UserProfile} />
    <Route path="/settings/languages" component={Languages} />
    <Route component={NotFoundPage} />
  </Switch>
);
