import AppWrapper from "@components/app";
import OgMetaData from "@components/og-meta-combo";
import BreadCrumbs from "@components/breadcrumbs";
import ScrollableTabs from "@components/tabs";
import { changeToCamelCase } from "@modules/camel-case";
import Container from "@components/container";
import useLocationInfo from "@custom-hooks/use-location-info";

const FirstOrder = () => {
    const { area, cityName, countryName } = useLocationInfo();

    return (
        <AppWrapper>
            <OgMetaData
                title={`First Devlivery - ${changeToCamelCase(cityName)}`}
                description={`Food for your first order at - ${changeToCamelCase(cityName)}`}
            />
            <Container>
                <BreadCrumbs pathArray={["Home", countryName, cityName, area]} />
                <ScrollableTabs showByCuisine queryKey="cuisine-based-restaurants" />
            </Container>
        </AppWrapper>
    );
};

export default FirstOrder;
