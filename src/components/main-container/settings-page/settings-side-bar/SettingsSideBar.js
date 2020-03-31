import React from "react";
import { Link, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import "./settings-side-bar.scss";

const SettingsSideBar = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const path = pathname.split("/").pop();
  const dispatch = useDispatch();

  const userProfileClassName = classNames({
    "SettingsSideBar-link": true,
    active: path === "user-profile"
  });
  const languagesClassName = classNames({
    "SettingsSideBar-link": true,
    active: path === "languages"
  });

  return (
    <div className="SettingsSideBar-container">
      <Route>
        <div>
          <Link to="/settings/user-profile" className={userProfileClassName}>
            {t("user-profile")}
          </Link>
          <Link to="/settings/languages" className={languagesClassName}>
            {t("languages")}
          </Link>
        </div>
      </Route>
    </div>
  );
};

export default SettingsSideBar;
