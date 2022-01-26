import { Button } from "@material-ui/core";
import { Modal } from "react-bootstrap";
import VerticalTabs from "../filters-vertical-tabs";

interface IFilterModalProps {
    show: boolean;
    onHide: () => void;
    currency: string;
}

const FilterModal = ({ show, onHide, currency }: IFilterModalProps) => {
    return (
        <Modal
            onHide={onHide}
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ padding: "0 20px", borderRadius: "16px" }}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Filters</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ padding: 0 }}>
                <VerticalTabs currency={currency} />
            </Modal.Body>
            <Modal.Footer style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained" style={{ marginRight: "20px" }}>
                    Clear All
                </Button>
                <Button variant="contained" color="primary">
                    Apply
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FilterModal;
