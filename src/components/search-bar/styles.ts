import { css } from "@emotion/css";

const autoComplete = css`
    width: 50%;
    height: 100%;
    border-radius: 8px;
    > input {
        height: 100%;
        text-transform: capitalize;
    }
    > div > div > fieldset {
        border: none;
    }
    &[data-src="true"] {
        margin: 20px;
        > div > div {
            border: 0.5px solid;
            background: white;
        }
    }
    &[data-src="false"] {
        > div > div {
            border: 0.5px solid;
            background: white;
        }
    }
    @media (max-width: 767px) {
        width: 80%;
        margin: 0 auto;
    }
`;

const autoCompleteLoader = css`
    border-radius: 8px;
`;

export {
    autoComplete,
    autoCompleteLoader
};
