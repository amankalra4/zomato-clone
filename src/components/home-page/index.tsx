// import {
  // HOME_PAGE_GO_OUT_FOR_A_MEAL,
  // HOME_PAGE_LOGO,
  // HOME_PAGE_NIGHT_LIFE,
  // HOME_PAGE_ORDER_FOOD_ONLINE,
  // HOME_PAGE_TOP_BANNER,
  // HOME_PAGE_ZOMATO_PRO
// } from "@src/constants";
import useDevice from "@src/custom-hooks/use-is-Phone";
import React from "react";
import Header from "../header";
import Searchbar from "../search-bar";
import {
  logoContainer,
  bannerHeadingClass,
  imagesContainer,
  cardRoot,
  imageTitles
} from "./styles";

const HomePageData = () => (
  <>
    <TopBanner />
    <StaticImages />
  </>
);

const TopBanner = () => {
  const bannerHeading = "Discover best food & drinks";
  const isPhone = useDevice("767");
  return (
    <div
        style={{ position: "relative", minHeight: "25rem", maxHeight: "50rem" }}
    >
      <img
          src="/icons/banner.webp"
          data-src="/icons/banner.webp"
          width="100%"
          height="100%"
          alt="home-page-top-banner"
          // loading="eager"
          style={{ position: "absolute" }}
      />
      <Header color="white" showLogo={false} />
      <div className={logoContainer} style={{ color: "white" }}>
        <img
            src="/icons/home-page-logo.webp"
            // data-src={HOME_PAGE_LOGO}
            width={30}
            height={isPhone ? 50 : 65}
            alt="home-page-logo"
            // loading="eager"
            style={{ width: isPhone ? "50%" : "20%" }}
        />
        <h1 className={bannerHeadingClass}>{bannerHeading}</h1>
        <Searchbar searchBarBackground="white" />
      </div>
    </div>
  );
};

const StaticImages = () => {
  const homePageImages = [
    "/icons/online-food.webp",
    "/icons/go-out-for-a-meal.webp",
    "/icons/zomato-pro.webp",
    "/icons/nightlife-n-clubs.jpeg"
  ];
  const homePageImagesText = [
    "Order Food Online",
    "Go out for a meal",
    "Zomato Pro",
    "Nightlife & Clubs"
  ];
  return (
    <div className={imagesContainer}>
      {/* <link rel="preload" href={HOME_PAGE_ORDER_FOOD_ONLINE} as="image" /> */}
      {/* <link rel="preload" href={HOME_PAGE_GO_OUT_FOR_A_MEAL} as="image" /> */}
      {homePageImages.map((el, index) => (
        <div className={cardRoot} key={el}>
          <img
              src={el}
              // data-src={el}
              alt={`home-page${index}-pic`}
              height="85%"
              width="100%"
          />
          <h3 className={imageTitles}>{homePageImagesText[index]}</h3>
        </div>
      ))}
    </div>
  );
};

export default HomePageData;
