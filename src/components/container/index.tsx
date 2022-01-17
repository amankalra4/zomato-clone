import { ReactNode } from "react";
import { css } from "@emotion/css";

interface IContainerProps {
    children: ReactNode;
}

const root = css`
  padding: 0 2rem;
`;

const Container = ({ children }: IContainerProps) => (
    <div className={root}>{children}</div>
);

export default Container;
