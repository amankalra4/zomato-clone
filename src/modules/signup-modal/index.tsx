/* eslint-disable max-len */
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import DividerWithText from "@components/divider-with-text";
import { useState, ChangeEvent } from "react";
import { GoogleButton } from "../login-modal";
import { container } from "./styles";

const SignUpModal = () => {
    const [fullName, setFullName] = useState<string>("");
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const [check, setCheck] = useState<boolean>(false);

    const handleCheckBox = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setCheck(checked);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "fullName") {
            setFullName(event.target.value);
        } else {
            const emailValid = validateEmail(event.target.value);
            if (emailValid) {
                setIsEmailValid(true);
            } else {
                setIsEmailValid(false);
            }
        }
    };

    function validateEmail(input: string) {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(input).toLowerCase());
    }

    return (
        <div className={container}>
            <TextField
                name="fullName"
                placeholder="Full Name"
                label="Full Name"
                variant="outlined"
                onChange={handleChange}
                style={{ marginBottom: "1.2rem" }}
            />
            <TextField label="Email" placeholder="Email" variant="outlined" onChange={handleChange} />
            <FormControlLabel
                control={<Checkbox checked={check} onChange={handleCheckBox} color="primary" />}
                label="I  agree to Zomato's Terms of Service, Privacy Policy and Content Policies"
                style={{ margin: "20px 0 0" }}
            />
            <Button
                variant="contained"
                disabled={fullName.length < 2 || !isEmailValid || !check}
                color="primary"
                style={{ marginTop: "20px" }}
            >
                Create Account
            </Button>
            <DividerWithText text="or" />
            <GoogleButton />
        </div>
    );
};

export default SignUpModal;
