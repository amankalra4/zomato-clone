import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getRestaurantDetails } from "@constants/index";
import { Restaurant2 } from "@modules/interface/restuarant";
import OgMetaData from "@components/og-meta-combo";
import AppWrapper from "@components/app";
import BreadCrumbs from "@components/breadcrumbs";
import RestaurantData from "@components/restaurant-data";
import Container from "@components/container";

const RestaurantInfo = ({ restaurantInfo }: { restaurantInfo: Restaurant2 }) => {
    return (
        <AppWrapper>
            <OgMetaData
                description={`${restaurantInfo.name} restaurant in ${restaurantInfo.location.city}`}
                title={`${restaurantInfo.name} - ${restaurantInfo.location.city}`}
            />
            <Container>
                <BreadCrumbs
                    pathArray={["Home", restaurantInfo.location.city, restaurantInfo.location.locality, restaurantInfo.name]}
                />
                <RestaurantData restaurantInfo={restaurantInfo} />
            </Container>
        </AppWrapper>
    );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const restaurantId = context.query.id;
    const restaurantData = await getRestaurantDetails(restaurantId as string);
    if (!restaurantData) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            restaurantInfo: restaurantData
        }
    };
};

export default RestaurantInfo;
