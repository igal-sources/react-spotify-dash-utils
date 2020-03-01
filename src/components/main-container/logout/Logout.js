import React, { useState } from "react";
import { useDispatch } from "react-redux";
import allActions from "../../../actions";
import { Button, Menu } from "semantic-ui-react";
import ConfirmLogout from "./ConfirmLogout";
import { useUserMail } from "../../../services/hooks/use-selectors";
import "./logout.scss";

export const Logout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const dispatch = useDispatch();

  const username = useUserMail();

  const extractFirstLetters = (userEmail = "?") => {
    const emailSplittedArray = userEmail
      .split("@")[0]
      .split(".")
      .slice(0, 2);
    return emailSplittedArray.map(name => name[0]).join("");
  };

  const onClose = () => setIsOpen(false);

  const onConfirm = () => {
    setIsOpen(false);
    setConfirm(true);
  };

  const open = () => {
    setIsOpen(true);
  };

  const Navigate = () => {
    dispatch(allActions.userActions.logOut());
    return null;
  };

  return (
    <>
      <ConfirmLogout show={isOpen} close={onClose} confirm={onConfirm} id="Logout-ConfirmLogout" />
      <Menu.Item>
        <Button onClick={open} className="item Header-menuItem">
          <div className="circle">{extractFirstLetters(username)}</div>
          {confirm ? <Navigate id="Logout_Navigate" /> : <div />}
        </Button>
      </Menu.Item>
    </>
  );
};

export default Logout;
