import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useUser } from "../../../../services/hooks/use-selectors";
import countries from "../../../../shared/CountryCodes_main.json";
import userImage from "./user-vector.png";
import "./user-profile.scss";

const UserProfile = () => {
  const { t } = useTranslation();
  const isCancelled = useRef(false);
  const { country, type, display_name, email, images = [], id } = useUser();
  const [countryName, setCountryName] = useState("");
  const [countryFlag, setCountryFlag] = useState("");

  const getCountryData = code => {
    const result = countries.filter(country => country.code === code);
    setCountryName(result[0].name);
    setCountryFlag(result[0].flag);
  };

  useEffect(() => {
    !isCancelled.current && getCountryData(country);
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="UserProfile-container">
      <div className="UserProfile-body-item left">
        <div className="UserProfile-title">
          <div className="UserProfile-user-name">{display_name}</div>
          <div className="UserProfile-user-image">
            <img src={images.length > 0 ? images[0].url : userImage} alt={display_name}></img>
          </div>
        </div>
      </div>
      <div className="UserProfile-body-item right">
        <div className="UserProfile-details">
          <p>{t("user-id")}</p>
          <p>{id}</p>
          <p>{t("user-email")}</p>
          <p>{email}</p>
          <p>{t("user-type")}</p>
          <p>{type}</p>
          <p>{t("user-country")}</p>
          <div className="UserProfile-country">
            <div id="country-name">{countryName}</div>
            <div id="country-flag">{countryFlag}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
