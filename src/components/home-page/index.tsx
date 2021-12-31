import {
  HOME_PAGE_GO_OUT_FOR_A_MEAL,
  HOME_PAGE_LOGO,
  HOME_PAGE_NIGHT_LIFE,
  HOME_PAGE_ORDER_FOOD_ONLINE,
  HOME_PAGE_ZOMATO_PRO
} from "@src/constants";
import React from "react";
import Header from "../header";
import Searchbar from "../search-bar";
import classes from "./style.module.scss";

const HomePageData = () => (
  <>
    <link rel="preload" href={HOME_PAGE_LOGO} as="image" />
    <link rel="preload" href={HOME_PAGE_ORDER_FOOD_ONLINE} as="image" />
    <link rel="preload" href={HOME_PAGE_GO_OUT_FOR_A_MEAL} as="image" />
    <TopBanner />
    <StaticImages />
  </>
);

const TopBanner = () => {
    const bannerHeading = "Discover best food & drinks";
    return (
      <div className={classes.container}>
        <Header color="white" showLogo={false} />
        <div className={classes.logoContainer}>
          <img
              src={HOME_PAGE_LOGO}
              data-src={HOME_PAGE_LOGO}
              alt="home-page-logo"
              className={classes.homePageLogo}
              width={30}
              height={50}
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
        {homePageImages.map((el, index) => (
          <div className={classes.cardRoot} key={el}>
            <img
                src={el}
                data-src={el}
                alt={`home-page${index}`}
                style={{ height: "100%", width: "100%", borderRadius: "16px 16px 0 0" }}
            />
            <h3 className={classes.imageTitles}>{homePageImagesText[index]}</h3>
          </div>
        ))}
      </div>
    );
  };

export default HomePageData;
