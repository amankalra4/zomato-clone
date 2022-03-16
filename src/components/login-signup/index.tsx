import { useState } from "react";
import { ButtonBase } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { IHeaderProps } from "../app";
import { container, personIcon, personIconContainer, signUp, signUpContainer } from "./styles";
import CenteredModal from "../modal";

type LoginSignUp = {
    login: boolean;
    signUp: boolean;
};
const CommonLogin = ({ color }: IHeaderProps) => {
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
        <div className={container} style={{ color }}>
            <div className={personIconContainer}>
                <ButtonBase onClick={() => handleLoginSingUp("Login")}>
                    <PersonIcon color="primary" className={personIcon} />
                </ButtonBase>
            </div>
            <div className={signUpContainer}>
                <ButtonBase onClick={() => handleLoginSingUp("Login")}>Login</ButtonBase>
                <ButtonBase className={signUp} onClick={() => handleLoginSingUp("SignUp")}>
                    Sign Up
                </ButtonBase>
            </div>
            {(loginSignUp.login || loginSignUp.signUp) && (
                <CenteredModal
                    show={loginSignUp.login || loginSignUp.signUp}
                    onHide={handleClose}
                    heading={showHeading}
                    toggleModal={toggleModal}
                />
            )}
        </div>
    );
};

export default CommonLogin;
