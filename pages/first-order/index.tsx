import App from "@src/components/app";
import OgMetaData from "@src/components/og-meta-combo";
import BreadCrumbs from "@src/components/breadcrumbs";
import ScrollableTabs from "@src/components/tabs";
import { useRouter } from "next/router";
import { changeToCamelCase } from "@src/modules/camel-case";

const FirstOrder = () => {
  const { query } = useRouter();
  const cityId: string = query.cityId as string;
  const cityName: string = query.cityName as string;
  const area: string = query.area as string;
  const cuisineId: string = query.cuisineId as string;

  return (
    <App>
      <OgMetaData
          title={`Food Devlivery - ${changeToCamelCase(cityName)}`}
          description={`Food for your first order at - ${changeToCamelCase(
          cityName
        )}`}
      />
      <div style={{ padding: "0 2rem" }}>
        <BreadCrumbs pathArray={["Home", "India", cityName, area]} />
        <ScrollableTabs
            location={cityName}
            area={area}
            cityId={cityId}
            cuisineId={cuisineId}
            showByCuisine
            queryKey="first-order-restaurants"
        />
      </div>
    </App>
  );
};

export default FirstOrder;
