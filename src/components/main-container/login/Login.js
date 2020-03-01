import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Button, Header, Modal, Grid, Message, Image, Form } from "semantic-ui-react";

export const Login = () => {
  const [dataValid, setDataValid] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const loginFailedMessage = useSelector(({ user: { loginMessage } }) => loginMessage);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const inputChanger = {
    username: setUsername,
    password: setPassword
  };

  const handleLogin = () => {
    dispatch(userLoginCleanError());
    setLoadingSpinner(true);
    dispatch(loginAction(username, password));
  };

  const submitButton = dataValid => {
    setDataValid(dataValid);
  };

  const onChange = ({ target: { name, value } }) => {
    dispatch(userLoginCleanError());
    setLoadingSpinner(false);
    inputChanger[name](value);
  };

  return (
    
  );
};
