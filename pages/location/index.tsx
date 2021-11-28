import { NextPageContext } from 'next';
import { getCities } from "@src/constants";
import { CityRoot } from "@src/modules/interface/city-interface";
import React from 'react';
import App from '@src/components/app';
import OgMetaCombo from '@src/components/og-meta-combo';
import BreadCrumbs from '@src/components/breadcrumbs';
import ScrollableTabs from '@src/components/tabs';

interface ILocationData {
    cityData: CityRoot,
    area: string;
    cityId: string;
    cityName: string;
}

const Locations = ({ cityData, area, cityId, cityName }: ILocationData) => {
    return (
        <App>
            <OgMetaCombo title="Zomato" description="Zomato Delivery" />
            <BreadCrumbs pathArray={["Home", "India", cityName, area]} />
            <ScrollableTabs
                location={cityName} 
                area={area}
                cityId={cityId}
                cuisineId={false}
            />
            <pre>{JSON.stringify(cityData)}</pre>
        </App>
    );
};

Locations.getInitialProps = async (req: NextPageContext) => {
    const { cityName, area, cityId } = req.query;
    const cityData = await getCities(cityName as string);
    return { 
        cityData, 
        area, 
        cityId,
        cityName
    };
};

export default Locations;
