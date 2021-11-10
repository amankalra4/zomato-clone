import React, { useState } from "react";
import CenteredModal from "../modal";

const CommonLogin = () => {
    const [loginSignUp, setLoginSignUp] = useState<boolean>(false);
    const [showHeading, setShowHeading] = useState<string>("");

    const handleLoginSingUp = (value: string) => {
        setLoginSignUp(true);
        if(value === "login") {
            setShowHeading("Login");
        } else {
            setShowHeading("Sign Up");
        }
    }

    const handleClose = () => {
        setLoginSignUp(false);
        setShowHeading("");
    }

    return (
        <div style={{ display: "flex" }}>
            <p onClick={() =>handleLoginSingUp("login")}>Login</p>
            <p style={{ marginLeft: "20px" }} onClick={() =>handleLoginSingUp("signUp")}>Sign Up</p>
            <CenteredModal
                show={loginSignUp}
                onHide={handleClose}
                heading={showHeading}
            />
        </div>
    );
}

export default CommonLogin;
