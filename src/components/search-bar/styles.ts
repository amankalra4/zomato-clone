import { css } from "@emotion/css";

const autoComplete = css`
    width: 70%;
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
        width: 100%;
        margin: 0 auto;
    }
`;

const autoCompleteLoader = css`
    border-radius: 8px;
`;

const dropDown = css`
    @media (min-width: 767px) {
        width: 150%;
    }
    border: 1px solid rgb(207, 207, 207);
    * {
        padding: 10px 25px !important;
        box-shadow: rgb(232 232 232) 0px -0.5px 0px inset !important;
        :last-child {
            box-shadow: none !important;
        }
    }
    > * {
        margin: 0 -25px !important;
    }
    :last-child {
        box-shadow: none !important;
    }
`;

const restaurantDropDown = css`
    width: 100%;
    border: 1px solid rgb(207, 207, 207);
`;

const topContainer = css`
    display: flex;
    background: white;
    width: 50%;
    box-shadow: rgb(28 28 28 / 8%) 0px 2px 8px;
    border-radius: 8px;
    @media (max-width: 1000px) {
        width: 70%;
    }
    @media (max-width: 767px) {
        width: 90%;
        margin: 20px auto;
    }
`;

const restContainer = css`
    @media (max-width: 767px) {
        display: none;
    }
    fieldset {
        border: none;
    }
`;

const mobileContainer = css`
    display: none;
    @media (max-width: 767px) {
        display: flex;
        background: white;
        width: 90%;
        box-shadow: rgb(28 28 28 / 8%) 0px 2px 8px;
        border-radius: 8px;
        margin: 0 auto 20px;
    }
`;

const restaurantData = css`
    width: 100% !important;
    border: none !important;
    box-shadow: none !important;
`;

const dropDownContainer = css`
    margin: 0 -10px;
`;

const dropDownRestaurantContainer = css`
    display: flex;
    gap: 10px;
`;

const restaurantInfoContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 12px;
`;

const restaurantName = css`
    font-weight: 500;
    font-size: 15px;
`;

const ratingContainer = css`
    display: flex;
    align-items: center;
    font-size: 15px;
`;

const getStyles = (backgroundColor: string) => {
    return {
        ratingClass: css`
            background-color: #${backgroundColor};
            color: white;
            border-radius: 5px;
            padding: 2px 5px;
            display: flex;
            align-items: center;
            margin-left: 5px;
        `
    };
};

export {
    autoComplete,
    autoCompleteLoader,
    dropDown,
    topContainer,
    restaurantDropDown,
    restContainer,
    mobileContainer,
    restaurantData,
    dropDownContainer,
    dropDownRestaurantContainer,
    restaurantInfoContainer,
    restaurantName,
    ratingContainer,
    getStyles
};
