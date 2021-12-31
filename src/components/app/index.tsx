import useDevice from "@src/custom-hooks/use-is-Phone";
import dynamic from "next/dynamic";
import React from "react";
import Header from "../header";
import Searchbar from "../search-bar";

const Footer = dynamic(() => import("../footer"));

interface IAppProps extends IHeaderProps {
    showHeader?: boolean;
    children?: React.ReactNode;
}

export interface IHeaderProps {
    color?: string
    showLogo?: boolean
}

const App = ({ showHeader = true, children, color = "black", showLogo = true }: IAppProps) => {
    const isPhone: boolean = useDevice("767");
    return (
        <div>
            {showHeader && <Header color={color} showLogo={showLogo} />}
            {isPhone && <div style={{ padding: "6rem 0 0", margin: "0 auto" }}><Searchbar /></div>}
            <div style={{ padding: showHeader && !isPhone ? "7rem 0 2rem" : "0" }}>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default App;
