import { css } from "@emotion/css";

export const searchBar = css`
    display: none;
    @media (max-width: 767px) {
        padding: 6rem 0 0;
        margin: 0 auto;
        display: block;
    }
`;

export const belowHeader = css`
    padding: 7rem 0 2rem;
    @media (max-width: 767px) {
        padding: 0;
    }
`;
