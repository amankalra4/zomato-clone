import { css } from "@emotion/css";

export const container = css`
  padding: 1rem 2rem;
  background-color: rgb(248, 248, 248);
  margin: 0 -2rem;
`;

export const heading = css`
  color: rgb(28, 28, 28);
  font-size: 2rem;
  margin: 0 0 2.2rem;
  @media (max-width: 576px) {
    font-size: 1.4rem;
  }
`;

export const imagesContainer = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 16px;
  }
`;

export const firstOrderImages = css`
  display: grid;
  justify-items: center;
  justify-content: space-evenly;
  &:first-child {
    border-radius: 50%;
  }
`;

export const firstOrderImage = css`
  cursor: pointer;
`;
