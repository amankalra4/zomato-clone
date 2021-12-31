import App from "@src/components/app";
import OgMetaData from "@src/components/og-meta-combo";
import BreadCrumbs from "@src/components/breadcrumbs";
import ScrollableTabs from "@src/components/tabs";
import CircularProgress from "@material-ui/core/CircularProgress";
import useInfiniteScroll from "@src/custom-hooks/use-infinite-scroll";
import { changeToCamelCase } from "@src/modules/camel-case";
import { useRouter } from "next/router";
import { ErrorBoundary } from "react-error-boundary";
import EndOfSearchResults from "@src/components/end-of-search";
import CardSkeleton from "@src/components/card-skeletons";
// import {
//   DELIVERY_ICON_ENABLED,
//   DINEOUT_ICON_DISABLED,
//   FIRST_ORDER_BURGER,
//   FIRST_ORDER_CHICKEN,
//   FIRST_ORDER_PIZZA,
//   FIRST_ORDER_ROLLS,
//   NIGHTLIFE_ICON_DISABLED
// } from "@src/constants";
import classes from "./style.module.scss";

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
  const { data, error, isFetchingNextPage, status, hasNextPage, isLoading } =
    useInfiniteScroll({
      cityId,
      secondParam: cityName,
      queryKey: "location-specific-restaurants"
    });
  if (status === "error") {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }
  return (
    <App>
      {/* <link rel="preload" href={DELIVERY_ICON_ENABLED} as="image" />
      <link rel="preload" href={DINEOUT_ICON_DISABLED} as="image" />
      <link rel="preload" href={NIGHTLIFE_ICON_DISABLED} as="image" />
      <link rel="preload" href={FIRST_ORDER_PIZZA} as="image" />
      <link rel="preload" href={FIRST_ORDER_BURGER} as="image" />
      <link rel="preload" href={FIRST_ORDER_ROLLS} as="image" />
      <link rel="preload" href={FIRST_ORDER_CHICKEN} as="image" /> */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className={classes.container}>
          <OgMetaData
              title={`Food Devlivery - ${changeToCamelCase(cityName)}`}
              description={`Best food near ${changeToCamelCase(cityName)}`}
          />
          <BreadCrumbs pathArray={["Home", "India", cityName, area]} />
          <ScrollableTabs
              location={cityName}
              area={area}
              cityId={cityId}
              cuisineId={false}
              data={data?.pages.map((el) => el)}
          />
          {isFetchingNextPage ? (
            <CircularProgress
                style={{ display: "flex", margin: "20px auto" }}
            />
          ) : (
            !hasNextPage && !isLoading && <EndOfSearchResults />
          )}
          {isLoading && <CardSkeleton arrayLength={12} />}
        </div>
      </ErrorBoundary>
    </App>
  );
};

export default Locations;
