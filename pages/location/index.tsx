import AppWrapper from "@src/components/app";
import OgMetaData from "@src/components/og-meta-combo";
import BreadCrumbs from "@src/components/breadcrumbs";
import ScrollableTabs from "@src/components/tabs";
import { useRouter } from "next/router";
import { changeToCamelCase } from "@src/modules/camel-case";
import Container from "@src/components/container";

const Locations = () => {
    const { query } = useRouter();
    const cityId: string = (query.cityId as string) ?? "11307";
    const cityName: string = (query.cityName as string) ?? "Jammu";
    const area: string = (query.area as string) ?? "Jammu";
    const cuisineIds: string = query.cuisineId as string;
    const countryName: string = (query.countryName as string) ?? "India";

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
