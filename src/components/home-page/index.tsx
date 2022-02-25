import Header from "../header";
import Searchbar from "../search-bar";
import { IAutoCompleteValue } from "../search-bar/location-auto-complete";
import {
    logoContainer,
    bannerHeadingClass,
    imagesContainer,
    cardRoot,
    imageTitles,
    topBannerContainer,
    homePageLogo
} from "./styles";

const HomePageData = ({ data }: { data: any }) => {
    return (
        <>
            <TopBanner logo={data[1]} banner={data[4]} />
            <StaticImages orderOnline={data[3]} outForAMeal={data[0]} zomatoPro={data[5]} nightLife={data[2]} />
        </>
    );
};

const TopBanner = ({ logo, banner }: any) => {
    let userLocation: IAutoCompleteValue;
    if (typeof window !== "undefined") {
        userLocation = JSON.parse(localStorage.getItem("userLocations")!);
    }
    const bannerHeading = `Discover the best food & drinks in ${userLocation!?.location ?? "Jammu"}`;
    return (
        <div className={topBannerContainer}>
            <img
                src={banner}
                width="100%"
                height="100%"
                alt="home-page-top-banner"
                style={{ position: "absolute", objectFit: "cover" }}
            />
            <Header color="white" showLogo={false} />
            <div className={logoContainer} style={{ color: "white" }}>
                <img src={logo} width={30} height={65} alt="home-page-logo" loading="eager" className={homePageLogo} />
                <h1 className={bannerHeadingClass}>{bannerHeading}</h1>
                <Searchbar />
            </div>
        </div>
    );
};

const StaticImages = ({ orderOnline, outForAMeal, zomatoPro, nightLife }: any) => {
    const homePageImages = [orderOnline, outForAMeal, zomatoPro, nightLife];
    const homePageImagesText = ["Order Food Online", "Go out for a meal", "Zomato Pro", "Nightlife & Clubs"];
    return (
        <div className={imagesContainer}>
            {homePageImages.map((el, index) => (
                <div className={cardRoot} key={el}>
                    <img src={el} alt={`home-page${index}-pic`} height="85%" width="100%" />
                    <h3 className={imageTitles}>{homePageImagesText[index]}</h3>
                </div>
            ))}
        </div>
    );
};

export default HomePageData;
