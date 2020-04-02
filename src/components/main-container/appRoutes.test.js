import React from "react";
import { shallow } from "enzyme";
import { Route } from "react-router-dom";
import Routes from "./appRoutes";
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

describe("Test appRoutes functionality", () => {
  it("renders correct routes", () => {
    const wrapper = shallow(<Routes />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      if (routeProps.component) {
        pathMap[routeProps.path] = routeProps.component;
      } else if (routeProps.render) {
        pathMap[routeProps.path] = routeProps.render({}).type;
      }
      return pathMap;
    }, {});

    expect(pathMap["/search"]).toBe(Search);
  });
});
