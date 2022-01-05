import { ArrowRight } from "@material-ui/icons";
import {
    NIGHTLIFE_IMAGE_1,
    NIGHTLIFE_IMAGE_2,
    NIGHTLIFE_IMAGE_3,
    NIGHTLIFE_IMAGE_4
} from "@src/constants";
import React from "react";
import Link from "next/link";
import { imageSubHeading, nightLife, subHeading } from "./styles";

interface INightLifeProps {
    location: string;
}

export type nightLifeCollection = {
    text: string;
    images: string;
    url?: string;
    numberOfPlaces?: number;
};

const nightLifeCollectionArray: nightLifeCollection[] = [
    {
        text: "Best Bars",
        images: NIGHTLIFE_IMAGE_1,
        numberOfPlaces: 19
    },
    {
        text: "Best Pubs",
        images: NIGHTLIFE_IMAGE_2,
        numberOfPlaces: 8
    },
    {
        text: "Cocktails",
        images: NIGHTLIFE_IMAGE_3,
        numberOfPlaces: 6
    },
    {
        text: "Happy Hours",
        images: NIGHTLIFE_IMAGE_4,
        numberOfPlaces: 11
    }
];

const NightLife = ({ location }: INightLifeProps) => {
    return (
        <div>
            <CommonHeading location={location} />
            <CommonBanners imagesTextArray={nightLifeCollectionArray} />
        </div>
    );
};

export const CommonHeading = ({ location }: INightLifeProps) => (
    <>
        <h1>Collections</h1>
        <h4 className={subHeading}>
            Explore restaurants, cafes, pubs, and bars in 
            {" "}
            <strong>{location}</strong>
        </h4>
    </>
);

interface ICommonBannerProps {
    imagesTextArray: nightLifeCollection[];
}
export const CommonBanners = ({ imagesTextArray }: ICommonBannerProps) => (
    <div className={nightLife}>
        {imagesTextArray.map((el: nightLifeCollection) => (
            <div key={el.text}>
                <Link href={el.url ? el.url : "#"} passHref>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a target={el.url ? "_blank" : "_self"}>
                    <img src={el.images} alt="night-life" height="100%" width="100%" />
                    <div className={imageSubHeading}>
                        <h5>{el.text}</h5>
                        <h5>
                            {el.numberOfPlaces}
                            {" "}
                            Places
                            <ArrowRight />
                        </h5>
                    </div>
                    </a>
                </Link>
            </div>
        ))}
    </div>
); 

export default NightLife;
