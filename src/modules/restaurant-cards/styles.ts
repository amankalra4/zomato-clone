import { css } from "@emotion/css";

const cardsContainer = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-row-gap: 4rem;
  justify-items: center;
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const cardsRoot = css`
  width: 90% !important;
  box-shadow: -1px -1px 16px 4px #888888 !important;
  border-radius: 8px !important;
`;

const media = css`
  height: 140px;
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

export {
    cardsContainer,
    cardsRoot,
    media,
    ellipsis,
    nameContainer,
    cuisinesContainer
};
