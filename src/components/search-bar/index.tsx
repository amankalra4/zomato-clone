import React, { ChangeEvent, useState } from "react";
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Autocomplete } from "@material-ui/lab";
import { GET_LOCATIONS } from "@src/constants";
import { useSnackbar } from 'notistack';
import useDebounce from "@src/modules/use-debounce";
import { useRouter } from "next/router";
import { LocationSuggestion } from "./location";
import RestaurantSearch from "./restaurants-search";
import config from "../../../next.config";

const Searchbar = () => {
    const defaultLocation: LocationSuggestion[] = [{ title: "Jammu", city_id: 11307 }];
    const [output, setOutput] = useState<LocationSuggestion[]>([]);
    const [selectedCityId, setSelectedCityId] = useState<number>(defaultLocation[0].city_id);
    const { enqueueSnackbar } = useSnackbar();
    const { inputRef } = useDebounce({ handleChange, time: 500 });
    const { push } = useRouter();
    // console.log("env check", process.env.NODE_ENV) -- to check ENV

    function handleChange(inputValue: string) {
        axios
            .get(GET_LOCATIONS.replace("%s", inputValue), {
                headers: {
                    "user-key": config.config.zomatoAPI
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
                enqueueSnackbar("Incorrect location given", { variant: "error" });
            });
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        inputRef.current(event.target.value);
    };

    const handleAutoCompleteChange = (event: ChangeEvent<{}>, newValue: any) => {
        setSelectedCityId(newValue.city_id);
        const getSubLocation: string = newValue.title.split(",")[0].toLowerCase();
        push({
            pathname: `/${newValue.city_name?.toLowerCase()}`,
            query: { area: getSubLocation, cityId: newValue.city_id }
        });
        // Need to check later
        // push(`/${newValue.city_name?.toLowerCase()}?area=${encodeURIComponent(getSubLocation)}`);
    };

    return (
        // eslint-disable-next-line max-len
        <div style={{ background: "rgb(255, 255, 255)", boxShadow: "rgb(28 28 28 / 8%) 0px 2px 8px", border: "1px solid rgb(232, 232, 232)", width: "35%", borderRadius: "0.8rem", padding: "5px 0", display: "flex" }}>
            <Autocomplete
                options={output}
                getOptionLabel={(option) => { return option.title; }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        fullWidth
                        onChange={handleInputChange}
                    />
                )}
                style={{ width: "100%", outline: "none", border: 'none' }}
                loading={!output.length}
                loadingText={<>LOADINGGGG</>}
                freeSolo
                closeIcon={null}
                onChange={handleAutoCompleteChange}
            />
            <RestaurantSearch entityId={selectedCityId!} />
        </div>
    );
};

export default Searchbar;
