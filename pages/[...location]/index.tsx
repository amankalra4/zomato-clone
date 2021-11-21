import { NextPageContext } from 'next';
import { getCities, getRestaurants } from "@src/constants";
import { CityRoot } from "@src/modules/interface/city-interface";
import React from 'react';
import App from '@src/components/app';
import OgMetaCombo from '@src/components/og-meta-combo';
import BreadCrumbs from '@src/components/breadcrumbs';
import ScrollableTabs from '@src/components/tabs';
import { RestaurantRootInterface } from '@src/modules/interface/restuarant';

interface ILocationData {
    cityData: CityRoot,
    restaurantData: RestaurantRootInterface;
    locationData: string;
    area: string;
    cityId: string;
    cuisineId: boolean;
}

const Locations = ({ cityData, restaurantData, locationData, area, cityId, cuisineId }: ILocationData) => {
    return (
        <App>
            <OgMetaCombo title="Zomato" description="Zomato Delivery" />
            <BreadCrumbs pathArray={["Home", "India", locationData, area]} />
            <ScrollableTabs 
                location={locationData} 
                area={area} 
                cityId={cityId} 
                cuisineId={cuisineId} 
                data={restaurantData} 
            />
            <pre>{JSON.stringify(cityData)}</pre>
        </App>
    );
};

Locations.getInitialProps = async (req: NextPageContext) => {
    const { location, area, cityId, cuisineId } = req.query;
    const locationData = location as string;
    let cityData; 
    let restaurantData;
    if (cuisineId) {
        restaurantData = await getRestaurants(cityId as string, undefined, cuisineId as string);
    } else {
        cityData = await getCities(locationData[0] as string);
    }
    return { 
        cityData, 
        restaurantData: restaurantData?.data, 
        locationData: locationData[0], 
        area, 
        cityId, 
        cuisineId: !!cuisineId 
    };
};

export default Locations;
