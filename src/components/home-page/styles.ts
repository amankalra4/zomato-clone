import { css } from "@emotion/css";

const logoContainer = css`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    position: relative;
    top: 40px;
    color: white;
    flex-direction: column;
    align-items: center;
`;

const bannerHeadingClass = css`
    margin: 1rem 0;
    @media (max-width: 767px) {
        text-align: center;
        margin: 2rem 0 0;
    }
`;

const imagesContainer = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    max-width: 80rem;
    margin: 1.5rem auto;
    @media (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const cardRoot = css`
    transition: all 0.4s ease;
    cursor: pointer;
    box-shadow: 0 0 0.2em rgb(0 0 0 / 30%);
    border-radius: 16px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    width: 70%;
    max-height: 368px;
    min-height: 184px;
    &:hover {
        transform: translate3D(0, -1px, 0) scale(1.03);
        box-shadow: -1px 2px 1em 3px rgb(0 0 0 / 30%);
    }
    > img {
        border-radius: 16px 16px 0 0;
    }
`;

const imageTitles = css`
    margin-top: 1rem;
`;

const topBannerContainer = css`
    position: relative;
    min-height: 28rem;
    max-height: 50rem;
`;

const homePageLogo = css`
    width: 20%;
    @media (max-width: 767px) {
        width: 50%;
    }
`;

export { bannerHeadingClass, cardRoot, imageTitles, imagesContainer, logoContainer, topBannerContainer, homePageLogo };
