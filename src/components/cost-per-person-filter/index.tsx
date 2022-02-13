import { useContext, useState, ChangeEvent } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { OrderContext, orderType } from "../filters";

const CostFilter = ({ handleCostChange }: { handleCostChange: (value: orderType) => void }) => {
    const { cost } = useContext(OrderContext);
    const [value, setValue] = useState<orderType>(cost);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleCostChange((event.target as HTMLInputElement).value as orderType);
        setValue((event.target as HTMLInputElement).value as orderType);
    };

    return (
        <>
            <h5>Cost Per Person</h5>
            <FormControl component="fieldset">
                <RadioGroup value={value} onChange={handleChange}>
                    <FormControlLabel value="asc" control={<Radio color="primary" />} label="Cost: Low to High" />
                    <FormControlLabel value="desc" control={<Radio color="primary" />} label="Cost: High to Low" />
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default CostFilter;
