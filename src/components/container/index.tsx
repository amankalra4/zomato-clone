import { ReactNode } from "react";
import { css } from "@emotion/css";

const root = css`
    padding: 0 2rem;
`;

const Container = ({ children }: { children: ReactNode }) => <div className={root}>{children}</div>;

export default Container;
