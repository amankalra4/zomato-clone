/* eslint-disable max-len */
import axios from "axios";
import config from "../../next.config";

export const webFrontend = "https://b.zmtcdn.com/webFrontend";

export const webAssets = "https://b.zmtcdn.com/web_assets";

export const INIDAN_THUMBNAIL = "https://b.zmtcdn.com/images/countries/flags/country_1.png";

export const DELIVERY_ICON_ENABLED = "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp";

export const DELIVERY_ICON_DISABLED = "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp";

export const DINEOUT_ICON_ENABLED = "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp";

export const DINEOUT_ICON_DISABLED = "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png";

export const NIGHTLIFE_ICON_ENABLED = "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png";

export const NIGHTLIFE_ICON_DISABLED = "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png";

export const FIRST_ORDER_ROLLS = "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png";

export const FIRST_ORDER_CHICKEN = "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png";

export const FIRST_ORDER_PIZZA = "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png";

export const FIRST_ORDER_BURGER = "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png";

export const language = ["Türkçe", "हिंदी", "Português (BR)", "Indonesian", "Português (PT)", "Español", "Čeština",
    "Slovenčina", "Polish", "Italian", "Vietnamese"];

export const countries = ["Australia", "Brazil", "Canada", "Chile", "Czech Republic", "Indonesia", "Ireland", "Italy", "Lebanon", "Malaysia", "New Zealand", "Phillippines", "Poland", "Portugal", "Qatar", "Singapore", "Slovakia", "South Africa", "Sri Lanka", "Turkey", "UAE", "United Kingdom", "USA"];

export const GET_LOCATIONS = "https://developers.zomato.com/api/v2.1/locations?query=%s&count=10";

export const getCities = (cityName: string) => {
    return axios.get(`https://developers.zomato.com/api/v2.1/cities?q=${cityName}`, {
        headers: {
            "user-key": config.config.zomatoAPI
        }
    }).then((res) => res.data).catch((err) => err);
};

export const CARDS_TO_BE_SHOWN = 9;

export const getRestaurants = (entityId: string, cityName?: string | undefined, cuisineId?: string, start = 0, count = CARDS_TO_BE_SHOWN) => {
    const commonURL = `https://developers.zomato.com/api/v2.1/search?entity_id=${entityId}&entity_type=city`;
    let appendedString = "";
    // if case is for restuarnt search in search bar
    // else case is for searching a particular cuisine in an area.
    if (cityName && entityId) {
        appendedString = `&q=${cityName}`;
    } else {
        appendedString = `&start=${start}&count=${count}&cuisines=${cuisineId}`;
    }
    const finalURL = commonURL + appendedString;
    return axios.get(finalURL, {
        headers: {
            "user-key": config.config.zomatoAPI
        }
    }).then((res) => { return { status: res.status, data: res.data }; }).catch((err) => { return { status: err?.response?.status, data: undefined }; });
};
