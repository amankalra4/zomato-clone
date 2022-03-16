import { ButtonBase, Chip, Collapse, IconButton, Typography } from "@material-ui/core";
import { Call, Close, Directions, MenuBook, Share, Check, StarRate, QueryBuilder, Money, Star } from "@material-ui/icons";
import Alert from "@material-ui/lab/Alert";
import ImageCarousel from "@modules/image-carousel";
import { Photo, Restaurant2, UserRating } from "@modules/interface/restuarant";
import { useEffect, useState, ReactNode, ReactElement } from "react";
import {
    container,
    chipContainer,
    phoneNumberContainer,
    collapse,
    cuisines,
    location,
    heading,
    moreInfoContainer,
    openClosed,
    orderNow
} from "./styles";

const RestaurantData = ({ restaurantInfo }: { restaurantInfo: Restaurant2 }) => {
    const [showAlert, setShowAlert] = useState(false);
    const mapsURL = "https://www.google.com/maps";

    useEffect(() => {
        let timer: any;
        if (showAlert) {
            timer = setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [showAlert]);

    return (
        <div className={container}>
            {showAlert && (
                <Collapse in={showAlert} timeout="auto" className={collapse}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setShowAlert(false);
                                }}
                            >
                                <Close fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        Copied Restaurant Link!
                    </Alert>
                </Collapse>
            )}
            <div>
                <h1 className={heading}>{restaurantInfo.name}</h1>
                <section>
                    <p className={cuisines}>{restaurantInfo.cuisines}</p>
                    <p className={location}>{restaurantInfo.location.locality_verbose}</p>
                </section>
                <p className={openClosed} data-src={restaurantInfo.is_delivering_now}>
                    {restaurantInfo.is_delivering_now ? "Open Now" : "Currently Closed"}
                </p>
            </div>
            <div className={chipContainer}>
                {restaurantInfo.is_delivering_now ? (
                    <ButtonBase href={restaurantInfo.order_url!} target="_blank">
                        <div className={orderNow}>Order Now</div>
                    </ButtonBase>
                ) : null}
                <ButtonBase
                    href={`${mapsURL}?q=${restaurantInfo.location.latitude},${restaurantInfo.location.longitude}`}
                    target="_blank"
                >
                    <Chip icon={<Directions />} label="Directions" color="primary" />
                </ButtonBase>
                <ButtonBase
                    onClick={() => {
                        setShowAlert(true);
                        navigator.clipboard.writeText(restaurantInfo.url);
                    }}
                >
                    <Chip icon={<Share />} label="Share" color="primary" />
                </ButtonBase>
                <ButtonBase href={restaurantInfo.menu_url} target="_blank">
                    <Chip icon={<MenuBook />} label="Check Menu" color="primary" />
                </ButtonBase>
            </div>
            <MoreInfo highlights={restaurantInfo.highlights} />
            <CommonIconData displayText="Rating" icon={<Star />}>
                <Rating rating={restaurantInfo.user_rating} />
            </CommonIconData>
            <CommonIconData displayText="Phone Number(s)" icon={<Call />}>
                <p>{restaurantInfo.phone_numbers}</p>
            </CommonIconData>
            <CommonIconData displayText="Timings" icon={<QueryBuilder />}>
                <Timings timings={restaurantInfo.timings} />
            </CommonIconData>
            <CommonIconData displayText="Average Cost" icon={<Money />}>
                <p style={{ paddingBottom: "5px" }}>
                    {`${restaurantInfo.currency} ${restaurantInfo.average_cost_for_two} for two people (approx.)`}
                </p>
            </CommonIconData>
            <ImagesByPeople photos={restaurantInfo.photos} firstImage={restaurantInfo.thumb} />
        </div>
    );
};

export default RestaurantData;

const MoreInfo = ({ highlights }: { highlights: string[] }) => (
    <div className={moreInfoContainer}>
        <h3>More Information for you</h3>
        <div>
            {highlights.map((el) => (
                <Chip key={el} icon={<Check style={{ color: "green" }} />} label={el} />
            ))}
        </div>
    </div>
);

interface ICommonIconDataProps {
    displayText: string;
    children: ReactNode;
    icon: ReactElement;
}
const CommonIconData = ({ displayText, children, icon }: ICommonIconDataProps) => (
    <div className={phoneNumberContainer}>
        <Chip icon={icon} label={displayText} color="primary" style={{ padding: "10px 5px" }} />
        {children}
    </div>
);

export const Rating = ({ rating }: { rating: UserRating }) => (
    <Typography
        style={{
            background: `#${rating.rating_color}`,
            color: "white",
            display: "flex",
            alignItems: "center",
            borderRadius: "5px",
            padding: "0 8px",
            width: "fit-content"
        }}
    >
        {rating.aggregate_rating}
        <StarRate
            style={{
                width: "20px",
                height: "20px",
                color: "white"
            }}
        />
    </Typography>
);

const Timings = ({ timings }: { timings: string }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <p>{timings}</p>
    </div>
);

interface IImagesByPeopleProps {
    photos: Photo[];
    firstImage: string;
}
const ImagesByPeople = ({ photos, firstImage }: IImagesByPeopleProps) => (
    <div>
        <h3>Images Uploaded by Customers</h3>
        <ImageCarousel imageArray={photos.slice(0, 5)} firstImage={firstImage} />
    </div>
);
