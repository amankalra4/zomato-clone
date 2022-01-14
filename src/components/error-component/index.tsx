/* eslint-disable react/no-unescaped-entities */
import { Button } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { useRouter } from "next/router";
import { css } from "@emotion/css";
import React from "react";
import useDevice from "@src/custom-hooks/use-is-Phone";

const container = css`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  margin: 0 0 20px;
  padding: 1rem;
  @media(max-width: 767px) {
    flex-direction: column;
  }
`;

const imageContainer = css`
  /* width: 100%; */
  height: 350px;
  margin: 0 auto;
  > img {
    width: 80%;
    display: flex;
    /* justify-content: center; */
    margin: 0 auto;
  }
  @media (max-width: 576px) {
    height: 320px;
    > img {
      width: 100%;
      /* display: flex; */
      /* margin: 0 auto; */
    }
  }
`;

const homeButton = css`
  margin: 25px 0 20px !important;
`;

const headingClass = css`
  text-align: center;
  margin: 20px 0;
`;

const subHeadingClass = css`
  text-align: center;
  /* margin-top: 20px; */
`;

interface IErrorFallbackProps {
  heading: string;
  imageURL: string;
}

const ErrorFallback = ({ heading, imageURL }: IErrorFallbackProps) => {
  const { push } = useRouter();
  const isPhone = useDevice("767");
  return (
    <div className={container}>
      <div className={imageContainer}>
        <img src={imageURL} alt="Error" height="100%" width={isPhone ? "80%" : "60%"} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h4 className={headingClass}>{heading}</h4>
        <h4 className={subHeadingClass}>We can't seem to find what you're looking for...</h4>
        <Button
            color="primary"
            onClick={() => push("/")}
            variant="contained"
            className={homeButton}
        >
          <ChevronLeft />
          <span>Back to home</span>
        </Button>
      </div>
    </div>
  );
};

export default ErrorFallback;
