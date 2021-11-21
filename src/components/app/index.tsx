import React from "react";
import Footer from "../footer";
import Header from "../header";

interface IAppProps {
    showHeader?: boolean;
    children: React.ReactNode;
}

const App = ({ showHeader = true, children }: IAppProps) => {
    return (
        <div>
            {showHeader && <Header />}
            {children}
            <Footer />
        </div>
    );
};

export default App;
