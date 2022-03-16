import AppWrapper from "@components/app";
import OgMetaData from "@components/og-meta-combo";
import BreadCrumbs from "@components/breadcrumbs";
import ScrollableTabs from "@components/tabs";
import { changeToCamelCase } from "@modules/camel-case";
import Container from "@components/container";
import useLocationInfo from "@custom-hooks/use-location-info";

const Locations = () => {
    const { area, cityName, countryName, cuisineId: cuisineIds } = useLocationInfo();

    return (
        <AppWrapper>
            <OgMetaData
                title={`Food Devlivery - ${changeToCamelCase(cityName)}`}
                description={`Best food near ${changeToCamelCase(cityName)}`}
            />
            <Container>
                <BreadCrumbs pathArray={["Home", countryName, cityName, area]} />
                <ScrollableTabs
                    showByCuisine={!!cuisineIds}
                    queryKey={cuisineIds ? "cuisine-based-restaurants" : "location-specific-restaurants"}
                    isLocationPage
                />
            </Container>
        </AppWrapper>
    );
};

export default Locations;
