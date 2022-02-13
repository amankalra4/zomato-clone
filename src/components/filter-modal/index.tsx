import { Button } from "@material-ui/core";
import { ReactNode, memo } from "react";
import { Modal } from "react-bootstrap";

interface IFilterModalProps {
    show: boolean;
    onHide: () => void;
    handleClearAll?: () => void;
    handleApply: () => void;
    children: ReactNode;
    clearAllNotRequired?: boolean;
}

const FilterModal = ({ show, onHide, handleClearAll, handleApply, children, clearAllNotRequired = false }: IFilterModalProps) => {
    const handleApplyClick = () => {
        handleApply();
        onHide();
    };

    return (
        <Modal
            onHide={onHide}
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ maxHeight: "70%", position: "absolute", top: "16%" }}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Filters</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer
                style={{ display: "flex", justifyContent: "flex-end", position: "sticky", bottom: 0, background: "white" }}
            >
                {!clearAllNotRequired && (
                    <Button variant="contained" style={{ marginRight: "20px" }} onClick={handleClearAll}>
                        Clear All
                    </Button>
                )}
                <Button variant="contained" color="primary" onClick={handleApplyClick}>
                    Apply
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default memo(FilterModal);
