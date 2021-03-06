import dynamic from "next/dynamic";
import { ReactNode } from "react";
import Header from "../header";
import Searchbar from "../search-bar";
import { searchBar, belowHeader } from "./styles";

const Footer = dynamic(() => import("../footer"));

interface IAppProps extends IHeaderProps {
    showHeader?: boolean;
    children?: ReactNode;
}

export interface IHeaderProps {
    color?: string;
    showLogo?: boolean;
}

const AppWrapper = ({ showHeader = true, children, color = "black", showLogo = true }: IAppProps) => {
    return (
        <div>
            {showHeader && <Header color={color} showLogo={showLogo} />}
            <div className={searchBar}>
                <Searchbar />
            </div>
            <div data-src={showHeader} className={belowHeader}>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default AppWrapper;
