/* eslint-disable max-len */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StarRate, Phone } from '@material-ui/icons';
import { RestaurantRootInterface } from '../interface/restuarant';

const useStyles = makeStyles({
    root: {
        width: "65%",
        boxShadow: "-1px -1px 16px 4px #888888",
        borderRadius: "8px"
    },
    media: {
        height: 140
    },
    ellipsis: {
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "50%",
        whiteSpace: "nowrap",
        display: "inline-block"
    }
});

interface ICardProps {
    cardData?: RestaurantRootInterface[];
}

export default function MediaCard({ cardData }: ICardProps) {
    const classes = useStyles();
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridRowGap: "4rem", justifyItems: "center" }}>
            {cardData?.map((el1) => el1.restaurants.map((el) => (
                <Card className={classes.root}>
                    <CardActionArea>
                        <a
                            href={el.restaurant.events_url}
                            key={el.restaurant.id}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: "none" }}
                        >
                            <CardMedia
                                className={classes.media}
                                image={el.restaurant.thumb}
                                title={el.restaurant.name}
                            />
                            <CardContent>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Typography className={classes.ellipsis} gutterBottom variant="subtitle1" style={{ margin: 0, fontSize: "1rem" }}>
                                        {el.restaurant.name}
                                    </Typography>
                                    <Typography
                                        style={{
                                            background: `#${el.restaurant.user_rating.rating_color}`,
                                            color: "white",
                                            display: "flex",
                                            alignItems: "center",
                                            borderRadius: "5px",
                                            padding: "0 8px"
                                        }}>
                                        {el.restaurant.user_rating.aggregate_rating}
                                        <StarRate style={{ width: "20px", height: "20px", color: "white" }} />
                                    </Typography>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginTop: "1rem"
                                    }}>
                                    <Typography gutterBottom variant="caption" className={classes.ellipsis} style={{ margin: 0 }}>
                                        {el.restaurant.cuisines}
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary">
                                        {el.restaurant.currency}
                                        {" "}
                                        {el.restaurant.average_cost_for_two}
                                        {" "}
                                        <span>
                                            For Two
                                        </span>
                                    </Typography>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginTop: "1rem"
                                    }}>
                                    <a href={`tel:${el.restaurant.phone_numbers.split(", ")[0]}`}
                                        style={{
                                            textDecoration: "none",
                                            display: "flex",
                                            alignItems: "center"
                                        }}>
                                        <Phone color="primary" style={{ marginRight: "8px" }} />
                                        {el.restaurant.phone_numbers.split(", ")[0]}
                                    </a>
                                    <Typography variant="caption" color="textSecondary">
                                        {el.restaurant.establishment[0]}
                                    </Typography>
                                </div>
                            </CardContent>
                        </a>
                    </CardActionArea>
                    <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button size="small" color="primary">
                            <Typography
                                style={{ color: el.restaurant.is_delivering_now ? "green" : "red" }}>
                                {el.restaurant.is_delivering_now ? "Open" : "Closed"}
                            </Typography>
                        </Button>
                        {el.restaurant.is_delivering_now ?
                            <>
                                <a href={el.restaurant.menu_url} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                                    Check Menu
                                </a>
                                <a href={el.restaurant.order_url} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                                    Order Online
                                </a>
                            </>
                            : <a href={el.restaurant.menu_url} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                                Check Menu
                            </a>}
                    </CardActions>
                </Card>
            )))}
        </div>
    );
}
