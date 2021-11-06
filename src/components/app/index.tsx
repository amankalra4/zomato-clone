import Footer from "../footer";
import Header from "../header";

interface IHeader {
    showHeader?: boolean;
    children: React.ReactNode;
}

const App = ({ showHeader = true, children}: IHeader) => {
    return (
        <div>
            {showHeader && <Header />}
            {children}
            <Footer />
        </div>
    )
}

export default App;
