/* eslint-disable function-paren-newline */
import { getCollections } from "@constants/index";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { ICollectionRoot } from "../../modules/interface/collection-interface";
import CardSkeleton from "../card-skeletons";
import { CommonBanners, CommonHeading, nightLifeCollection } from "../night-life";
import { IAutoCompleteValue } from "../search-bar/location-auto-complete";

const DiningOut = () => {
    const { query } = useRouter();
    let userLocation: IAutoCompleteValue;
    if (typeof window !== "undefined") {
        userLocation = JSON.parse(localStorage.getItem("userLocations")!);
    }

    const getdata = async () => {
        const res: ICollectionRoot = await getCollections(userLocation.locationId!.toString());
        const data: nightLifeCollection[] = [];
        res.collections.forEach((el) =>
            data.push({
                text: el.collection.title,
                images: el.collection.image_url,
                url: el.collection.url,
                numberOfPlaces: el.collection.res_count
            })
        );
        return data;
    };

    const { data, isLoading, refetch } = useQuery("restaurantCollectionsData", getdata);

    useEffect(() => {
        refetch();
    }, [query.cityId]);

    if (isLoading) {
        return <CardSkeleton arrayLength={4} />;
    }

    return (
        <>
            <CommonHeading location={query.cityName as string} />
            <CommonBanners imagesTextArray={data!} />
        </>
    );
};

export default DiningOut;
