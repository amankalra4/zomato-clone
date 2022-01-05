import { webAssets } from "@src/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import Searchbar from "../search-bar";
import classses from "./style.module.scss";
import CommonLogin from "../login-signup";
import { IHeaderProps } from "../app";
import { searchBar } from "./styles";

const Header = ({ color, showLogo }: IHeaderProps) => {
  const image = `${webAssets}/b40b97e677bc7b2ca77c58c61db266fe1603954218.png`;
  const { push } = useRouter();
  return (
    <header>
      <nav
          data-src={showLogo}
          className={classses.header}
          style={{ justifyContent: showLogo ? "space-between" : "flex-end" }}
      >
        {showLogo && (
          <div className={classses.imageContainer}>
            <Image
                src={image}
                alt="zomato"
                width={100}
                height={25}
                onClick={() => push("/")}
                priority
            />
          </div>
        )}
        <div className={searchBar}>
          {showLogo && <Searchbar />}
        </div>
        <CommonLogin color={color} />
      </nav>
    </header>
  );
};

export default Header;
