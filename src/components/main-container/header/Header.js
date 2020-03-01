import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import classNames from "classnames";
import { Menu, Icon } from "semantic-ui-react";
import * as types from "shared/types";
import allActions from "../../../actions";
import "./header.scss";

const Header = () => {
  const authorizeUrl = `${process.env.REACT_APP_SPOTIFY_AUTHORIZE_URL}?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URI}&scope=${process.env.REACT_APP_SPOTIFY_SCOPE}&response_type=token&show_dialog=true`;
  const { pathname } = useLocation();
  const history = useHistory();
  const path = pathname.split("/").pop();

  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (!hashParams.access_token) {
      window.location.href = authorizeUrl;
    } else {
      dispatch(allActions.tokenActions.setToken(hashParams.access_token));
      dispatch(allActions.userActions.setUser({ name: "Igal" }));
      history.push("./");
    }

    return () => {};
  }, []);

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
          {currentUser.loggedIn && currentUser.user.name}
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Header;
