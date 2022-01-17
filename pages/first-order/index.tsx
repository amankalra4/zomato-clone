import App from "@src/components/app";
import OgMetaData from "@src/components/og-meta-combo";
import BreadCrumbs from "@src/components/breadcrumbs";
import ScrollableTabs from "@src/components/tabs";
import { useRouter } from "next/router";
import { changeToCamelCase } from "@src/modules/camel-case";
import Container from "@src/components/container";

const FirstOrder = () => {
  const { query } = useRouter();
  const cityId: string = query.cityId as string;
  const cityName: string = query.cityName as string;
  const area: string = query.area as string;
  const cuisineId: string = query.cuisineId as string;

  return (
    <App>
        <OgMetaData
            title={`First Devlivery - ${changeToCamelCase(cityName)}`}
            description={`Food for your first order at - ${changeToCamelCase(
            cityName
          )}`}
        />
        <Container>
          <BreadCrumbs pathArray={["Home", "India", cityName, area]} />
          <ScrollableTabs
              location={cityName}
              area={area}
              cityId={cityId}
              cuisineId={cuisineId}
              showByCuisine
              queryKey="first-order-restaurants"
          />
        </Container>
    </App>
  );
};

export default FirstOrder;
