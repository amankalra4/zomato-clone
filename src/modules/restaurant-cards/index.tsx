import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { RestaurantRootInterface } from '../interface/restuarant';

const useStyles = makeStyles({
    root: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
});

interface ICardProps {
    cardData?: RestaurantRootInterface;
}

export default function MediaCard({ cardData }: ICardProps) {
    const classes = useStyles();
    return (
        <div>
            {cardData?.restaurants.map((el) => (
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={el.restaurant.thumb}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {el.restaurant.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {el.restaurant.cuisines}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {el.restaurant.is_book_form_web_view}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        {el.restaurant.user_rating.aggregate_rating}
                    </Button>
                    <Button size="small" color="primary">
                        {el.restaurant.average_cost_for_two}
                    </Button>
                </CardActions>
            </Card>
            ))}
        </div>
    );
}
