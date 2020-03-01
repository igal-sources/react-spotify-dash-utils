import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "semantic-ui-react";
import "./confirm-logout.css";

export const ConfirmLogout = props => {
  return (
    <Modal
      open={props.show}
      closeIcon={false}
      id="ConfirmLogout-main"
      className="ConfirmLogout-main"
    >
      <Modal.Content id="ConfirmLogout-text" className="ConfirmLogout-text">
        <h3>Confirm Logout</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button id="Confirm-Logout-Button-Green" color="green" onClick={props.confirm}>
          Yes
        </Button>
        <Button id="Confirm-Logout-Button-Red" color="red" onClick={props.close}>
          No
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
