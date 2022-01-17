import { Modal } from "react-bootstrap";
import LoginModal from "@src/modules/login-modal";
import SignUpModal from "@src/modules/signup-modal";
import { ButtonBase } from "@material-ui/core";
import classes from "./style.module.scss";

interface ICenteredModal {
  show: boolean;
  onHide: () => void;
  heading: string;
  toggleModal: (input: string) => void;
}
function CenteredModal({ onHide, show, heading, toggleModal }: ICenteredModal) {
  return (
    <Modal
        onHide={onHide}
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ padding: "0 20px" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {heading === "Login" ? <LoginModal /> : <SignUpModal />}
      </Modal.Body>
      <Modal.Footer style={{ display: "flex", justifyContent: "flex-start" }}>
        <LoginFooter
            text={heading === "Login" ? "New to Zomato? " : "Already have an account? "}
            link={heading === "Login" ? "Create an account" : "Login"}
            toggleModal={toggleModal}
            heading={heading}
        />
      </Modal.Footer>
    </Modal>
  );
}

interface IFooterProps {
  text: string;
  link: string;
  toggleModal: (input: string) => void;
  heading: string;
}

const LoginFooter = ({ text, link, toggleModal, heading }: IFooterProps) => {
  return (
    <div style={{ display: "flex" }}>
      <p>{text}</p>
      <ButtonBase className={classes.footerButton} onClick={() => toggleModal(heading)}>{link}</ButtonBase>
    </div>
  );
};

export default CenteredModal;
