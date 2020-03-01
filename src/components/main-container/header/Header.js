import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import classNames from "classnames";
import { Menu, Icon } from "semantic-ui-react";
import * as types from "shared/types";
import allActions from "../../../actions";
import config from "../../../config";
import { fetchUser } from "../../../apis/spotify-service";
import "./header.scss";

const Header = () => {
  //const [accessToken, setAccessToken] = useState("");
  const authorizeUrl = `${config.AUTHORIZE_URL}?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URI}&scope=${config.SCOPE}&response_type=token`;
  const { pathname } = useLocation();
  const history = useHistory();
  const path = pathname.split("/").pop();

  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();

  const getUser = accessToken => {
    fetchUser(accessToken, user => {
      console.log("data: ", user);
      dispatch(allActions.userActions.setUser({ ...user }));
    });
  };

  useEffect(() => {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    console.log("hashParams.access_token: ", hashParams.access_token);

    if (!hashParams.access_token) {
      window.location.href = authorizeUrl;
    } else {
      dispatch(allActions.tokenActions.setToken(hashParams.access_token));
      getUser(hashParams.access_token);

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
          {currentUser.loggedIn && currentUser.user.display_name}
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Header;
