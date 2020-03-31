import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, Icon } from "semantic-ui-react";
import Logout from "../logout/Logout";
import allActions from "actions";
import { useViewType } from "../../../services/hooks/use-selectors";
import config from "config";
import { fetchUser } from "apis/spotifyService";
import "./header.scss";

const Header = () => {
  const { t } = useTranslation();
  const authorizeUrl = `${config.AUTHORIZE_URL}?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URI}&scope=${config.SCOPE}&response_type=token`;
  const { pathname } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const headerTitle = useViewType();

  const getUser = token => {
    fetchUser(token, user => {
      console.log("user data: ", user);
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

    if (!hashParams.access_token) {
      window.location.href = authorizeUrl;
    } else {
      dispatch(allActions.tokenActions.setToken(hashParams.access_token));
      getUser(hashParams.access_token);
      console.log("hashParams: ", hashParams);
      history.push("./");
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Menu id="Header-mainMenu" className="Header-mainMenu">
        <div className="Header-type-title">
          <h2>{t(headerTitle.toLowerCase())}</h2>
        </div>
        <Menu.Item
          position="right"
          className="Header-menuItem-settings"
          active={pathname.startsWith("settings", 1)}
          as={Link}
          to={"/settings/account"}
        >
          <Icon id="Header-settings-tooltip" size="big" name="setting" />
        </Menu.Item>
        <Menu.Item as={Logout} />
      </Menu>
    </>
  );
};

export default Header;
