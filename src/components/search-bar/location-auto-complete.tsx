import { ChangeEvent, useEffect, useState } from "react";
import { getLocationSuggestions } from "@constants/index";
import { useSnackbar } from "notistack";
import useDebounce from "@modules/use-debounce";
import { useRouter } from "next/router";
import { LocationOn } from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { LocationSuggestion } from "../../modules/interface/location-interface";
import { autoComplete, dropDown } from "./styles";

export type IAutoCompleteValue = {
    cityName: string;
    entityId: number;
    entityType: string;
    locationName: string;
    locationId: number;
};

const LocationAutoComplete = () => {
    const [output, setOutput] = useState<LocationSuggestion[]>([]);
    const [autoCompleteValue, setAutoCompleteValue] = useState("");
    const [autoCompleteInputValue, setAutoCompleteInputValue] = useState("");
    const { enqueueSnackbar } = useSnackbar();
    const { inputRef } = useDebounce({ handleChange, time: 500 });
    const { push } = useRouter();

    useEffect(() => {
        setAutoCompleteInputValue(
            localStorage.getItem("userLocations") ? JSON.parse(localStorage.getItem("userLocations")!).cityName : "Jammu"
        );
    }, []);

    useEffect(() => {
        return () => {
            setAutoCompleteInputValue("");
        };
    }, []);

    async function handleChange(inputValue: string) {
        const data = await getLocationSuggestions(inputValue);
        if (data.length) {
            setOutput(data);
        } else {
            enqueueSnackbar("No location found", { variant: "error" });
        }
    }

    const handleInputChange = (inputString: string) => {
        inputRef.current(inputString);
    };

    const handleAutoCompleteValueChange = (event: ChangeEvent<{}>, value: string) => {
        setAutoCompleteValue(value);
        const filteredLocationData = output.filter((el) => el.title === value)[0];

        const localStorageUpdatedData: IAutoCompleteValue = {
            entityId: filteredLocationData.entity_id ?? 11307,
            entityType: filteredLocationData.entity_type ?? "city",
            cityName: filteredLocationData.title ?? "Jammu",
            locationName: filteredLocationData.city_name ?? "Jammu",
            locationId: filteredLocationData.city_id ?? "11307"
        };
        localStorage.setItem("userLocations", JSON.stringify(localStorageUpdatedData));

        const getSubLocation: string = filteredLocationData.title.split(",")[0].toLowerCase();
        push({
            pathname: "/location",
            query: {
                countryName: filteredLocationData.country_name,
                cityName: filteredLocationData.city_name?.toLowerCase(),
                area: getSubLocation,
                cityId: filteredLocationData.entity_id,
                entityType: filteredLocationData.entity_type
            }
        });
        // Need to check later
        // push(`/${newValue.city_name?.toLowerCase()}?area=${encodeURIComponent(getSubLocation)}`);
    };

    const handleAutoCompleteInputChange = (event: ChangeEvent<{}>, value: string) => {
        setAutoCompleteInputValue(value);
        handleInputChange(value);
    };

    return (
        <Autocomplete
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    fullWidth
                    placeholder="Search for locations here"
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocationOn color="primary" />
                            </InputAdornment>
                        )
                    }}
                />
            )}
            classes={{ paper: dropDown }}
            loading={!output.length}
            loadingText={<AutoCompleteLoader />}
            freeSolo
            closeIcon={null}
            className={autoComplete}
            disableClearable
            forcePopupIcon={false}
            value={autoCompleteValue}
            onChange={handleAutoCompleteValueChange}
            inputValue={autoCompleteInputValue}
            onInputChange={handleAutoCompleteInputChange}
            options={output.map((el) => el.title)}
        />
    );
};

const AutoCompleteLoader = () => <div>Loading...</div>;

export default LocationAutoComplete;
