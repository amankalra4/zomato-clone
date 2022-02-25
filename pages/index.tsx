import OgMetaData from "@src/components/og-meta-combo";
import Footer from "@src/components/footer";
import HomePageData from "@src/components/home-page";
import {
    HOME_PAGE_GO_OUT_FOR_A_MEAL,
    HOME_PAGE_LOGO,
    HOME_PAGE_NIGHT_LIFE,
    HOME_PAGE_ORDER_FOOD_ONLINE,
    HOME_PAGE_TOP_BANNER,
    HOME_PAGE_ZOMATO_PRO
} from "@src/constants";

const Home = ({ data }: { data: string[] }) => {
    return (
        <>
            <OgMetaData title="Zomato-Clone" description="A one go place to order food online" />
            <HomePageData data={data} />
            <Footer />
        </>
    );
};

export async function getStaticProps() {
    const frameCount = 5;
    const data = [
        HOME_PAGE_GO_OUT_FOR_A_MEAL,
        HOME_PAGE_LOGO,
        HOME_PAGE_NIGHT_LIFE,
        HOME_PAGE_ORDER_FOOD_ONLINE,
        HOME_PAGE_TOP_BANNER,
        HOME_PAGE_ZOMATO_PRO
    ];
    for (let id = 1; id <= frameCount; id += 1) {
        // add new promise to array
        fetch(data[id]).then((res) => res);
    }

    return {
        props: {
            data: await Promise.all(data) // wait for all images to load
        }
    };
}

export default Home;
