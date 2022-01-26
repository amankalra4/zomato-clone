import { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import MediaCard from "@src/modules/restaurant-cards";
import { changeToCamelCase } from "@src/modules/camel-case";
import useInfiniteScroll from "@src/custom-hooks/use-infinite-scroll";
import { RestaurantRootInterface } from "@src/modules/interface/restuarant";
import FirstOrderSection from "../first-order";
import CardSkeleton from "../card-skeletons";
import EndOfSearchResults from "../end-of-search";
import { circularProgress, commonHeading } from "./styles";
import { IScrollableTabsProps } from "./index";
import CustomFilters from "../filters";

const DeliveryInfo = ({
    location,
    area,
    cityId,
    cuisineId,
    showByCuisine,
    queryKey
}: IScrollableTabsProps) => {
    const { data, isFetchingNextPage, hasNextPage, isLoading } =
        useInfiniteScroll({
            cityId,
            secondParam: showByCuisine ? cuisineId! : location,
            queryKey: queryKey!
        });
    const [currency, setCurrency] = useState<string>("");

    useEffect(() => {
        if (data?.pages.length) {
            data.pages.forEach((el: RestaurantRootInterface) => {
                setCurrency(el.restaurants[0].restaurant.currency);
            });
        }
    }, [data]);

    return (
        <>
            <CustomFilters currency={currency} />
            {cuisineId ? (
                <>
                    <CommonSection heading="Food for your first order" />
                    {data?.pages[0].results_found > 0 && (
                        <MediaCard cardData={data?.pages.map((el) => el)} />
                    )}
                </>
            ) : (
                <>
                    <FirstOrderSection location={location} area={area} cityId={cityId} />
                    <CommonSection
                        heading={`Best food near ${changeToCamelCase(area)}`}
                    />
                    {data?.pages[0].results_found > 0 && (
                        <MediaCard cardData={data?.pages.map((el: RestaurantRootInterface) => el)} />
                    )}
                </>
            )}
            {isFetchingNextPage ? (
                <CircularProgress className={circularProgress} />
            ) : (
                !hasNextPage &&
                !isLoading &&
                data?.pages[0].results_found > 0 && <EndOfSearchResults />
            )}
            {isLoading && <CardSkeleton arrayLength={12} />}
        </>
    );
};

interface IHeading {
    heading: string;
}

const CommonSection = ({ heading }: IHeading) => (
    <h1 className={commonHeading}>{heading}</h1>
);

export default DeliveryInfo;
