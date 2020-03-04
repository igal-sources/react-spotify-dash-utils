import React, { useState } from "react";
import { useDispatch } from "react-redux";
import allActions from "actions";
import { Button, Menu, Popup } from "semantic-ui-react";
import ConfirmLogout from "./ConfirmLogout";
import { useUserMail, useUserName } from "services/hooks/use-selectors";
import "./logout.scss";

export const Logout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const dispatch = useDispatch();

  const userEmail = useUserMail();
  const userName = useUserName();

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

  const style = {
    borderRadius: 5,
    opacity: 0.7,
    padding: "1.5em"
  };

  return (
    <>
      <ConfirmLogout show={isOpen} close={onClose} confirm={onConfirm} id="Logout-ConfirmLogout" />
      <Menu.Item>
        <Popup
          content={userName}
          position="bottom center"
          size="mini"
          style={style}
          trigger={
            <Button onClick={open} className="item Header-menuItem">
              <div className="circle user-tooltip">{extractFirstLetters(userEmail)}</div>
              {confirm ? <Navigate id="Logout_Navigate" /> : <div />}
            </Button>
          }
        />
      </Menu.Item>
    </>
  );
};

export default Logout;
