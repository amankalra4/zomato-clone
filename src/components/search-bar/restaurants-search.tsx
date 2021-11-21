import { TextField } from "@material-ui/core";
import { Autocomplete } from "@mui/material";
import { getRestaurants } from "@src/constants";
import useDebounce from "@src/modules/use-debounce";
import { useSnackbar } from "notistack";
import React, { ChangeEvent, useState } from "react";
import { Restaurant } from "../../modules/interface/restuarant";

interface IRestaurantSearchProps {
    entityId: number;
}

const RestaurantSearch = ({ entityId = 11307 }: IRestaurantSearchProps) => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const { enqueueSnackbar } = useSnackbar();
    const { inputRef } = useDebounce({ handleChange, time: 500 });

    async function handleChange(input: string = "jammu") {
        const resultantData = await getRestaurants(entityId.toString(), input);
        if (resultantData.status === 200) {
            if (resultantData.data.restaurants.length) {
                setRestaurants(resultantData.data.restaurants);
            } else {
                enqueueSnackbar("No restaurants found", { variant: "error" });
            }
        } else {
            enqueueSnackbar("An error was found", { variant: "error" });
        }
    }

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
    );
};

export default RestaurantSearch;
