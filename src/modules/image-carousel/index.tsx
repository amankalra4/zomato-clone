import React from "react";
import Glider, { GliderProps } from "react-glider";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import Image from "next/image";
import classes from "./style.module.scss";
import { Photo } from "../interface/restuarant";

const ImageSlider = ({ imageArray, firstImage }: IImageCarouselProps) => (
  <>
    <Image src={firstImage} alt="restaurant image" width={150} height={150} quality={100} loading="lazy" layout="responsive" />
    {imageArray.map((el) => (
        <Image
            src={el.photo.thumb_url}
            alt="restaurant image"
            width={150}
            height={150}
            quality={100}
            loading="lazy"
            layout="responsive"
        />
    ))}
  </>
);

interface IImageCarouselProps {
  imageArray: Photo[];
  firstImage: string;
}
const ImageCarousel = ({ imageArray, firstImage }: IImageCarouselProps) => {
  const settings: GliderProps = {
    hasArrows: true,
    hasDots: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    scrollLock: true,
    duration: 1,
    iconLeft: <ChevronLeft />,
    iconRight: <ChevronRight />,
    children: <ImageSlider imageArray={imageArray} firstImage={firstImage} />
  };
  return (
    <div className={classes.container}>
      <Glider {...settings} className={classes.sliderRoot} />
    </div>
  );
};

export default ImageCarousel;
