import React from "react";
// import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from "@material-ui/core";
import classes from "./styles.module.scss";

interface TabPanelProps {
  children?: React.ReactNode;
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
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [radioValue, setRadioValue] = React.useState("female");

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value);
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
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
        <Tab label="Cuisines" />
        <Tab label="Rating" />
        <Tab label="Cost per person" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <FormControl component="fieldset">
          <FormLabel component="legend" color="primary">
            Gender
          </FormLabel>
          <RadioGroup
              color="primary"
              aria-label="gender"
              name="gender1"
              value={radioValue}
              onChange={handleChange1}
          >
            <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FormControl component="fieldset">
          <FormLabel component="legend" color="primary">
            Gender
          </FormLabel>
          <RadioGroup
              color="primary"
              aria-label="gender"
              name="gender1"
              value={radioValue}
              onChange={handleChange1}
          >
            <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FormControl component="fieldset">
          <FormLabel component="legend" color="primary">
            Gender
          </FormLabel>
          <RadioGroup
              color="primary"
              aria-label="gender"
              name="gender1"
              value={radioValue}
              onChange={handleChange1}
          >
            <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl>
      </TabPanel>
    </div>
  );
}
