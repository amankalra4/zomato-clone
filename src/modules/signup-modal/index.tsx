import { Button, Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import DividerWithText from "@src/components/divider-with-text";
import React, { useState } from "react";
import { GoogleButton } from "../login-modal";

const SignUpModal = () => {
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const [check, setCheck] = useState<boolean>(false);

    const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setCheck(checked);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "fullName") {
            setFullName(event.target.value)
        } else {
            const isEmailValid = validateEmail(event.target.value);
            if (isEmailValid) {
                setIsEmailValid(true);
                setEmail(event.target.value);
            } else {
                setIsEmailValid(false);
            }
        }
    }

    function validateEmail(input: string) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(input).toLowerCase());
    }

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
            <TextField style={{ marginBottom: "1.2rem" }} name="fullName" placeholder="Full Name" label="Full Name" variant="outlined" onChange={handleChange} />
            <TextField label="Email" placeholder="Email" variant="outlined" onChange={handleChange} />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={check}
                        onChange={handleCheckBox}
                        color="primary" />
                }
                label="I  agree to Zomato's Terms of Service, Privacy Policy and Content Policies"
                style={{ margin: "20px 0 0" }}
            />
            <Button variant="contained" disabled={fullName.length < 2 || !isEmailValid || !check} color="primary" style={{ marginTop: "20px" }}>
                Create Account
            </Button>
            <DividerWithText text="or" />
            <GoogleButton />
        </div>
    );
}

export default SignUpModal;
