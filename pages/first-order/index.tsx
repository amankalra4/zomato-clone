import AppWrapper from "@src/components/app";
import OgMetaData from "@src/components/og-meta-combo";
import BreadCrumbs from "@src/components/breadcrumbs";
import ScrollableTabs from "@src/components/tabs";
import { changeToCamelCase } from "@src/modules/camel-case";
import Container from "@src/components/container";
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
