import { webAssets } from "@src/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import Searchbar from "../search-bar";
import classses from "./style.module.scss";
import CommonLogin from "../login-signup";

const Header = () => {
    const image = `${webAssets}/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*`;
    const { push } = useRouter();
    return (
        <header>
            <nav className={classses.header}>
                <div style={{ width: "6%", cursor: "pointer" }}>
                    <Image src={image} alt="zomato" layout="responsive" width={100} height={25} onClick={() => push("/")} />
                </div>
                <Searchbar />
                <CommonLogin />
            </nav>
        </header>
    );
};

export default Header;
