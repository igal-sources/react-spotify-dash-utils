import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Search from "../search/Search";
import Albums from "../albums/Albums";
import Artists from "../artists/Artists";
import Playlists from "../playlists/Playlists";
import Settings from "../main-container/Settings";
import PlaylistSongsList from "../playlists/playlist-songs/PlaylistSongsList";
import AlbumSongsList from "../albums/AlbumSongsList";
import ArtistSongsList from "../artists/ArtistSongsList";
import ArtistAlbums from "../artists/ArtistAlbums";
import NotFoundPage from "./not-found-page/NotFoundPage";

export default () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/search" component={Search} />
    <Route path="/albums" component={Albums} />
    <Route path="/artists" component={Artists} />
    <Route path="/playlists" component={Playlists} />
    <Route path={"/settings"} component={Settings} />
    <Route path="/playlist-songs" component={PlaylistSongsList} />
    <Route path="/artist-albums" component={ArtistAlbums} />
    <Route path="/artist-songs" component={ArtistSongsList} />
    <Route path="/album-songs" component={AlbumSongsList} />
    <Route component={NotFoundPage} />
  </Switch>
);
