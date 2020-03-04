import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import * as types from "shared/types";

import "./side-bar.scss";

const Sidebar = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").pop();

  const dashboardClassName = classNames({
    "Sidebar-link": true,
    active: path === ""
  });
  const songsClassName = classNames({
    "Sidebar-link": true,
    active: path === types.SONGS
  });
  const searchClassName = classNames({
    "Sidebar-link": true,
    active: path === types.SEARCH
  });
  const albumsClassName = classNames({
    "Sidebar-link": true,
    active: path === types.ALBUMS
  });
  const artistsClassName = classNames({
    "Sidebar-link": true,
    active: path === types.ARTISTS
  });
  const playlistsClassName = classNames({
    "Sidebar-link": true,
    active: path === types.PLAYLISTS
  });

  return (
    <div className="sidebar">
          <Link to="/" className={dashboardClassName}>
            Home
          </Link>
          <Link to="/search" className={searchClassName}>
            Search
          </Link>
          <hr/>
          <Link to="/songs" className={songsClassName}>
            Songs
          </Link>
          <Link to="/albums" className={albumsClassName}>
            Albums
          </Link>
          <Link to="/artists" className={artistsClassName}>
            Artists
          </Link>
          <Link to="/playlists" className={playlistsClassName}>
            Playlists
          </Link>
        </div>
  );
};

export default Sidebar;
