import { css } from "@emotion/css";

const container = css`
    display: flex;
    margin: 20px 0;
    align-items: center;
    > :nth-child(odd) {
        margin: 0 !important;
    }
    > * {
        margin: 0 20px !important;
    }
    @media (max-width: 576px) {
        display: flex;
        flex-direction: column;
        gap: 10px;
        > * {
            margin: 0 !important;
        }
    }
`;

const chip = css`
    background-color: white !important;
    border: 1px solid rgb(207, 207, 207) !important;
    border-radius: 5px !important;
    > svg {
        color: rgb(239, 79, 95) !important;
    }
    @media (max-width: 767px) {
        width: 100%;
    }
`;

export { container, chip };
