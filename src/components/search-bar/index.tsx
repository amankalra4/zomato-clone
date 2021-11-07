import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import TextField from '@material-ui/core/TextField';
import _ from 'lodash';
import axios from 'axios';
import { Search } from '@material-ui/icons';
import { Autocomplete } from "@material-ui/lab";
import { GET_LOCATIONS } from "@src/constants";
import { LocationSuggestion } from "./location";

const Searchbar = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState<LocationSuggestion[]>([]);
    const inputRef = useRef();

    useEffect(() => {
        // initialize debounce function to search once user has stopped typing every half second
        inputRef.current = _.debounce(onSearchText, 300);
    }, []);
    
    const onSearchText = (input: string) => {
        // setIsLoading(true);
        console.log("onSearchText");
        axios
          .get(GET_LOCATIONS.replace("%s", input), {
              headers: {
                  ["user-key"]: "99be1b474711cda8cdbb3db159d64e61"
              }
          })
          .then((result) => {
            setOutput(result.data.location_suggestions);
            // setErrorMsg('');
            // setIsLoading(false);
          })
          .catch(() => {
            // setErrorMsg('Something went wrong. Try again later.');
            // setIsLoading(false);
          });
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;
        setInput(input);
        inputRef.current(input);
    };

    return (
        <div style={{ background: "rgb(255, 255, 255)", boxShadow: "rgb(28 28 28 / 8%) 0px 2px 8px", border: "1px solid rgb(232, 232, 232)", width: "35%", borderRadius: "0.8rem", padding: "5px 0", display: "flex" }}>
            {/* <Dropdown style={{ outline: "none" }}>
                <Dropdown.Toggle variant="white" id="dropdown-basic" style={{ outline: "none", display: "flex", alignItems: "center", borderRight: "0.05rem solid rgb(207, 207, 207)", borderRadius: 0 }}>
                    <LocationOn />
                    <span>New Delhi</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
            {/* <TextField
                InputProps={{ disableUnderline: true }}
                placeholder="Enter city"
                style={{ margin: "auto auto auto 16px", borderRight: "0.05rem solid rgb(207, 207, 207)", paddingRight: "20px" }}
                onChange={handleInputChange}
                value={input}
            /> */}
            <Autocomplete 
                options={output?.map(el => el.title)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        fullWidth
                        onChange={handleInputChange}
                    />
                )}
                style={{ width:"100%", outline: "none", border: 'none' }}
            />
            <TextField
                InputProps={{ disableUnderline: true, startAdornment: <Search /> }}
                placeholder="Search for restaurant, cuisine or a dish"
                style={{ width: "100%", margin: "auto auto auto 16px" }}
            />
        </div>
    )
}

export default Searchbar;
