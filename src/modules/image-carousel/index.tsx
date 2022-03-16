import Glider, { GliderProps } from "react-glider";
import "react-glider/glider.defaults.css";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import classes from "./style.module.scss";
import { Photo } from "../interface/restuarant";

const ImageSlider = ({ imageArray, firstImage }: IImageCarouselProps) => (
    <>
        <img src={firstImage} alt="restaurant" width={100} height={150} loading="lazy" />
        {imageArray.map((el) => (
            <img src={el.photo.thumb_url} alt="restaurant" width={150} height={150} loading="lazy" key={el.photo.id} />
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
        iconLeft: <ChevronLeft style={{ margin: "0 2.5rem 0 0" }} />,
        iconRight: <ChevronRight style={{ margin: "0 0 0 2rem" }} />,
        children: <ImageSlider imageArray={imageArray} firstImage={firstImage} />
    };
    return (
        <div className={classes.container}>
            <Glider {...settings} className={classes.sliderRoot} />
        </div>
    );
};

export default ImageCarousel;
