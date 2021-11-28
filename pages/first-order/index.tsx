/* eslint-disable no-nested-ternary */
import { NextPageContext } from 'next';
import { CARDS_TO_BE_SHOWN, getRestaurants } from "@src/constants";
import React, { useEffect } from 'react';
import App from '@src/components/app';
import OgMetaCombo from '@src/components/og-meta-combo';
import BreadCrumbs from '@src/components/breadcrumbs';
import ScrollableTabs from '@src/components/tabs';
import { useInfiniteQuery } from 'react-query';
import CircularProgress from '@material-ui/core/CircularProgress';

interface ILocationData {
    cityName: string;
    area: string;
    cityId: string;
    cuisineId: string;
}

const getPaginatedRestaurants = async (cityId1: string, cuisineId1: string, resultStart: number) => {
    // eslint-disable-next-line max-len
    const result = await getRestaurants(cityId1, undefined, cuisineId1 as string, resultStart, 100 - resultStart < CARDS_TO_BE_SHOWN ? 100 - resultStart : CARDS_TO_BE_SHOWN);
    return result.data;
};

const FirstOrder = ({ cityName, area, cityId, cuisineId }: ILocationData) => {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
        isFetched
    } = useInfiniteQuery(
        'projects',
        ({ pageParam = 0 }) => getPaginatedRestaurants(cityId, cuisineId, pageParam),
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
        let fetching = false;
        const onScroll = async (event: any) => {
            const { scrollHeight, scrollTop, clientHeight } =
                event.target.scrollingElement;
            if (!fetching && (scrollHeight - scrollTop <= clientHeight * 3) && isFetched) {
                fetching = true;
                // console.log("hasNextPage", hasNextPage);
                if (hasNextPage) await fetchNextPage();
                fetching = false;
            }
        };

        document.addEventListener("scroll", onScroll);
        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [isFetched]);

    if (status === 'error') {
        return <p>
            Error:
            {error}
        </p>;
    }

    return (
        <App>
            <OgMetaCombo title="Zomato" description="Zomato Delivery" />
            <BreadCrumbs pathArray={["Home", "India", cityName, area]} />
            <ScrollableTabs
                location={cityName}
                area={area}
                cityId={cityId}
                cuisineId
                data={data?.pages.map((el) => el)}
            />
            {isFetchingNextPage
                ? <CircularProgress />
                : hasNextPage ? 'Load More' : 'Nothing more to load'}
        </App>
    );
};

FirstOrder.getInitialProps = async (req: NextPageContext) => {
    const { cityName, cuisineId, cityId, area } = req.query;
    return {
        cityName,
        area,
        cityId,
        cuisineId
    };
};

export default FirstOrder;
