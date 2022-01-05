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
import { RestaurantRootInterface } from "../interface/restuarant";
import classes from "./styles.module.scss";

interface ICardProps {
  cardData?: RestaurantRootInterface[];
}

export default function MediaCard({ cardData }: ICardProps) {
  return (
    <div className={classes.cardsContainer}>
      {cardData?.map((el1) =>
        el1.restaurants.map((el) => (
          <Card className={classes.cardsRoot} key={el.restaurant.id}>
            <CardActionArea>
              <Link
                  href={`restaurant/${el.restaurant.name
                  .split(" ")
                  .join("-")
                  .toLowerCase()}?id=${el.restaurant.id}`}
                  key={el.restaurant.id}
              >
                <div>
                  <CardMedia
                      className={classes.media}
                      title={el.restaurant.name}
                      children={
                        <img
                            src={el.restaurant.thumb}
                            width="100%"
                            height="100%"
                            alt={el.restaurant.name}
                            loading="lazy"
                        />
                    }
                  />
                  <CardContent>
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <Typography
                          className={classes.ellipsis}
                          gutterBottom
                          variant="subtitle1"
                          style={{ margin: 0, fontSize: "1rem" }}
                      >
                        {el.restaurant.name}
                      </Typography>
                      <Rating rating={el.restaurant.user_rating} />
                    </div>
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "1rem"
                      }}
                    >
                      <Typography
                          gutterBottom
                          variant="caption"
                          className={classes.ellipsis}
                          style={{ margin: 0 }}
                      >
                        {el.restaurant.cuisines}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {el.restaurant.currency}
                          {" "}
                        {el.restaurant.average_cost_for_two}
                        <span>For Two</span>
                      </Typography>
                    </div>
                  </CardContent>
                </div>
              </Link>
            </CardActionArea>
            <CardActions
                style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button size="small" color="primary">
                <Typography
                    style={{
                    color: el.restaurant.is_delivering_now ? "green" : "red"
                  }}
                >
                  {el.restaurant.is_delivering_now
                    ? "Open Now"
                    : `Opens at ${el.restaurant.timings
                      .replace(" – ", "to")
                      .split("to")[0]
                    }`}
                </Typography>
              </Button>
            </CardActions>
          </Card>
        )))}
    </div>
  );
}
