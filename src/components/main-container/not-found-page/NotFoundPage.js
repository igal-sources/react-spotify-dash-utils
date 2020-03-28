import React from "react";
import { useTranslation } from "react-i18next";
import "./not-found-page.scss";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div id="NotFoundPage-notFound">
      <div className="NotFoundPage-notFound">
        <div className="NotFoundPage-notFound-404">
          <h1>{t("oops")}</h1>
        </div>
        <h2>{t("page-not-found")}</h2>
        <p>
          The page you are looking for might have been removed had its name changed or is
          temporarily unavailable.
        </p>
        <a href="/">{t("goto-homepage")}</a>
      </div>
    </div>
  );
};
export default NotFoundPage;
