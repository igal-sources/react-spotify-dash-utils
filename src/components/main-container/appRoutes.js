import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Search from "../search/Search";
import Albums from "../albums/Albums";
import Artists from "../artists/Artists";
import Playlists from "../playlists/Playlists";
import Settings from "./settings-page/Settings";
import PlaylistSongsList from "../playlists/playlist-songs/PlaylistSongsList";
import AlbumSongsList from "../albums/album-songs-list/AlbumSongsList";
import ArtistSongsList from "../artists/artist-songs-list/ArtistSongsList";
import ArtistAlbums from "../artists/artist-albums/ArtistAlbums";
import NotFoundPage from "./not-found-page/NotFoundPage";

export default ({ token }) => (
  <Switch>
    <Route exact path="/" component={() => <Dashboard token={token} />} />
    <Route path="/search" component={() => <Search token={token} />} />
    <Route path="/albums" component={() => <Albums token={token} />} />
    <Route path="/artists" component={() => <Artists token={token} />} />
    <Route path="/playlists" component={() => <Playlists token={token} />} />
    <Route path="/settings/account" component={Settings} />
    <Route path="/playlist-songs" component={PlaylistSongsList} />
    <Route path="/artist-albums" component={ArtistAlbums} />
    <Route path="/artist-songs" component={ArtistSongsList} />
    <Route path="/album-songs" component={AlbumSongsList} />
    <Route component={NotFoundPage} />
  </Switch>
);
