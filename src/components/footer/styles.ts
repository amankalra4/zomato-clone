import { css } from "@emotion/css";

const container = css`
    background-color: #f8f8f8;
    border-top: 1px solid rgb(0 0 0 / 35%);
    padding: 4.8rem 2.2rem;
    display: flex;
    flex-direction: column;
    h1, h2, h3 {
        margin: 0 0 20px;
    }
    @media (max-wdith: 767px) {
        padding: 1rem 2.2rem;
    }
    @media (max-wdith: 576px) {
        h1, h2, h3 {
            font-size: 16px;
        }
    }
`;

const logoContainer = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    align-items: center;
    @media (max-width: 767px) {
        flex-direction: column;
        align-items: flex-start;
        padding-bottom: 2rem;
        margin-bottom: 0;
    }
`;

const image = css`
    width: 11%;
    @media (max-width: 767px) {
        width: 50%;
    }
`;

const countryInfo = css`
    display: flex;
    @media (max-width: 767px) {
        margin-top: 1rem;
        flex-direction: column;
    }
`;

const language = css`
    margin-left: 20px;
`;

const infoContainer = css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    justify-items: center;
    @media (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
        justify-items: unset;
    }
    @media (max-width: 320px) {
        font-size: 13px;
    }
`;

const subHeading = css`
    color: #696969;
    cursor: pointer;
`;

const formClass = css`
    &[data-src="margin"] {
        margin-left: 2rem;
        @media (max-width: 767px) {
            margin-left: 0;
            margin-top: 2rem;
        }
    }
`;

export {
    container,
    logoContainer,
    image,
    countryInfo,
    language,
    infoContainer,
    subHeading,
    formClass
};
