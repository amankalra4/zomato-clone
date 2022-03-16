import CircularProgress from "@material-ui/core/CircularProgress";
import dynamic from "next/dynamic";
import Modal from "react-bootstrap/Modal";

const ModalContent = dynamic(() => import("./modal-content"), {
    loading: () => (
        <div style={{ padding: "4rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CircularProgress style={{ width: "60px", height: "60px" }} />
        </div>
    )
});

export interface ICenteredModal {
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
            <ModalContent heading={heading} toggleModal={toggleModal} />
        </Modal>
    );
}

export default CenteredModal;
