import { ReactNode, useState, ChangeEvent } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import dynamic from "next/dynamic";
import classes from "./styles.module.scss";
import CuisineFilter from "../cuisine-filter";

const RatingFilter = dynamic(() => import("../rating-filter"));
const CostPerPersonSlider = dynamic(() => import("../cost-per-person-filter"));

interface TabPanelProps {
  children?: ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
        style={{ flexGrow: 0.9, display: "flex" }}
    >
      {value === index && (
        <Box p={3} style={{ width: "100%" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function VerticalTabs({ currency }: { currency: string }) {
  const [value, setValue] = useState(0);
  const filterTypes = ["Cuisines", "Rating", "Cost Per Person"];
  // const [filteredObject, setFilteredObject] = useState({ cuisines: {}, rating: 0, cost })

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
      >
        {filterTypes.map((el) => <Tab key={el} label={el} />)}
      </Tabs>
      <TabPanel value={value} index={0}>
        <CuisineFilter />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RatingFilter />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CostPerPersonSlider currency={currency} />
      </TabPanel>
    </div>
  );
}
