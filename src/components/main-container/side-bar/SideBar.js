import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import allActions from "actions";
import classNames from "classnames";
import * as types from "shared/types";
import "./side-bar.scss";

const Sidebar = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").pop();
  const dispatch = useDispatch();
  const [pathTitle, setPathTitle] = useState("Home");

  useEffect(() => {
    dispatch(allActions.uiActions.updateHeaderTitle(pathTitle));
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const dashboardClassName = classNames({
    "Sidebar-link": true,
    active: path === ""
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
    <div className="Sidebar-container">
      <Link to="/" onClick={() => setPathTitle("Home")} className={dashboardClassName}>
        Home
      </Link>
      <Link to="/search" onClick={() => setPathTitle("Search")} className={searchClassName}>
        Search
      </Link>
      <hr />
      <Link to="/albums" onClick={() => setPathTitle("Albums")} className={albumsClassName}>
        Albums
      </Link>
      <Link to="/artists" onClick={() => setPathTitle("Artists")} className={artistsClassName}>
        Artists
      </Link>
      <Link
        to="/playlists"
        onClick={() => setPathTitle("Playlists")}
        className={playlistsClassName}
      >
        Playlists
      </Link>
    </div>
  );
};

export default Sidebar;
