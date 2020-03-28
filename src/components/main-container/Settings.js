import React from "react";
import { Button } from "semantic-ui-react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>Settings</h1>
      <Button
        id="Modal-Translation-Button-he"
        floated="left"
        onClick={() => i18n.changeLanguage("he")}
      >
        {t("HE")}
      </Button>
      <Button
        id="Modal-Translation-Button-en"
        floated="left"
        onClick={() => i18n.changeLanguage("en")}
      >
        {t("EN")}
      </Button>
    </div>
  );
};

export default Settings;
