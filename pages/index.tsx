import OgMetaData from "@src/components/og-meta-combo";
import Footer from "@src/components/footer";
import { connect } from "react-redux";
import { Dispatch, useState } from "react";
import { CombinedReducer } from "redux/reducers/root-reducer";
import { SET_NAME } from "redux/types";
import {
    HOME_PAGE_GO_OUT_FOR_A_MEAL,
    HOME_PAGE_LOGO,
    HOME_PAGE_NIGHT_LIFE,
    HOME_PAGE_ORDER_FOOD_ONLINE,
    HOME_PAGE_TOP_BANNER,
    HOME_PAGE_ZOMATO_PRO
} from "@constants/index";
import HomePageData from "@src/components/home-page";
import { IProps } from "../redux/actions/main";

interface IHomeName {
    name: string;
}

export interface IHomeSetName {
    setInfo: (name: string) => void;
    data: string[];
}

interface IHomeProps extends IHomeName, IHomeSetName {}

const Home = ({ name, setInfo, data }: IHomeProps) => {
    const [newName, setName] = useState("");
    return (
        <>
            <OgMetaData title="Zomato-Clone" description="A one go place to order food online" />
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <p>Enter a Name {name}:</p>
            <input type="text" value={newName} onChange={(e) => setName(e.target.value)} />
            <button type="submit" onClick={() => setInfo(newName)}>
                Submit
            </button>
            <HomePageData data={data} />
            <Footer />
        </>
    );
};

const mapStateToProps = (state: CombinedReducer) => {
    return {
        name: state.first.name
    };
};

// const mapDispatchToProps = {
//     setInfo: (name: string) => setInfoRedux(name)
// };

// OR //

const mapDispatchToProps = (dispatch: Dispatch<IProps>) => {
    return {
        setInfo: (name: string) =>
            dispatch({
                type: SET_NAME,
                payload: name
            })
    };
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
