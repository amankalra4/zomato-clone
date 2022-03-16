/* eslint-disable react/no-unescaped-entities */
/* eslint-disable function-paren-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import { createContext, useEffect, useMemo, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import MediaCard from "@modules/restaurant-cards";
import { changeToCamelCase } from "@modules/camel-case";
import useInfiniteScroll from "@custom-hooks/use-infinite-scroll";
import { IRestaurant, Restaurant2, RestaurantRootInterface } from "@modules/interface/restuarant";
import { useQueryClient } from "react-query";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import useLocationInfo from "@custom-hooks/use-location-info";
import FirstOrderSection from "../first-order";
import CardSkeleton from "../card-skeletons";
import { circularProgress, commonHeading } from "./styles";
import { IScrollableTabsProps } from "./index";
import CustomFilters, { ICuisine, ICuisinesContext } from "../filters";

const EndOfSearchResults = dynamic(() => import("../end-of-search/index"));

type IFiltersContext = {
    data: IRestaurant[];
    isLocationPage: boolean;
    cardData: Restaurant2[];
    cuisinesFromQuery: string[];
    handleData: (param: ICuisinesContext) => void;
    handleDataChange: (data: Restaurant2[]) => void;
};

export const FiltersContext = createContext<IFiltersContext>({
    data: [],
    isLocationPage: false,
    cardData: [],
    cuisinesFromQuery: [],
    handleData: () => {},
    handleDataChange: () => {}
});

const DeliveryInfo = ({ showByCuisine, queryKey, isLocationPage }: IScrollableTabsProps) => {
    const { cityName: location, area, cityId, cuisineId, entityType } = useLocationInfo();
    const {
        data: paginatedRestaurantData,
        isFetchingNextPage,
        hasNextPage,
        isLoading
    } = useInfiniteScroll({
        cityId,
        cuisineId: showByCuisine ? cuisineId! : "",
        queryKey: queryKey!,
        cityName: location,
        entityType
    });
    const [filteredCuisines, setFilteredCuisines] = useState<ICuisine>({} as ICuisine);
    const [restaurantsData, setRestaurantsData] = useState<Restaurant2[]>([]);
    const queryClient = useQueryClient();
    const { query } = useRouter();
    const cuisinesFromQuery = query.cuisineId?.toString().split(",");

    useEffect(() => {
        if (cuisineId) {
            queryClient.fetchInfiniteQuery("cuisine-based-restaurants");
        }
    }, [cuisineId]);

    const handleData = (param: ICuisinesContext) => {
        setFilteredCuisines({ ...param.data });
    };

    const handleDataChange = (data: Restaurant2[]) => {
        setRestaurantsData(data);
    };

    const filteredData = useMemo(() => {
        const filteredObjectArray = Object.entries(filteredCuisines).filter((el) =>
            cuisinesFromQuery?.includes(el[1].cuisineId.toString())
        );
        const filteredObject = Object.fromEntries(filteredObjectArray);
        return filteredObject;
    }, [filteredCuisines, cuisineId]);

    const providerValue = useMemo(() => {
        const restaurantData = paginatedRestaurantData?.pages.map((el: RestaurantRootInterface) => el.restaurants);
        const commonRestaurantData: IRestaurant[] = [];
        restaurantData?.forEach((el) => commonRestaurantData.push(...el));
        return {
            data: commonRestaurantData,
            isLocationPage: isLocationPage!,
            cardData: restaurantsData,
            cuisinesFromQuery: cuisinesFromQuery!,
            handleData,
            handleDataChange
        };
    }, [paginatedRestaurantData, isLocationPage, restaurantsData]);

    useEffect(() => {
        if (paginatedRestaurantData?.pages.length) {
            const paginatedData = paginatedRestaurantData?.pages
                .map((el) => el.restaurants)
                .map((el) => el.map((el1) => el1.restaurant));
            setRestaurantsData(paginatedData.flat(1));
        }
    }, [paginatedRestaurantData, cityId]);

    return (
        <FiltersContext.Provider value={providerValue}>
            {/* Not passing any parameter as it helped in avoiding re-rendering */}
            <CustomFilters />
            {cuisineId ? (
                <>
                    {isLocationPage ? (
                        <h2 className={commonHeading} style={{ fontSize: "1.5rem" }}>
                            {Object.entries(filteredData)
                                .filter((el) => cuisinesFromQuery?.includes(el[1].cuisineId.toString()))
                                .map((el, index) => (
                                    <span key={el[1].cuisineId}>
                                        {el[0]}
                                        {Object.keys(filteredData).length > 1 && Object.keys(filteredData).length - 1 !== index
                                            ? ", "
                                            : " "}
                                    </span>
                                ))}
                            Restaurants in {changeToCamelCase(location)}
                        </h2>
                    ) : (
                        <h1 className={commonHeading} style={{ fontSize: "1.7rem" }}>
                            {`${query.item ?? "Food"} Restaurants in ${changeToCamelCase(area)}, ${changeToCamelCase(location)}`}
                        </h1>
                    )}
                    {isLoading && <CardSkeleton arrayLength={12} />}
                    {paginatedRestaurantData?.pages[0].results_found! > 0 ? (
                        <MediaCard cardData={restaurantsData.map((el) => el)} />
                    ) : (
                        <h4 style={{ margin: "20px auto" }}>
                            Sorry! We Couldn't find any restaurants.
                            <EndOfSearchResults />
                        </h4>
                    )}
                </>
            ) : (
                <>
                    <FirstOrderSection />
                    <CommonSection heading={`Best food near ${changeToCamelCase(area)}`} />
                    {paginatedRestaurantData?.pages[0].results_found ? (
                        <MediaCard cardData={restaurantsData.map((el) => el)} />
                    ) : (
                        <CardSkeleton arrayLength={12} />
                    )}
                </>
            )}
            {isFetchingNextPage ? (
                <CircularProgress className={circularProgress} />
            ) : (
                !hasNextPage && !isLoading && paginatedRestaurantData?.pages[0].results_found! > 0 && <EndOfSearchResults />
            )}
        </FiltersContext.Provider>
    );
};

const CommonSection = ({ heading }: { heading: string }) => <h1 className={commonHeading}>{heading}</h1>;

export default DeliveryInfo;
