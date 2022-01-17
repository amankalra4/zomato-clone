import { css } from "@emotion/css";

const container = css`
  display: flex;
  margin: 20px 0;
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
  background-color: whitesmoke !important;
  border: 0.5px solid black !important;
  border-radius: 5px !important;
`;

export {
    container,
    chip
};
