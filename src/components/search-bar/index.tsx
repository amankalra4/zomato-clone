import React, { ChangeEvent, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import { GET_LOCATIONS } from "@src/constants";
import { useSnackbar } from "notistack";
import useDebounce from "@src/modules/use-debounce";
import { useRouter } from "next/router";
import { Search } from "@material-ui/icons";
import { InputAdornment } from "@material-ui/core";
import useDevice from "@src/custom-hooks/use-is-Phone";
import { commonHeader } from "@src/constants/api-call";
import { LocationSuggestion } from "./location";
import classes from "./style.module.scss";

interface ISearchBarProps {
  searchBarBackground?: string;
}
const Searchbar = ({ searchBarBackground = "none" }: ISearchBarProps) => {
  const [output, setOutput] = useState<LocationSuggestion[]>([]);
  const { enqueueSnackbar } = useSnackbar();
  const { inputRef } = useDebounce({ handleChange, time: 500 });
  const { push } = useRouter();
  const isPhone = useDevice("767");
  // console.log("env check", process.env.NODE_ENV) -- to check ENV

  function handleChange(inputValue: string) {
    const inputURL = GET_LOCATIONS.replace("%s", inputValue);
    commonHeader(inputURL)
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
    const getSubLocation: string = newValue.title.split(",")[0].toLowerCase();
    push({
      pathname: "/location",
      query: {
        cityName: newValue.city_name?.toLowerCase(),
        area: getSubLocation,
        cityId: newValue.city_id
      }
    });
    // Need to check later
    // push(`/${newValue.city_name?.toLowerCase()}?area=${encodeURIComponent(getSubLocation)}`);
  };

  return (
    <Autocomplete
        options={output}
        getOptionLabel={(option) => {
            return option.title;
        }}
        renderInput={(params) => (
            <TextField
                {...params}
                variant="outlined"
                fullWidth
                onChange={handleInputChange}
                className={classes.searchBar}
                style={{ margin: searchBarBackground === "none" ? "20px 0" : "0" }}
                InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                    <InputAdornment position="end">
                        <Search />
                    </InputAdornment>
                    )
                }}
            />
        )}
        style={{ backgroundColor: searchBarBackground }}
        loading={!output.length}
        loadingText={<AutoCompleteLoader />}
        freeSolo
        closeIcon={null}
        onChange={handleAutoCompleteChange}
        className={classes.autoComplete}
        data-src={(!isPhone && searchBarBackground) ? "true" : "false"}
        disableClearable
        forcePopupIcon={false}
    />
  );
};

const AutoCompleteLoader = () => (
  <div className={classes.autoCompleteLoader}>
    Loading...
  </div>
);

export default Searchbar;
