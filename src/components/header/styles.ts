import { css } from "@emotion/css";

export const searchBar = css`
    display: flex;
    justify-content: center;
    width: 69%;
    @media (max-width: 767px) {
        display: none;
    }
`;

export const header = css`
    display: flex;
    align-items: center;
    padding: 2rem;
    &[data-src="true"] {
        padding: 0 2rem;
        height: 100px;
        position: fixed;
        background: #f8f8f8;
        border-bottom: 1px solid rgb(0 0 0 / 35%);
        z-index: 10;
        width: 100%;
    }
    @media (max-width: 767px) {
        padding: 1.5rem;
    }
`;

export const imageContainer = css`
    cursor: pointer;
`;
