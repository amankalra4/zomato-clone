/* eslint-disable react/jsx-one-expression-per-line */
import { getRestaurantSuggestions } from "@constants/index";
import { useSnackbar } from "notistack";
import useDebounce from "@src/modules/use-debounce";
import { useRouter } from "next/router";
import { Search, Star } from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ChangeEvent, useEffect, useState } from "react";
import { IRestaurantSuggestionResult } from "@src/modules/interface/restaurant-suggestions-interface";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
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
    getStyles,
    flexClass,
    divider
} from "./styles";

const RestaurantAutoComplete = () => {
    const [output, setOutput] = useState<IRestaurantSuggestionResult[]>([]);
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

    async function handleChange(searchQuery: string, entityId?: number, entityType?: string) {
        const data = await getRestaurantSuggestions(entityId!, entityType!, searchQuery);
        if (data) {
            setOutput(data.filter((el) => el.entityType === "restaurant"));
        } else {
            enqueueSnackbar("No restaurants found", { variant: "error" });
        }
    }

    const handleInputChange = (entityId: number, entityType: string) => {
        inputRef.current(autoCompleteInputValue, entityId, entityType);
    };

    const handleAutoCompleteValueChange = (event: ChangeEvent<{}>, inputValue: string | IRestaurantSuggestionResult) => {
        const value = inputValue as IRestaurantSuggestionResult;
        setAutoCompleteValue(value.info.name);
        push({
            pathname: `restaurant/${value.info.name.split(" ").join("-").toLowerCase()}`,
            query: {
                id: value.info.resId
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
                entityType: "city"
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
                return option?.info?.name ?? "";
            }}
            renderOption={(option: IRestaurantSuggestionResult, state: any) => {
                return (
                    <div className={dropDownContainer}>
                        {output.length ? (
                            <div className={dropDownRestaurantContainer}>
                                <img
                                    style={{ borderRadius: "8px" }}
                                    src={option.info.image.url}
                                    alt={option.info.name}
                                    height={90}
                                    width={90}
                                />
                                <div className={restaurantInfoContainer}>
                                    <span className={restaurantName}>{option.info.name}</span>
                                    <div className={ratingContainer}>
                                        <div className={flexClass}>
                                            <div className={getStyles(`#${option.info.rating.color}`).ratingClass}>
                                                <span>{option.info.ratingNew.ratings.DINING?.rating || "-"}</span>
                                                <Star style={{ width: "12px", height: "12px" }} />
                                            </div>
                                            <span style={{ marginLeft: "5px", fontSize: "12px" }}>DINING</span>
                                        </div>
                                        <Divider orientation="vertical" className={divider} />
                                        <div className={flexClass}>
                                            <div
                                                className={
                                                    getStyles(option.info.ratingNew.ratings.DELIVERY?.bgColorV2.type).ratingClass
                                                }
                                            >
                                                <span>{option.info.ratingNew.ratings.DELIVERY?.rating || "-"}</span>
                                                <Star style={{ width: "12px", height: "12px" }} />
                                            </div>
                                            <span style={{ marginLeft: "5px", fontSize: "12px" }}>DELIVERY</span>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: "12px", fontWeight: 500 }}>{option.info.locality.name}</span>
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
