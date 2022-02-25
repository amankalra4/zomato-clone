import { useEffect } from "react";
import { CARDS_TO_BE_SHOWN, getRestaurants } from "@src/constants";
import { useInfiniteQuery, useQueryClient } from "react-query";
import { RestaurantRootInterface } from "@src/modules/interface/restuarant";

const getPaginatedRestaurants = async (
    cityId: string,
    cuisineId: string,
    resultStart: number,
    cityName: string,
    entityType: string
) => {
    const result = await getRestaurants(
        cityId,
        entityType,
        cuisineId ? undefined : cityName,
        cuisineId as string,
        resultStart,
        100 - resultStart < CARDS_TO_BE_SHOWN ? 100 - resultStart : CARDS_TO_BE_SHOWN
    );
    return result.data;
};

interface IInfiniteScrollProps {
    cityId: string;
    cuisineId: string;
    queryKey: string;
    cityName: string;
    entityType: string;
}

const useInfiniteScroll = ({ cityId, cuisineId, queryKey, cityName, entityType }: IInfiniteScrollProps) => {
    const queryClient = useQueryClient();
    const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status, isFetched, isLoading } =
        useInfiniteQuery<RestaurantRootInterface>(
            queryKey,
            ({ pageParam = 0 }) => getPaginatedRestaurants(cityId, cuisineId, pageParam, cityName, entityType),
            {
                getNextPageParam: (lastPage, allPages) => {
                    const totalPages = lastPage.results_found > 100 ? 100 : lastPage.results_found;
                    const maxPages = totalPages / CARDS_TO_BE_SHOWN + 1;
                    const nextPage = allPages.length + 1;
                    return nextPage <= maxPages ? lastPage.results_shown + lastPage.results_start : undefined;
                }
            }
        );

    useEffect(() => {
        queryClient.fetchInfiniteQuery(queryKey);
        queryClient.fetchQuery("get-cuisines");
    }, [cityId]);

    useEffect(() => {
        let fetching = false;
        const onScroll = async (event: any) => {
            const { scrollHeight, scrollTop, clientHeight } = event.target.scrollingElement;
            if (!fetching && scrollHeight - scrollTop <= clientHeight * 3 && isFetched) {
                fetching = true;
                if (hasNextPage) await fetchNextPage();
                fetching = false;
            }
        };

        if (isFetched && data?.pages[0].results_found! > CARDS_TO_BE_SHOWN) {
            document.addEventListener("scroll", onScroll);
        }
        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [isFetched, hasNextPage]);
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
