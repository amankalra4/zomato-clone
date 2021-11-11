import { Button, IconButton, InputAdornment, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { INIDAN_THUMBNAIL } from '@src/constants';
import React, { ChangeEvent, useState } from "react"
import DividerWithText from '@src/components/divider-with-text';
import { Email } from '@material-ui/icons';
import GoogleLogo from "../../../public/icons/googleLogo.svg";
import Image from "next/image"

const LoginModal = () => {
    const [mobileNumber, setMobileNumber] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.toString().length <= 10) {
            setMobileNumber(e.target.value.toString())
        }
    }

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
            <TextField
                id="input-with-icon-textfield"
                variant="outlined"
                type="number"
                name="mobileInput"
                InputProps={{
                    startAdornment: (
                        <>
                            <Image src={INIDAN_THUMBNAIL} alt="INDIAN_FLAG" width="25" height="25" />
                            <span style={{ margin: "0 20px" }}>+91</span>
                        </>
                    ),
                }}
                value={mobileNumber}
                onChange={handleChange}
            />
            <Button variant="contained" disabled={mobileNumber.length < 10} color="primary" style={{ marginTop: "20px" }}>
                Send OTP
            </Button>
            <DividerWithText text="or" />
            <Button variant="contained" startIcon={<Email color="primary" />} style={{ backgroundColor: "white", padding: "1rem 0" }}>
                Continue with Email
            </Button>
            <GoogleButton hasTopMargin />
        </div>
    )
}

interface IGoogleButtonProps {
    hasTopMargin?: boolean;
}
export const GoogleButton = ({ hasTopMargin = false }: IGoogleButtonProps) => (
    <Button variant="contained" style={{ backgroundColor: "white", padding: "1rem 0", marginTop: hasTopMargin ? "20px" : 0 }}>
        <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><Image src={GoogleLogo} alt="Google Logo" height="17" width="30" /> Continue with Google</span>
    </Button>
);

export default LoginModal;
