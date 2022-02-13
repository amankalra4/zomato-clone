import AppWrapper from "@src/components/app";
import OgMetaData from "@src/components/og-meta-combo";
import BreadCrumbs from "@src/components/breadcrumbs";
import ScrollableTabs from "@src/components/tabs";
import { useRouter } from "next/router";
import { changeToCamelCase } from "@src/modules/camel-case";
import Container from "@src/components/container";

const FirstOrder = () => {
    const { query } = useRouter();
    const cityId: string = (query.cityId as string) ?? "11307";
    const cityName: string = (query.cityName as string) ?? "Jammu";
    const area: string = (query.area as string) ?? "Jammu";
    const cuisineId: string = query.cuisineId as string;
    const countryName: string = (query.countryName as string) ?? "India";

    return (
        <AppWrapper>
            <OgMetaData
                title={`First Devlivery - ${changeToCamelCase(cityName)}`}
                description={`Food for your first order at - ${changeToCamelCase(cityName)}`}
            />
            <Container>
                <BreadCrumbs pathArray={["Home", countryName, cityName, area]} />
                <ScrollableTabs
                    location={cityName}
                    area={area}
                    cityId={cityId}
                    cuisineId={cuisineId}
                    showByCuisine
                    queryKey="cuisine-based-restaurants"
                />
            </Container>
        </AppWrapper>
    );
};

export default FirstOrder;
