import { css } from "@emotion/css";

const container = css`
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  justify-items: center;
  grid-row-gap: 2rem;
  margin: 2rem -2rem; // same as padding: 0 2rem
`;

const innerContainer = css`
    background-color: white;
    box-shadow: -1px -1px 16px 4px #888888;
    border-radius: 8px;
    padding-bottom: 2rem;
    margin-bottom: 8px;
    width: 85%;
`;

const rectangleSkeleton = css`
    margin-bottom: 8px;
      width: 100% !important;
`;

const textSkeleton = css`
    margin: 0 1rem;
`;

export {
    container,
    innerContainer,
    rectangleSkeleton,
    textSkeleton
};
