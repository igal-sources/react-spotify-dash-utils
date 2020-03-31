import React from "react";
import { Button } from "semantic-ui-react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import "./languages.scss";

const Languages = () => {
  const { t } = useTranslation();
  return (
    <div className="Languages-container">
      <h2 className="Languages-header">{t("change-translations")}</h2>
      <div className="Languages-buttons">
        <Button id="Languages-Button-he" onClick={() => i18n.changeLanguage("he")}>
          {t("HE")}
        </Button>
        <Button id="Languages-Button-en" onClick={() => i18n.changeLanguage("en")}>
          {t("EN")}
        </Button>
        <Button id="Languages-Button-ro" onClick={() => i18n.changeLanguage("ro")}>
          {t("RO")}
        </Button>
      </div>
    </div>
  );
};

export default Languages;
