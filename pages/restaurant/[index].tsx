import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getRestaurantDetails } from "@src/constants";
import { Restaurant2 } from "@src/modules/interface/restuarant";
import OgMetaData from "@src/components/og-meta-combo";
import App from "@src/components/app";
import BreadCrumbs from "@src/components/breadcrumbs";
import RestaurantData from "@src/components/restaurant-data";
import Container from "@src/components/container";

interface IRestaurantInfoProps {
    restaurantInfo: Restaurant2;
}
const RestaurantInfo = ({ restaurantInfo }: IRestaurantInfoProps) => {
  return (
    <App>
        <OgMetaData
            description={`${restaurantInfo.name} restaurant in ${restaurantInfo.location.city}`}
            title={`${restaurantInfo.name} - ${restaurantInfo.location.city}`}
        />
        <Container>
          <BreadCrumbs pathArray={["Home", "India", restaurantInfo.location.city, restaurantInfo.name]} />
          <RestaurantData restaurantInfo={restaurantInfo} />
        </Container>
    </App>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
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
