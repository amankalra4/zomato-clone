/* eslint-disable max-len */
import { LocationsRoot } from "@modules/interface/location-interface";
import { RestaurantRootInterface } from "@modules/interface/restuarant";
import { AxiosResponse } from "axios";
import { commonHeader } from "./api-call";

const endPoint = "https://b.zmtcdn.com";

const cmsEndPoint = "https://images.prismic.io/zomato-clone";

export const INIDAN_THUMBNAIL = `${endPoint}/images/countries/flags/country_1.png`;

export const END_OF_SEARCH_RESULTS = `${endPoint}/web/assets/search/6d548ba48f0e4e4b46c19ad4b15a3f011615379209.jpeg`;

export const HOME_PAGE_FOOD_ICON = `${endPoint}/images/online_ordering/delivery.svg`;

export const HOME_PAGE_MENU_ICON = `${endPoint}/images/online_ordering/menu.svg`;

export const ERROR_404_IMAGE = `${endPoint}/404_web787058f236e16cef33bf733ade2e08ba1574663725.png?output-format=webp`;

export const ERROR_500_IMAGE = `${endPoint}/images/z404x2.png?output-format=webp`;

/* ******************************************************************************************* */

export const webAssets = `${endPoint}/web_assets`;

export const footerImage = `${webAssets}/b40b97e677bc7b2ca77c58c61db266fe1603954218.png`;

export const HOME_PAGE_LOGO = `${cmsEndPoint}/13ca225c-dcaf-4f13-af61-c053796e599a_zomato-logo.avif?auto=compress,format`;

export const HOME_PAGE_TOP_BANNER = `${cmsEndPoint}/bcfad4e9-eb46-4f09-8c16-954954cb56f4_zomato-top-banner.webp?auto=compress,format`;

/* ******************************************************************************************* */

const assetsEndPoint = `${endPoint}/data/o2_assets`;

export const DELIVERY_ICON_ENABLED = `${cmsEndPoint}/3bfc3197-3c0f-49fa-82ba-344f70a8e06b_zomato-delivery.avif?auto=compress,format`;

export const DELIVERY_ICON_DISABLED = `${assetsEndPoint}/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp`;

export const DINEOUT_ICON_ENABLED = `${assetsEndPoint}/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp`;

export const DINEOUT_ICON_DISABLED = `${cmsEndPoint}/b9fe1bd6-3d93-4100-8132-7513bfee1889_zomato-dine-out-disabled.avif?auto=compress,format`;

export const NIGHTLIFE_ICON_ENABLED = `${assetsEndPoint}/855687dc64a5e06d737dae45b7f6a13b1616149818.png`;

export const NIGHTLIFE_ICON_DISABLED = `${cmsEndPoint}/219619bb-4a94-4e2d-89dd-7f6a9456b58e_zomato-night-life-disabled.webp?auto=compress,format`;

export const FIRST_ORDER_PIZZA = `${cmsEndPoint}/fb9421e0-c9d0-4dfc-9604-e2b961c891ff_zomato-pizza.avif?auto=compress,format`;

/* ******************************************************************************************* */

export const FIRST_ORDER_ROLLS = `${cmsEndPoint}/9ee44d1f-eded-4e08-94ac-8353c24a374a_zomato-rolls.avif?auto=compress,format`;

export const FIRST_ORDER_SANDWICH = `${cmsEndPoint}/0adf3f83-97a7-4a49-ade0-24e31c1cb87f_sandwich.avif?auto=compress,format`;

export const FIRST_ORDER_BURGER = `${cmsEndPoint}/497ba0ea-ab76-4b0f-b591-5a91e9c5ca70_zomato-burger.avif?auto=compress,format`;

/* ******************************************************************************************* */

export const webFrontend = `${endPoint}/webFrontend`;

export const HOME_PAGE_ORDER_FOOD_ONLINE = `${cmsEndPoint}/f5f8fea4-465d-4f3a-a685-d0bc87d7097c_zomato-2.avif?auto=compress,format`;

export const HOME_PAGE_GO_OUT_FOR_A_MEAL = `${cmsEndPoint}/591ca46c-11b3-4a0f-b49a-1f9e4a120b77_zomato-1.avif?auto=compress,format`;

export const HOME_PAGE_ZOMATO_PRO = `${cmsEndPoint}/7cd2e681-b6d8-4f08-b589-021ff37dbd34_zomato-pro.avif?auto=compress,format`;

