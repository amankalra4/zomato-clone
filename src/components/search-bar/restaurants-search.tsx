import { TextField } from "@material-ui/core"
import { Autocomplete } from "@mui/material";
import { GET_RESTAURANTS } from "@src/constants";
import useDebounce from "@src/modules/use-debounce";
import axios from "axios";
import { useSnackbar } from "notistack";
import React, { ChangeEvent, useState } from "react"
import { Restaurant } from "./restuarant";
import config from "../../../next.config";

interface IRestaurantSearchProps {
    entityId: number;
}

const RestaurantSearch = ({ entityId = 11307 }: IRestaurantSearchProps) => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const { enqueueSnackbar } = useSnackbar();
    const { inputRef } = useDebounce({ handleChange, time: 300 });

    function handleChange(input: string = "jammu") {
        axios
            .get(GET_RESTAURANTS.replace("%s1", entityId.toString()).replace("%s2", input), {
                headers: {
                    ["user-key"]: config.config.zomatoAPI
                }
            })
            .then((result) => {
                if (result.data.restaurants.length) {
                    setRestaurants(result.data.restaurants);
                } else {
                    enqueueSnackbar("No restaurants found", { variant: "error" });
                }
            })
            .catch((error) => {
                enqueueSnackbar(error.response.data.message, { variant: "error" });
            });
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;
        inputRef.current(input);
    };

    return (
        <Autocomplete
            options={restaurants}
            getOptionLabel={(option) => option.restaurant.name}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    fullWidth
                    onChange={handleInputChange}
                />
            )}
            style={{ width: "100%", outline: "none", border: 'none' }}
        />
    )
}

export default RestaurantSearch;
