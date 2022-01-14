import { css } from "@emotion/css";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    margin: 0;
  }
`;

export const heading = css`
  font-size: 2.5rem;
  margin: 10px 0 0;
  @media (max-width: 576px) {
        font-size: 2rem;
        margin: 10px 0;
  }
`;

export const cuisines = css`
  color: #8e8e8e;
  font-size: 1rem;
`;

export const location = css`
  color: #7c7c7c;
  font-size: 0.9rem;
`;

export const openClosed = css`
  &[data-src="0"] {
    color: red;
  }
  &[data-src="1"] {
    color: green;
  }
`;

export const chipContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  > * > div {
    cursor: pointer;
  }
`;

export const moreInfoContainer = css`
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }
`;

export const phoneNumberContainer = css`
  display: flex;
  margin-top: 20px;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const collapse = css`
  margin: 20px 0 0;
`;

export const orderNow = css`
  background-color: green;
  color: white;
  border-radius: 8px;
  padding: 5px 10px;
`;

export const ratingClass = css`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const timingsClass = css`
  display: flex;
  gap: 20px;
`;
