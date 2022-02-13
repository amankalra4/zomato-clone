import {
    HOME_PAGE_GO_OUT_FOR_A_MEAL,
    HOME_PAGE_LOGO,
    HOME_PAGE_NIGHT_LIFE,
    HOME_PAGE_ORDER_FOOD_ONLINE,
    HOME_PAGE_TOP_BANNER,
    HOME_PAGE_ZOMATO_PRO
} from "@src/constants";
import useDevice from "@src/custom-hooks/use-is-Phone";
import Header from "../header";
import Searchbar from "../search-bar";
import { logoContainer, bannerHeadingClass, imagesContainer, cardRoot, imageTitles, topBannerContainer } from "./styles";

const HomePageData = () => {
    return (
        <>
            <TopBanner />
            <StaticImages />
        </>
    );
};

const TopBanner = () => {
    const bannerHeading = "Discover best food & drinks";
    const isPhone = useDevice("767");
    return (
        <div className={topBannerContainer}>
            <img
                src={HOME_PAGE_TOP_BANNER}
                data-src={HOME_PAGE_TOP_BANNER}
                width="100%"
                height="100%"
                alt="home-page-top-banner"
                style={{ position: "absolute", objectFit: "cover" }}
            />
            <Header color="white" showLogo={false} />
            <div className={logoContainer} style={{ color: "white" }}>
                <img
                    src={HOME_PAGE_LOGO}
                    data-src={HOME_PAGE_LOGO}
                    width={30}
                    height={isPhone ? 50 : 65}
                    alt="home-page-logo"
                    loading="eager"
                    style={{ width: isPhone ? "50%" : "20%" }}
                />
                <h1 className={bannerHeadingClass}>{bannerHeading}</h1>
                <Searchbar searchBarBackground="white" />
            </div>
        </div>
    );
};

const StaticImages = () => {
    const homePageImages = [HOME_PAGE_ORDER_FOOD_ONLINE, HOME_PAGE_GO_OUT_FOR_A_MEAL, HOME_PAGE_ZOMATO_PRO, HOME_PAGE_NIGHT_LIFE];
    const homePageImagesText = ["Order Food Online", "Go out for a meal", "Zomato Pro", "Nightlife & Clubs"];
    return (
        <div className={imagesContainer}>
            {homePageImages.map((el, index) => (
                <div className={cardRoot} key={el}>
                    <img src={el} data-src={el} alt={`home-page${index}-pic`} height="85%" width="100%" />
                    <h3 className={imageTitles}>{homePageImagesText[index]}</h3>
                </div>
            ))}
        </div>
    );
};

export default HomePageData;
