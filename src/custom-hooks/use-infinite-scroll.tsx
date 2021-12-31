import { CARDS_TO_BE_SHOWN, getRestaurants } from "@src/constants";
import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";

const getPaginatedRestaurants = async (
  cityId: string,
  secondParam: string,
  resultStart: number
) => {
  const result = await getRestaurants(
    cityId,
    undefined,
    secondParam as string,
    resultStart,
    100 - resultStart < CARDS_TO_BE_SHOWN
      ? 100 - resultStart
      : CARDS_TO_BE_SHOWN
  );
  return result.data;
};

interface IInfiniteScrollProps {
  cityId: string;
  secondParam: string;
  queryKey: string;
}

const useInfiniteScroll = ({
  cityId,
  secondParam,
  queryKey
}: IInfiniteScrollProps) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isFetched,
    isLoading
  } = useInfiniteQuery(
    queryKey,
    ({ pageParam = 0 }) =>
      getPaginatedRestaurants(cityId, secondParam, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const totalPages =
          lastPage.results_found > 100 ? 100 : lastPage.results_found;
        const maxPages = totalPages / CARDS_TO_BE_SHOWN + 1;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPages
          ? lastPage.results_shown + lastPage.results_start
          : undefined;
      }
    }
  );

  useEffect(() => {
    let fetching = false;
    const onScroll = async (event: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;
      if (
        !fetching &&
        scrollHeight - scrollTop <= clientHeight * 3 &&
        isFetched
      ) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [isFetched]);
  return {
    data,
    error,
    isFetchingNextPage,
    status,
    hasNextPage,
    isLoading
  };
};

export default useInfiniteScroll;
