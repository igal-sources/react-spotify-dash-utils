import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Albums from "../albums/Albums";
import Artists from "../artists/Artists";
import Playlists from "../playlists/Playlists";
import Settings from "../main-container/Settings";
import NotFoundPage from "./not-found-page/NotFoundPage";

export default () => (
  <Switch>
    <Route path={"/settings"} component={Settings} />
    <Route exact path="/" component={Dashboard} />
    <Route path="/albums" component={Albums} />
    <Route path="/artists" component={Artists} />
    <Route path="/playlists" component={Playlists} />
    <Route component={NotFoundPage} />
  </Switch>
);
