import React from "react";
import { Route, Switch } from "react-router-dom";
import Account from "../settings-page/account-page/Account";
import Languages from "../settings-page/languages/Languages";
import NotFoundPage from "../not-found-page/NotFoundPage";

export default () => (
  <Switch>
    <Route exact path="/settings/account" component={Account} />
    <Route path="/settings/languages" component={Languages} />
    <Route component={NotFoundPage} />
  </Switch>
);
