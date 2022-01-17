import { Chip } from "@material-ui/core";
import { Tune, Payment, Fastfood, Grade } from "@material-ui/icons";
import { ReactElement, useState } from "react";
import dynamic from "next/dynamic";
import { chip, container } from "./styles";

const FilterModal = dynamic(() => import("../filter-modal"));

type Icon = ReactElement

type ChipData = {
  label: "Filters" | "Cuisines" | "Cost per Person" | "Rating",
  icon: Icon
};

const chipData: ChipData[] = [
  {
    label: "Filters",
    icon: <Tune />
  },
  {
    label: "Cuisines",
    icon: <Fastfood />
  },
  {
    label: "Cost per Person",
    icon: <Payment />
  },
  {
    label: "Rating",
    icon: <Grade />
  }
];

const CustomFilters = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={container}>
      {chipData.map((el) => <Chip key={el.label} avatar={el.icon} label={el.label} className={chip} onClick={handleOpen} />)}
      {open && <FilterModal show={open} onHide={handleClose} />}
    </div>
  );
};

export default CustomFilters;
