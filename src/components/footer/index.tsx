import React from "react";
import Image from 'next/image';
import { countries, language, webAssets } from "../../constants";
import CommonDropDown from "./lang-country";
import classses from "./style.module.scss";
import { Language, Flag } from '@material-ui/icons';

const Footer = () => (
    <footer>
        <div className={classses.container}>
            <Logo />
            <Info />
        </div>
    </footer>
)

const Logo = () => {
    const image = `${webAssets}/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*`
    return (
    <div className={classses.logoContainer}>
        <div className={classses.image}>
            <Image src={image} alt="zomato" layout="responsive" width={100} height={25} />
        </div>
        {/* <img src={image} alt="zomato" /> */}
        <div className={classses.countryInfo}>
            <CommonDropDown title="India" value={countries} icon={<Flag />} />
            <CommonDropDown title="English" value={language} icon={<Language />} marginLeft />
        </div>
    </div>
)}

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
        <div className={classses.socialLinks}>
            <h2>Social Links</h2>
            <SubHeading data={["Facebook", "Twitter", "Insta"]} />
        </div>
    </div>
)

interface ISubHeading {
    data: string[]
}

const SubHeading = ({ data }: ISubHeading) => (
    <>
        {data.map(el => (
            <p key={el} className={classses.subHeading}>{el}</p>
        ))}
    </>
)

export default Footer;
