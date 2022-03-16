import LoginModal from "@modules/login-modal";
import SignUpModal from "@modules/signup-modal";
import React from "react";
import Modal from "react-bootstrap/Modal";
import { ButtonBase } from "@material-ui/core";
import classes from "./style.module.scss";
import { ICenteredModal } from ".";

interface IModalContentProps extends Pick<ICenteredModal, "heading" | "toggleModal"> {}

const ModalContent = ({ heading, toggleModal }: IModalContentProps) => {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">{heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{heading === "Login" ? <LoginModal /> : <SignUpModal />}</Modal.Body>
            <Modal.Footer style={{ display: "flex", justifyContent: "flex-start" }}>
                <LoginFooter
                    text={heading === "Login" ? "New to Zomato? " : "Already have an account? "}
                    link={heading === "Login" ? "Create an account" : "Login"}
                    toggleModal={toggleModal}
                    heading={heading}
                />
            </Modal.Footer>
        </>
    );
};

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
            <ButtonBase className={classes.footerButton} onClick={() => toggleModal(heading)}>
                {link}
            </ButtonBase>
        </div>
    );
};

export default ModalContent;
