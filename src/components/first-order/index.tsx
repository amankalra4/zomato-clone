import {
    FIRST_ORDER_BURGER,
    FIRST_ORDER_CHICKEN,
    FIRST_ORDER_PIZZA,
    FIRST_ORDER_ROLLS
} from "@src/constants";
import { useRouter } from "next/router";
import Image from "next/image";
import { ButtonBase } from "@material-ui/core";
import { IScrollableTabsProps } from "../tabs";
import classes from "./styles.module.scss";

type firsOrderItems = "Pizza" | "Burger" | "Rolls" | "Chicken";

type orderObject = {
    image: string;
    text: firsOrderItems;
    cuisineId: string;
};

const firstOrderArray: Array<orderObject> = [
    {
        image: FIRST_ORDER_PIZZA,
        text: "Pizza",
        cuisineId: "82"
    },
    {
        image: FIRST_ORDER_BURGER,
        text: "Burger",
        cuisineId: "168"
    },
    {
        image: FIRST_ORDER_ROLLS,
        text: "Rolls",
        cuisineId: "1023"
    },
    {
        image: FIRST_ORDER_CHICKEN,
        text: "Chicken",
        cuisineId: "994"
    }
];

const FirstOrderSection = ({
    location,
    area,
    cityId
}: IScrollableTabsProps) => {
    const { push } = useRouter();
    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>Inspiration for your first order</h1>
            <div className={classes.imagesContainer}>
                {firstOrderArray.map((el) => (
                    <div key={el.text} className={classes.firstOrderImages}>
                        <ButtonBase
                            onClick={() =>
                                push({
                                    pathname: "first-order",
                                    query: {
                                        cityName: location,
                                        cuisineId: el.cuisineId,
                                        cityId,
                                        area
                                    }
                                })
                            }
                        >
                            <Image
                                src={el.image}
                                alt={el.text}
                                width={200}
                                height={200}
                                quality={100}
                                priority
                                className={classes.firstOrderImage}
                            />
                        </ButtonBase>
                        <p>{el.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FirstOrderSection;
