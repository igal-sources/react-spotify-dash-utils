import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import allActions from "actions";
import classNames from "classnames";
import * as types from "shared/types";
import { VIEW_TYPE } from "shared/types";
import "./side-bar.scss";

const Sidebar = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const path = pathname.split("/").pop();
  const dispatch = useDispatch();
  const [pathTitle, setPathTitle] = useState(VIEW_TYPE.DASHBOARD);

  useEffect(() => {
    dispatch(allActions.uiActions.updateViewType(pathTitle));
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathTitle]);

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
      <Link to="/" onClick={() => setPathTitle(VIEW_TYPE.DASHBOARD)} className={dashboardClassName}>
        {t("home")}
      </Link>
      <Link to="/search" onClick={() => setPathTitle(VIEW_TYPE.SEARCH)} className={searchClassName}>
        {t("search")}
      </Link>
      <hr />
      <Link to="/albums" onClick={() => setPathTitle(VIEW_TYPE.ALBUMS)} className={albumsClassName}>
        {t("albums")}
      </Link>
      <Link
        to="/artists"
        onClick={() => setPathTitle(VIEW_TYPE.ARTISTS)}
        className={artistsClassName}
      >
        {t("artists")}
      </Link>
      <Link
        to="/playlists"
        onClick={() => setPathTitle(VIEW_TYPE.PLAYLIST)}
        className={playlistsClassName}
      >
        {t("playlists")}
      </Link>
    </div>
  );
};

export default Sidebar;
