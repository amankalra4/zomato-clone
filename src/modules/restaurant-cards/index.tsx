/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { Rating } from "@components/restaurant-data";
import { Restaurant2 } from "../interface/restuarant";
import { cardsRoot, cuisinesContainer, ellipsis, media, nameContainer, mediaRoot, getStyles } from "./styles";

function MediaCard({ cardData }: { cardData: Restaurant2[] }) {
    const classes = getStyles(cardData.length);
    return (
        <div className={classes.cardsContainer}>
            {cardData.length > 0 ? (
                cardData.map((el) => <CardComponent key={el.id} data={el} />)
            ) : (
                <h2 style={{ margin: "20px 0" }}>Sorry! We Couldn't find any restaurants.</h2>
            )}
        </div>
    );
}

interface ICardComponentProps {
    data: Restaurant2;
}

const CardComponent = ({ data }: ICardComponentProps) => (
    <Card className={cardsRoot}>
        <TopData data={data} />
        <BottomData data={data} />
    </Card>
);

const TopData = ({ data }: ICardComponentProps) => (
    <CardActionArea>
        <Link href={`restaurant/${data.name.split(" ").join("-").toLowerCase()}?id=${data.id}`} key={data.id}>
            <div className={mediaRoot}>
                <CardMedia
                    className={media}
                    title={data.name}
                    children={<img src={data.thumb} width="100%" height="100%" alt={data.name} loading="lazy" />}
                />
                <TopCardData data={data} />
            </div>
        </Link>
    </CardActionArea>
);

// CARD's Top Data
const TopCardData = ({ data }: ICardComponentProps) => (
    <CardContent>
        <div className={nameContainer}>
            <Typography className={ellipsis} gutterBottom variant="subtitle1" style={{ margin: 0, fontSize: "1rem" }}>
                {data.name}
            </Typography>
            <Rating rating={data.user_rating} />
        </div>
        <div className={cuisinesContainer}>
            <Typography gutterBottom variant="caption" className={ellipsis} style={{ margin: 0 }}>
                {data.cuisines}
            </Typography>
            <Typography variant="caption" color="textSecondary">
                {data.currency} {data.average_cost_for_two} <span>For Two</span>
            </Typography>
        </div>
    </CardContent>
);

// CARD's Bottom Data
const BottomData = ({ data }: ICardComponentProps) => (
    <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small" color="primary">
            <Typography
                style={{
                    color: data.is_delivering_now ? "green" : "red"
                }}
            >
                {data.is_delivering_now ? "Open Now" : `Opens at ${data.timings.replace(" – ", "to").split("to")[0]}`}
            </Typography>
        </Button>
    </CardActions>
);

export default MediaCard;
