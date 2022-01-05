import { css } from "@emotion/css";

export const subHeading = css`
  margin: 1rem 0 1.5rem;
  > strong {
    text-transform: capitalize;
  }
`;

export const nightLife = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 20px;
  place-items: center;
  min-height: 200px;
  margin-bottom: 2rem;
  > div {
    position: relative;
    color: black;
    img {
      border-radius: 8px;
    }
  }
`;

export const imageSubHeading = css`
  margin: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
  color: white;
  display: flex;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.05) 50%,
    rgba(0, 0, 0, 0.05) 85%
  );
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  h5 {
    padding: 0 2rem;
  }
`;
