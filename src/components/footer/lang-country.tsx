import { FormControl, MenuItem, Select } from "@material-ui/core";
import React from "react";
import { formClass } from "./styles";

interface ICommonDropDown {
    value: string[];
    title: string;
    marginLeft?: boolean;
}

const CommonDropDown = ({ title, value, marginLeft }: ICommonDropDown) => (
    <FormControl className={formClass} data-src={marginLeft ? "margin" : ""}>
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
