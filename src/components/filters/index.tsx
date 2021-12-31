import { Button, Chip } from "@material-ui/core";
import TuneIcon from "@material-ui/icons/Tune";
import PaymentIcon from "@material-ui/icons/Payment";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import React from "react";
import { Modal } from "react-bootstrap";
import VerticalTabs from "../vertical-tabs";
import classes from "./style.module.scss";

const CustomFilters = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.container}>
      <Chip
          avatar={<TuneIcon />}
          label="Filters"
          className={classes.firstChip}
          onClick={handleOpen}
      />
      <Chip
          avatar={<FastfoodIcon />}
          label="Cuisines"
          className={classes.secondChip}
          onClick={handleOpen}
      />
      <Chip
          avatar={<PaymentIcon />}
          label="Cost per Person"
          className={classes.thirdChip}
          onClick={handleOpen}
      />
      <FilterModal show={open} onHide={handleClose} />
    </div>
  );
};

interface IFilterModalProps {
  show: boolean;
  onHide: () => void;
}

const FilterModal = ({ show, onHide }: IFilterModalProps) => {
  return (
    <Modal
        onHide={onHide}
        show={show}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ padding: "0 20px", borderRadius: "16px" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Filters</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: 0 }}>
        <VerticalTabs />
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

export default CustomFilters;
