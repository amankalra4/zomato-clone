import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Autocomplete } from "@material-ui/lab";
import { GET_LOCATIONS } from "@src/constants";
import { LocationSuggestion } from "./location";
import { useSnackbar } from 'notistack';
import useDebounce from "@src/modules/use-debounce";
import RestaurantSearch from "./restaurants-search";
import config from "../../../next.config";

const Searchbar = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState<LocationSuggestion[]>([]);
    const [selectedCityId, setSelectedCityId] = useState<number>(0);
    const { enqueueSnackbar } = useSnackbar();
    const { inputRef } = useDebounce({ handleChange, time: 300 });
    const defaultLocation: LocationSuggestion[] = [{ title: "Jammu", city_id: 11307 }];
    // console.log("env check", process.env.NODE_ENV) -- to check ENV

    function handleChange(input: string) {
        axios
            .get(GET_LOCATIONS.replace("%s", input), {
                headers: {
                    ["user-key"]: config.config.zomatoAPI
                }
            })
            .then((result) => {
                if (result.data.location_suggestions.length) {
                    setOutput(result.data.location_suggestions);
                } else {
                    enqueueSnackbar("No location found", { variant: "error" });
                }
            })
            .catch((error) => {
                enqueueSnackbar(error.response.data.message, { variant: "error" });
            });
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;
        setInput(input);
        inputRef.current(input);
    };

    return (
        <div style={{ background: "rgb(255, 255, 255)", boxShadow: "rgb(28 28 28 / 8%) 0px 2px 8px", border: "1px solid rgb(232, 232, 232)", width: "35%", borderRadius: "0.8rem", padding: "5px 0", display: "flex" }}>
            <Autocomplete
                options={output}
                getOptionLabel={(option) => { setSelectedCityId(option.city_id); return option.title }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        fullWidth
                        onChange={handleInputChange}
                    />
                )}
                defaultValue={defaultLocation[0]}
                style={{ width: "100%", outline: "none", border: 'none' }}
            />
            <RestaurantSearch entityId={selectedCityId} />
        </div>
    )
}

export default Searchbar;
