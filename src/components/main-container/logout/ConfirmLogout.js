import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Modal, Button } from "semantic-ui-react";
import "./confirm-logout.css";

export const ConfirmLogout = props => {
  const { t } = useTranslation();

  return (
    <Modal
      open={props.show}
      closeIcon={false}
      id="ConfirmLogout-main"
      className="ConfirmLogout-main"
    >
      <Modal.Content id="ConfirmLogout-text" className="ConfirmLogout-text">
        <h3>{t("confirm-logout")}</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button id="Confirm-Logout-Button-Green" color="green" onClick={props.confirm}>
          {t("YES")}
        </Button>
        <Button id="Confirm-Logout-Button-Red" color="red" onClick={props.close}>
          {t("NO")}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

ConfirmLogout.propTypes = {
  t: PropTypes.func,
  show: PropTypes.bool,
  confirm: PropTypes.func,
  close: PropTypes.func
};

export default ConfirmLogout;
