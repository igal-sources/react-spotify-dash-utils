import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { Menu, Icon } from "semantic-ui-react";
import { StoreContext } from "../../../services/store";
import * as types from "shared/types";
import "./header.scss";

const Header = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").pop();
  const store = React.useContext(StoreContext);

  const dashboardClassName = classNames({
    "Header-link": true,
    active: path === ""
  });
  const albumsClassName = classNames({
    "Header-link": true,
    active: path === types.ALBUMS
  });
  const artistsClassName = classNames({
    "Header-link": true,
    active: path === types.ARTISTS
  });
  const playlistsClassName = classNames({
    "Header-link": true,
    active: path === types.PLAYLISTS
  });

  return (
    <>
      <Menu id="Header-mainMenu" className="Header-mainMenu">
        <div className="Header-links">
          <Link to="/" className={dashboardClassName}>
            Dashboard
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
        <Menu.Item
          position="right"
          className="Header-menuItem-settings"
          active={pathname.startsWith("settings", 1)}
          as={Link}
          to={"/settings"}
        >
          <Icon id="Header-settings-tooltip" size="big" name="setting" />
        </Menu.Item>
        <Menu.Item
          className="Header-menuItem-user"
          active={pathname.startsWith("user", 1)}
          as={Link}
          to={"/user"}
        >
          {store.userName}
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Header;
