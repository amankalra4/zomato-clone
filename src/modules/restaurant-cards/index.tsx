/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { Rating } from "@src/components/restaurant-data";
import { IRestaurant, RestaurantRootInterface } from "../interface/restuarant";
import {
  cardsContainer,
  cardsRoot,
  cuisinesContainer,
  ellipsis,
  media,
  nameContainer
} from "./styles";

interface ICardProps {
  cardData?: RestaurantRootInterface[];
}

export default function MediaCard({ cardData }: ICardProps) {
  return (
    <div className={cardsContainer}>
      {cardData?.map((el1) =>
      (el1.results_found > 0 ? (
        el1.restaurants.map((el) => <CardComponent data={el} />)
      ) : (
        <h2 key={el1.results_shown} style={{ margin: "20px 0" }}>
          Sorry! We Couldn't find any restaurants.
        </h2>
      )))}
    </div>
  );
}

interface ICardComponentProps {
  data: IRestaurant;
}

const CardComponent = ({ data }: ICardComponentProps) => (
  <Card className={cardsRoot} key={data.restaurant.id}>
    <TopData data={data} />
    <BottomData data={data} />
  </Card>
);

const TopData = ({ data }: ICardComponentProps) => (
  <CardActionArea>
    <Link
        href={`restaurant/${data.restaurant.name
        .split(" ")
        .join("-")
        .toLowerCase()}?id=${data.restaurant.id}`}
        key={data.restaurant.id}
    >
      <div>
        <CardMedia
            className={media}
            title={data.restaurant.name}
            children={
            <img
                src={data.restaurant.thumb}
                width="100%"
                height="100%"
                alt={data.restaurant.name}
                loading="lazy"
            />
          }
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
      <Typography
          className={ellipsis}
          gutterBottom
          variant="subtitle1"
          style={{ margin: 0, fontSize: "1rem" }}
      >
        {data.restaurant.name}
      </Typography>
      <Rating rating={data.restaurant.user_rating} />
    </div>
    <div className={cuisinesContainer}>
      <Typography
          gutterBottom
          variant="caption"
          className={ellipsis}
          style={{ margin: 0 }}
      >
        {data.restaurant.cuisines}
      </Typography>
      <Typography variant="caption" color="textSecondary">
        {data.restaurant.currency}
        {" "}
        {data.restaurant.average_cost_for_two}
        {" "}
        <span>For Two</span>
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
          color: data.restaurant.is_delivering_now ? "green" : "red"
        }}
      >
        {data.restaurant.is_delivering_now
          ? "Open Now"
          : `Opens at ${data.restaurant.timings.replace(" – ", "to").split("to")[0]
          }`}
      </Typography>
    </Button>
  </CardActions>
);