export const HOME_PAGE_NIGHT_LIFE = `${cmsEndPoint}/1fd0b75b-31db-43ef-a5ee-84392040e27b_zomato-night-life.webp?auto=compress,format`;

/* ******************************************************************************************* */

const collectionEndPoint = `${endPoint}/data/collections`;

export const NIGHTLIFE_IMAGE_1 = `${collectionEndPoint}/420f473015c7d64962b60bb355828192_1613380120.jpg?output-format=webp`;

export const NIGHTLIFE_IMAGE_2 = `${collectionEndPoint}/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg?output-format=webp`;

export const NIGHTLIFE_IMAGE_3 = `${collectionEndPoint}/67c4acc3f607dbcff71a8e1e77a70c8a_1535469199.jpg?output-format=webp`;

export const NIGHTLIFE_IMAGE_4 = `${collectionEndPoint}/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg?output-format=webp`;

/* ******************************************************************************************* */

export const language = [
    "Türkçe",
    "हिंदी",
    "Português (BR)",
    "Indonesian",
    "Português (PT)",
    "Español",
    "Čeština",
    "Slovenčina",
    "Polish",
    "Italian",
    "Vietnamese"
];

export const countries = [
    "Australia",
    "Brazil",
    "Canada",
    "Chile",
    "Czech Republic",
    "Indonesia",
    "Ireland",
    "Italy",
    "Lebanon",
    "Malaysia",
    "New Zealand",
    "Phillippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Singapore",
    "Slovakia",
    "South Africa",
    "Sri Lanka",
    "Turkey",
    "UAE",
    "United Kingdom",
    "USA"
];

export const CARDS_TO_BE_SHOWN = 12;

export const getCities = (cityName: string) => {
    const cityURL = `cities?q=${cityName}`;
    return commonHeader(cityURL)
        .then((res) => res.data)
        .catch((err) => err);
};

export const getRestaurants = (
    entityId: string,
    entityType: string,
    cityName?: string | undefined,
    cuisineId?: string,
    start = 0,
    count = CARDS_TO_BE_SHOWN
) => {
    const commonURL = `/search?entity_id=${entityId}&entity_type=${entityType}&start=${start}&count=${count}`;
    let appendedString = "";
    // if case is for restuarnt search in search bar
    // else case is for searching a particular cuisine in an area.
    if (cityName && entityId) {
        appendedString = `&q=${cityName}`;
    } else {
        appendedString = `&cuisines=${cuisineId}`;
    }
    const finalURL = commonURL + appendedString;
    return commonHeader(finalURL)
        .then((res) => {
            return { status: res.status, data: res.data };
        })
        .catch((err) => {
            return { status: err?.response?.status, data: undefined };
        });
};

export const getRestaurantDetails = (resId: string) => {
    const restaurantURL = `/restaurant?res_id=${resId}`;
    return commonHeader(restaurantURL)
        .then((res) => res.data)
        .catch((err) => err?.response?.status);
};

export const getCollections = (cityId: string, count = 4) => {
    const collectionsURL = `/collections?city_id=${cityId}&count=${count}`;
    return commonHeader(collectionsURL)
        .then((res) => res.data)
        .catch((err) => err?.response?.status);
};

export const getCuisines = (cityId: string) => {
    const collectionsURL = `/cuisines?city_id=${cityId}`;
    return commonHeader(collectionsURL)
        .then((res) => res.data)
        .catch((err) => err?.response?.status);
};

export const getLocationSuggestions = (locationName: string) => {
    const locationURL = `/locations?query=${locationName}&count=10`;
    return commonHeader(locationURL)
        .then((result: AxiosResponse<LocationsRoot>) => {
            if (result.data.location_suggestions.length) {
                return result.data.location_suggestions;
            }
            return [];
        })
        .catch(() => {
            return [];
        });
};

const RESTAURANT_SUGGESTIONS = 5;

export const getRestaurantSuggestions = (entityId: number, searchQuery: string) => {
    const suggestionsURL = `/search?entity_id=${entityId}&entity_type=city&count=${RESTAURANT_SUGGESTIONS}&q=${searchQuery}`;
    return commonHeader(suggestionsURL)
        .then((result: AxiosResponse<RestaurantRootInterface>) => {
            if (result.data.results_found) {
                return result.data.restaurants;
            }
            return [];
        })
        .catch(() => {
            return [];
        });
};
