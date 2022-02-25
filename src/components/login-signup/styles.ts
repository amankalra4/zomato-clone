import { css } from "@emotion/css";

const container = css`
    display: flex;
`;

const personIcon = css`
    background-color: white;
    border-radius: 50%;
`;

const signUp = css`
    margin-left: 20px !important;
`;

const personIconContainer = css`
    display: none;
    @media (max-width: 767px) {
        display: block;
    }
`;

const signUpContainer = css`
    display: block;
    @media (max-width: 767px) {
        display: none;
    }
`;

export { container, personIcon, signUp, personIconContainer, signUpContainer };
