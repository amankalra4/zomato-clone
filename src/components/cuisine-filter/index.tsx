import { useContext, ChangeEvent } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { CuisineContext } from "../filters";

const CuisineFilter = () => {
    const { data, isLoading, handleClick } = useContext(CuisineContext);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleClick(event.target.name, event.target.checked, +event.target.id);
    };

    return (
        <div style={{ overflow: "scroll" }}>
            <h5>All Cuisines</h5>
            {isLoading ? (
                <CircularProgress style={{ display: "flex", justifyContent: "center", margin: "0 auto" }} />
            ) : (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                    {Object.entries(data).map((el) => (
                        <div key={el[1].cuisineId}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={el[1].isChecked}
                                        onChange={handleChange}
                                        name={el[0]}
                                        id={el[1].cuisineId.toString()}
                                    />
                                }
                                label={el[0]}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CuisineFilter;
