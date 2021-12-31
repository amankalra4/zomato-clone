import App from "@src/components/app";
import OgMetaData from "@src/components/og-meta-combo";
import BreadCrumbs from "@src/components/breadcrumbs";
import ScrollableTabs from "@src/components/tabs";
import CircularProgress from "@material-ui/core/CircularProgress";
import useInfiniteScroll from "@src/custom-hooks/use-infinite-scroll";
import { useRouter } from "next/router";
import { changeToCamelCase } from "@src/modules/camel-case";
// import { useQueryClient } from 'react-query';
import EndOfSearchResults from "@src/components/end-of-search";
import CardSkeleton from "@src/components/card-skeletons";

const FirstOrder = () => {
  const { query } = useRouter();
  const cityId: string = query.cityId as string;
  const cityName: string = query.cityName as string;
  const area: string = query.area as string;
  const cuisineId: string = query.cuisineId as string;
  const { data, error, isFetchingNextPage, status, hasNextPage, isLoading } =
    useInfiniteScroll({
      cityId,
      secondParam: cuisineId,
      queryKey: "first-order-restaurants"
    });
  // const queryClient = useQueryClient();
  // queryClient.invalidateQueries("location-specific-restaurants", { exact: true });

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
      <OgMetaData
          title={`Food Devlivery - ${changeToCamelCase(cityName)}`}
          description={`Food for your first order at - ${changeToCamelCase(
          cityName
        )}`}
      />
      <BreadCrumbs pathArray={["Home", "India", cityName, area]} />
      <ScrollableTabs
          location={cityName}
          area={area}
          cityId={cityId}
          cuisineId
          data={data?.pages.map((el) => el)}
      />
      {isFetchingNextPage ? (
        <CircularProgress style={{ display: "flex", margin: "20px auto" }} />
      ) : (
        !hasNextPage && !isLoading && <EndOfSearchResults />
      )}
      {isLoading && <CardSkeleton arrayLength={4} />}
    </App>
  );
};

export default FirstOrder;
