import React from "react";
import { Modal } from "react-bootstrap";
import Link from "next/link";
import LoginModal from "@src/modules/login-modal";

interface ICenteredModal {
  show: boolean;
  onHide: () => void;
  heading: string;
}
function CenteredModal({ onHide, show, heading }: ICenteredModal) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Modal
      onHide={onHide}
      show={show}
      size="md"
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
        {heading === "Login" ? <LoginModal /> : <p>hii</p>}
      </Modal.Body>
      <Modal.Footer style={{ display: "flex", justifyContent: "flex-start" }}>
        {heading === "Login" ? <LoginFooter /> : <p>Hii</p>}
      </Modal.Footer>
    </Modal>
  );
}

const LoginFooter = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "8px" }}>
      <p>New to Zomato? </p>
      <Link href="/">
        Create account
      </Link>
    </div>
  )
}

export default CenteredModal;