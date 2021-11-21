import React, { useState } from "react";
import dynamic from 'next/dynamic';

const CenteredModal = dynamic(() => import('../modal'));

type LoginSignUp = {
    login: boolean;
    signUp: boolean;
}
const CommonLogin = () => {
    const [loginSignUp, setLoginSignUp] = useState<LoginSignUp>({} as LoginSignUp);
    const [showHeading, setShowHeading] = useState<string>("");

    const handleLoginSingUp = (value: string) => {
        if (value === "Login") {
            setShowHeading("Login");
            setLoginSignUp({ login: true, signUp: false });
        } else {
            setShowHeading("Sign Up");
            setLoginSignUp({ login: false, signUp: true });
        }
    };

    const handleClose = () => {
        setLoginSignUp({ login: false, signUp: false });
        setShowHeading("");
    };

    const toggleModal = (value: string) => {
        if (value === "Login") {
            setLoginSignUp({ login: false, signUp: true });
            setShowHeading("Sign Up");
        } else {
            setLoginSignUp({ login: true, signUp: false });
            setShowHeading("Login");
        }
    };

    return (
        <div style={{ display: "flex" }}>
            <p onClick={() => handleLoginSingUp("Login")}>Login</p>
            <p style={{ marginLeft: "20px" }} onClick={() => handleLoginSingUp("SignUp")}>Sign Up</p>
            {(loginSignUp.login || loginSignUp.signUp) && <CenteredModal
                show={loginSignUp.login || loginSignUp.signUp}
                onHide={handleClose}
                heading={showHeading}
                toggleModal={toggleModal}
            />}
        </div>
    );
};

export default CommonLogin;
