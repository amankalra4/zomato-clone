import { getRestaurantSuggestions } from "@constants/index";
import { useSnackbar } from "notistack";
import useDebounce from "@modules/use-debounce";
import { useRouter } from "next/router";
import { Search, Star } from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ChangeEvent, useEffect, useState } from "react";
import { IRestaurant } from "@modules/interface/restuarant";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { IAutoCompleteValue } from "./location-auto-complete";
import {
    autoComplete,
    restaurantDropDown,
    restaurantData,
    dropDownContainer,
    dropDownRestaurantContainer,
    restaurantInfoContainer,
    restaurantName,
    ratingContainer,
    getStyles
} from "./styles";

const RestaurantAutoComplete = () => {
    const [output, setOutput] = useState<IRestaurant[]>([]);
    const [autoCompleteValue, setAutoCompleteValue] = useState("");
    const [autoCompleteInputValue, setAutoCompleteInputValue] = useState("");
    const { enqueueSnackbar } = useSnackbar();
    const { inputRef } = useDebounce({ handleChange, time: 500 });
    const { push } = useRouter();

    useEffect(() => {
        return () => {
            setAutoCompleteInputValue("");
        };
    }, []);

    async function handleChange(searchQuery: string, entityId?: number) {
        const data = await getRestaurantSuggestions(entityId!, searchQuery);
        if (data) {
            setOutput(data);
        } else {
            enqueueSnackbar("No restaurants found", { variant: "error" });
        }
    }

    const handleInputChange = (entityId: number, entityType: string) => {
        inputRef.current(autoCompleteInputValue, entityId, entityType);
    };

    const handleAutoCompleteValueChange = (event: ChangeEvent<{}>, inputValue: string | IRestaurant) => {
        const value = inputValue as IRestaurant;
        setAutoCompleteValue(value.restaurant.name);
        push({
            pathname: `restaurant/${value.restaurant.name.split(" ").join("-").toLowerCase()}`,
            query: {
                id: value.restaurant.id
            }
        });
    };

    const handleAutoCompleteInputChange = (event: ChangeEvent<{}>, value: string) => {
        setAutoCompleteInputValue(value);
        let localStorageData: IAutoCompleteValue;
        if (localStorage.getItem("userLocations")) {
            localStorageData = JSON.parse(localStorage.getItem("userLocations")!);
        } else {
            localStorageData = {
                cityName: "Jammu",
                entityId: 11307,
                entityType: "city",
                locationName: "Jammu",
                locationId: 11307
            };
        }
        handleInputChange(localStorageData.entityId, localStorageData.entityType);
    };

    return (
        <Autocomplete
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    fullWidth
                    placeholder="Search restaurants"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        )
                    }}
                />
            )}
            classes={{ paper: restaurantDropDown }}
            style={{ border: "none" }}
            loading={!output.length}
            loadingText={<AutoCompleteLoader />}
            freeSolo
            closeIcon={null}
            className={`${autoComplete} ${restaurantData}`}
            disableClearable
            forcePopupIcon={false}
            value={autoCompleteValue}
            onChange={handleAutoCompleteValueChange}
            inputValue={autoCompleteInputValue}
            onInputChange={handleAutoCompleteInputChange}
            options={output}
            getOptionLabel={(option) => {
                return option?.restaurant?.name ?? "";
            }}
            renderOption={(option: IRestaurant) => {
                return (
                    <div className={dropDownContainer}>
                        {output.length ? (
                            <div className={dropDownRestaurantContainer}>
                                <img
                                    style={{ borderRadius: "8px" }}
                                    src={option.restaurant.featured_image}
                                    alt={option.restaurant.name}
                                    height={90}
                                    width={90}
                                />
                                <div className={restaurantInfoContainer}>
                                    <span className={restaurantName}>{option.restaurant.name}</span>
                                    <div className={ratingContainer}>
                                        Rated
                                        <div className={getStyles(option.restaurant.user_rating.rating_color).ratingClass}>
                                            <span>{option.restaurant.user_rating.aggregate_rating || "-"}</span>
                                            <Star style={{ width: "12px", height: "12px" }} />
                                        </div>
                                    </div>
                                    <span style={{ fontSize: "12px", fontWeight: 500 }}>
                                        {option.restaurant.location.locality}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <p>Loading....</p>
                        )}
                    </div>
                );
            }}
        />
    );
};

const AutoCompleteLoader = () => <div>Loading...</div>;

export default RestaurantAutoComplete;
