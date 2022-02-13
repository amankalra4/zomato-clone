import { FIRST_ORDER_BURGER, FIRST_ORDER_SANDWICH, FIRST_ORDER_PIZZA, FIRST_ORDER_ROLLS } from "@src/constants";
import { useRouter } from "next/router";
import Image from "next/image";
import { ButtonBase } from "@material-ui/core";
import { container, firstOrderImage, firstOrderImages, heading, imagesContainer } from "./styles";

type firsOrderItems = "Pizza" | "Burger" | "Rolls" | "Sandwich";

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
        image: FIRST_ORDER_SANDWICH,
        text: "Sandwich",
        cuisineId: "304"
    }
];

const FirstOrderSection = () => {
    const { push, query } = useRouter();
    return (
        <div className={container}>
            <h1 className={heading}>Inspiration for your first order</h1>
            <div className={imagesContainer}>
                {firstOrderArray.map((el) => (
                    <div key={el.text} className={firstOrderImages}>
                        <ButtonBase
                            onClick={() =>
                                push({
                                    pathname: "first-order",
                                    query: {
                                        ...query,
                                        cuisineId: el.cuisineId,
                                        item: el.text
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
                                className={firstOrderImage}
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
