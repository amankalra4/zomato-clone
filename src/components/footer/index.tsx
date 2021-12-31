import React from "react";
import Image from "next/image";
import { Language, Flag } from "@material-ui/icons";
import { countries, language, footerImage } from "../../constants";
import CommonDropDown from "./lang-country";
import classses from "./style.module.scss";

const Footer = () => (
    <footer>
        <div className={classses.container}>
            <Logo />
            <Info />
        </div>
    </footer>
);

const Logo = () => {
    return (
    <div className={classses.logoContainer}>
        <div className={classses.image}>
            <Image src={footerImage} alt="Zomato Footer" loading="lazy" width={100} height={25} />
        </div>
        <div className={classses.countryInfo}>
            <CommonDropDown title="India" value={countries} icon={<Flag />} />
            <CommonDropDown title="English" value={language} icon={<Language />} marginLeft />
        </div>
    </div>
); 
};

const Info = () => (
    <div className={classses.infoContainer}>
        <div>
            <h2>Company</h2>
            <SubHeading data={["Who We Are", "Blog", "Careers", "Report Fraud", "Contact", "Investor Relations"]} />
        </div>
        <div>
            <h2>For Foodies</h2>
            <SubHeading data={["Code of Conduct", "Community", "Blogger Help", "Mobile Apps"]} />
        </div>
        <div>
            <h2>Restaurants</h2>
            <SubHeading data={["Add Restaurants"]} />
        </div>
        <div>
            <h2>For You</h2>
            <SubHeading data={["Privacy", "Terms", "Security", "Sitemap"]} />
        </div>
    </div>
);

interface ISubHeading {
    data: string[]
}

const SubHeading = ({ data }: ISubHeading) => (
    <>
        {data.map((el) => (
            <p key={el} className={classses.subHeading}>{el}</p>
        ))}
    </>
);

export default Footer;
