import Image from "next/image";
import { countries, language, footerImage } from "../../constants";
import CommonDropDown from "./lang-country";
import { container, countryInfo, image, infoContainer, logoContainer, subHeading } from "./styles";

const Footer = () => (
    <footer>
        <div className={container}>
            <Logo />
            <Info />
        </div>
    </footer>
);

const Logo = () => {
    return (
        <div className={logoContainer}>
            <div className={image}>
                <Image src={footerImage} alt="Zomato Footer" loading="lazy" width={100} height={25} />
            </div>
            <div className={countryInfo}>
                <CommonDropDown title="India" value={countries} />
                <CommonDropDown title="English" value={language} marginLeft />
            </div>
        </div>
    );
};

type HeadingType = "Company" | "For Foodies" | "Restaurants" | "For You";

type SubHeadingType =
    | ["Who We Are", "Blog", "Careers", "Report Fraud", "Contact", "Investor Relations"]
    | ["Code of Conduct", "Community", "Blogger Help", "Mobile Apps"]
    | ["Add Restaurants"]
    | ["Privacy", "Terms", "Security", "Sitemap"];

type InfoArray = {
    heading: HeadingType;
    subHeading: SubHeadingType;
};

const infoArray: InfoArray[] = [
    {
        heading: "Company",
        subHeading: ["Who We Are", "Blog", "Careers", "Report Fraud", "Contact", "Investor Relations"]
    },
    {
        heading: "For Foodies",
        subHeading: ["Code of Conduct", "Community", "Blogger Help", "Mobile Apps"]
    },
    {
        heading: "Restaurants",
        subHeading: ["Add Restaurants"]
    },
    {
        heading: "For You",
        subHeading: ["Privacy", "Terms", "Security", "Sitemap"]
    }
];

const Info = () => (
    <div className={infoContainer}>
        {infoArray.map((el) => (
            <div key={el.heading}>
                <h2>{el.heading}</h2>
                <SubHeading data={el.subHeading} />
            </div>
        ))}
    </div>
);

const SubHeading = ({ data }: { data: string[] }) => (
    <>
        {data.map((el) => (
            <p key={el} className={subHeading}>
                {el}
            </p>
        ))}
    </>
);

export default Footer;
