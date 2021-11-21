/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FIRST_ORDER_BURGER, FIRST_ORDER_CHICKEN, FIRST_ORDER_PIZZA, FIRST_ORDER_ROLLS } from "@src/constants";
import { useRouter } from "next/router";
import { IScrollableTabsProps } from "../tabs";

type firsOrderItems = "Pizza" | "Burger" | "Rolls" | "Chicken";

type orderObject = {
    image: string;
    text: firsOrderItems;
    cuisineId: string;
}

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

const FirstOrderSection = ({ location, area, cityId }: IScrollableTabsProps) => {
    const { push } = useRouter();
    return (
        <div style={{ padding: "4rem 0px", background: "rgb(248, 248, 248)" }}>
            <h3 style={{ color: "rgb(28, 28, 28)", fontSize: "2rem", margin: "0px 0px 3.2rem" }}>
                Inspiration for your first order
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
            {firstOrderArray.map((el) => (
                <div key={el.text} style={{ display: "grid", justifyItems: "center", placeContent: "space-evenly" }}>
                    <img 
                        src={el.image} 
                        alt={el.text} 
                        style={{maxWidth: "80%", cursor: "pointer", maxHeight: "80%" }} 
                        onClick={() => push({ 
                                pathname: `/${location}/delivery`, 
                                query: { cuisineId: el.cuisineId, cityId, area } 
                            })} 
                    />
                    <p>{el.text}</p>
                </div>
            ))}
            </div>
        </div>
    );
};

export default FirstOrderSection;
