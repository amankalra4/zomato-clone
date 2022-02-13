import { useContext, useState, ChangeEvent } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { OrderContext, orderType } from "../filters";

const RatingFilter = ({ handleRatingChange }: { handleRatingChange: (value: orderType) => void }) => {
    const { rating } = useContext(OrderContext);
    const [value, setValue] = useState<orderType>(rating);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleRatingChange((event.target as HTMLInputElement).value as orderType);
        setValue((event.target as HTMLInputElement).value as orderType);
    };

    return (
        <>
            <h5>Rating</h5>
            <FormControl component="fieldset">
                <RadioGroup value={value} onChange={handleChange}>
                    <FormControlLabel value="desc" control={<Radio color="primary" />} label="Rating: High to Low" />
                    <FormControlLabel value="asc" control={<Radio color="primary" />} label="Rating: Low to High" />
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default RatingFilter;
