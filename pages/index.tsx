import type { NextPage } from "next";
import React from "react";
import OgMetaData from "@src/components/og-meta-combo";
import Footer from "@src/components/footer";
import HomePageData from "@src/components/home-page";

const Home: NextPage = () => {
  return (
    <>
      <OgMetaData
          title="Zomato"
          description="A one go place to order food online"
      />
      <HomePageData />
      <Footer />
    </>
  );
};

export default Home;
