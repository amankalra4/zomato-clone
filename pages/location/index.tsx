import App from "@src/components/app";
import OgMetaData from "@src/components/og-meta-combo";
import BreadCrumbs from "@src/components/breadcrumbs";
import ScrollableTabs from "@src/components/tabs";
import { changeToCamelCase } from "@src/modules/camel-case";
import { useRouter } from "next/router";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}

const Locations = () => {
  const { query } = useRouter();
  const cityId: string = query.cityId as string;
  const cityName: string = query.cityName as string;
  const area: string = query.area as string;
  return (
    <App>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <OgMetaData
            title={`Food Devlivery - ${changeToCamelCase(cityName)}`}
            description={`Best food near ${changeToCamelCase(cityName)}`}
        />
        <div style={{ padding: "0 2rem" }}>
          <BreadCrumbs pathArray={["Home", "India", cityName, area]} />
          <ScrollableTabs location={cityName} area={area} cityId={cityId} />
        </div>
      </ErrorBoundary>
    </App>
  );
};

export default Locations;
