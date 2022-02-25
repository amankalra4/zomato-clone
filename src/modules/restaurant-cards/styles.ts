import { css } from "@emotion/css";

const getStyles = (inp: number) => {
    if (inp === 1) {
        return {
            cardsContainer: css`
                display: flex;
                justify-items: center;
                max-width: 560px;
                margin: 0 auto;
                @media (max-width: 576px) {
                    grid-template-columns: 1fr;
                }
            `
        };
    }
    return {
        cardsContainer: css`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
            grid-row-gap: 4rem;
            justify-items: center;
            @media (max-width: 576px) {
                grid-template-columns: 1fr;
            }
        `
    };
};

const cardsRoot = css`
    width: 90% !important;
    box-shadow: -1px -1px 16px 4px #888888 !important;
    border-radius: 8px !important;
`;

const mediaRoot = css`
    &:hover {
        img {
            transform: scale(1.05);
            filter: brightness(1.05);
        }
    }
`;

const media = css`
    height: 140px;
    > img {
        object-fit: cover;
        transition: transform 0.4s ease-in-out 0s, opacity 1.63s ease 0s, filter 0.4s ease 0s;
    }
`;

const ellipsis = css`
    text-overflow: ellipsis;
    overflow: hidden;
    width: 50%;
    white-space: nowrap;
    display: inline-block;
`;

const nameContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const cuisinesContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`;

export { cardsRoot, media, ellipsis, nameContainer, cuisinesContainer, mediaRoot, getStyles };
