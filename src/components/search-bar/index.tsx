import Divider from "@material-ui/core/Divider";
import LocationAutoComplete from "./location-auto-complete";
import RestaurantAutoComplete from "./restaurant-auto-complete";
import { topContainer, restContainer, mobileContainer } from "./styles";

const Searchbar = () => {
    return (
        <>
            <div className={topContainer}>
                <LocationAutoComplete />
                <div className={restContainer}>
                    <Divider orientation="vertical" style={{ height: "25px", margin: "16px 0 0", border: "1px solid black" }} />
                </div>
                <div className={restContainer} style={{ width: "100%" }}>
                    <RestaurantAutoComplete />
                </div>
            </div>
            <div className={mobileContainer}>
                <RestaurantAutoComplete />
            </div>
        </>
    );
};

export default Searchbar;
