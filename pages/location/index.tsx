import AppWrapper from "@src/components/app";
import OgMetaData from "@src/components/og-meta-combo";
import BreadCrumbs from "@src/components/breadcrumbs";
import ScrollableTabs from "@src/components/tabs";
import { changeToCamelCase } from "@src/modules/camel-case";
import Container from "@src/components/container";
import useLocationInfo from "@custom-hooks/use-location-info";

const Locations = () => {
    const { area, cityId, cityName, countryName, cuisineId: cuisineIds } = useLocationInfo();

    return (
        <AppWrapper>
            <OgMetaData
                title={`Food Devlivery - ${changeToCamelCase(cityName)}`}
                description={`Best food near ${changeToCamelCase(cityName)}`}
            />
            <Container>
                <BreadCrumbs pathArray={["Home", countryName, cityName, area]} />
                <ScrollableTabs
                    location={cityName}
                    area={area}
                    cityId={cityId}
                    cuisineId={cuisineIds}
                    showByCuisine={!!cuisineIds}
                    queryKey={cuisineIds ? "cuisine-based-restaurants" : "location-specific-restaurants"}
                    isLocationPage
                />
            </Container>
        </AppWrapper>
    );
};

export default Locations;
