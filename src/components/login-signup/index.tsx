import { useState } from "react";
import dynamic from "next/dynamic";
import { ButtonBase } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import useDevice from "@src/custom-hooks/use-is-Phone";
import { IHeaderProps } from "../app";
import { container, personIcon, signUp } from "./styles";

const CenteredModal = dynamic(() => import("../modal"));

type LoginSignUp = {
  login: boolean;
  signUp: boolean;
};
const CommonLogin = ({ color }: IHeaderProps) => {
  const [loginSignUp, setLoginSignUp] = useState<LoginSignUp>(
    {} as LoginSignUp
  );
  const [showHeading, setShowHeading] = useState<string>("");
  const isPhone: boolean = useDevice("767");

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
      {isPhone ? (
        <ButtonBase onClick={() => handleLoginSingUp("Login")}>
          <PersonIcon color="primary" className={personIcon} />
        </ButtonBase>
      ) : (
        <>
          <ButtonBase onClick={() => handleLoginSingUp("Login")}>
            Login
          </ButtonBase>
          <ButtonBase
              className={signUp}
              onClick={() => handleLoginSingUp("SignUp")}
          >
            Sign Up
          </ButtonBase>
        </>
      )}
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
