import { FormControl, MenuItem, Select } from "@material-ui/core";
import React from "react";
import classes from "./style.module.scss";

interface ICommonDropDown {
    value: string[];
    title: string;
    icon: React.ReactElement;
    marginLeft?: boolean;
}

const CommonDropDown = ({ title, value, icon, marginLeft }: ICommonDropDown) => (
    <FormControl className={classes.formClass} data-src={marginLeft ? "margin" : ""}>
         <Select value={title}>
            <MenuItem value={title}>
                <span>{title}</span>
            </MenuItem>
            {value.map((el) => (
                <MenuItem key={el}>
                    <span>{el}</span>
                </MenuItem>
            ))}
        </Select>
    </FormControl>
);

export default CommonDropDown;
