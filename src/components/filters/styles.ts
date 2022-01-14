import { css } from "@emotion/css";

const container = css`
  display: flex;
  margin: 20px 0;
  > :first-child {
    margin-right: 20px;
  }
  > :last-child {
    margin-left: 20px;
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    > :first-child,
    > :last-child {
      margin: 0;
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
