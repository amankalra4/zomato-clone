import {
  HOME_PAGE_GO_OUT_FOR_A_MEAL,
  HOME_PAGE_LOGO,
  HOME_PAGE_NIGHT_LIFE,
  HOME_PAGE_ORDER_FOOD_ONLINE,
  HOME_PAGE_TOP_BANNER,
  HOME_PAGE_ZOMATO_PRO
} from "@src/constants";
import useDevice from "@src/custom-hooks/use-is-Phone";
import React from "react";
import Header from "../header";
import Searchbar from "../search-bar";
import classes from "./style.module.scss";

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
        className={classes.container}
        style={{ position: "relative", minHeight: "25rem", maxHeight: "50rem" }}
    >
      <link rel="preload" href={HOME_PAGE_TOP_BANNER} as="image" />
      <link rel="preload" href={HOME_PAGE_LOGO} as="image" />
      <img
          src={HOME_PAGE_TOP_BANNER}
          data-src={HOME_PAGE_TOP_BANNER}
          width="100%"
          height="100%"
          alt="home-page-top-banner"
          loading="eager"
          style={{ position: "absolute" }}
      />
      <Header color="white" showLogo={false} />
      <div className={classes.logoContainer} style={{ color: "white" }}>
        <img
            src={HOME_PAGE_LOGO}
            data-src={HOME_PAGE_LOGO}
            width={30}
            height={isPhone ? 50 : 65}
            alt="home-page-logo"
            loading="eager"
            style={{ width: isPhone ? "50%" : "20%" }}
        />
        <h1 className={classes.bannerHeading}>{bannerHeading}</h1>
        <Searchbar searchBarBackground="white" />
      </div>
    </div>
  );
};

const StaticImages = () => {
  const homePageImages = [
    HOME_PAGE_ORDER_FOOD_ONLINE,
    HOME_PAGE_GO_OUT_FOR_A_MEAL,
    HOME_PAGE_ZOMATO_PRO,
    HOME_PAGE_NIGHT_LIFE
  ];
  const homePageImagesText = [
    "Order Food Online",
    "Go out for a meal",
    "Zomato Pro",
    "Nightlife & Clubs"
  ];
  return (
    <div className={classes.imagesContainer}>
      <link rel="preload" href={HOME_PAGE_ORDER_FOOD_ONLINE} as="image" />
      <link rel="preload" href={HOME_PAGE_GO_OUT_FOR_A_MEAL} as="image" />
      {homePageImages.map((el, index) => (
        <div
            className={classes.cardRoot}
            key={el}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "2rem 0",
              width: "70%",
              maxHeight: "368px",
              minHeight: "184px"
            }}
        >
          <img
              src={el}
              data-src={el}
              alt={`home-page${index}`}
              height="100%"
              width="100%"
              style={{ borderRadius: "16px 16px 0 0" }}
          />
          <h3 className={classes.imageTitles}>{homePageImagesText[index]}</h3>
        </div>
      ))}
    </div>
  );
};

export default HomePageData;
