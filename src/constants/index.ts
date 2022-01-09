/* eslint-disable max-len */
import { commonHeader } from "./api-call";

const endPoint = "https://b.zmtcdn.com";

export const INIDAN_THUMBNAIL = `${endPoint}/images/countries/flags/country_1.png`;

export const END_OF_SEARCH_RESULTS = `${endPoint}/web/assets/search/6d548ba48f0e4e4b46c19ad4b15a3f011615379209.jpeg`;

export const HOME_PAGE_FOOD_ICON = `${endPoint}/images/online_ordering/delivery.svg`;

export const HOME_PAGE_MENU_ICON = `${endPoint}/images/online_ordering/menu.svg`;

/* ******************************************************************************************* */

export const webAssets = `${endPoint}/web_assets`;

export const footerImage = `${webAssets}/b40b97e677bc7b2ca77c58c61db266fe1603954218.png`;

export const HOME_PAGE_LOGO = `${webAssets}/8313a97515fcb0447d2d77c276532a511583262271.png`;

export const HOME_PAGE_TOP_BANNER = `${webAssets}/81f3ff974d82520780078ba1cfbd453a1583259680.png?fit=around|1000:400&crop=1000:400;*,*`;

/* ******************************************************************************************* */

const assetsEndPoint = `${endPoint}/data/o2_assets`;

export const DELIVERY_ICON_ENABLED = `${assetsEndPoint}/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp`;

export const DELIVERY_ICON_DISABLED = `${assetsEndPoint}/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp`;

export const DINEOUT_ICON_ENABLED = `${assetsEndPoint}/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp`;

export const DINEOUT_ICON_DISABLED = `${assetsEndPoint}/78d25215ff4c1299578ed36eefd5f39d1616149985.png`;

export const NIGHTLIFE_ICON_ENABLED = `${assetsEndPoint}/855687dc64a5e06d737dae45b7f6a13b1616149818.png`;

export const NIGHTLIFE_ICON_DISABLED = `${assetsEndPoint}/01040767e4943c398e38e3592bb1ba8a1616150142.png`;

export const FIRST_ORDER_PIZZA = `${assetsEndPoint}/d0bd7c9405ac87f6aa65e31fe55800941632716575.png`;

/* ******************************************************************************************* */

const dishEndPoint = `${endPoint}/data/dish_images`;

export const FIRST_ORDER_ROLLS = `${dishEndPoint}/c2f22c42f7ba90d81440a88449f4e5891634806087.png`;

export const FIRST_ORDER_CHICKEN = `${dishEndPoint}/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png`;

export const FIRST_ORDER_BURGER = `${dishEndPoint}/ccb7dc2ba2b054419f805da7f05704471634886169.png`;

/* ******************************************************************************************* */

export const webFrontend = `${endPoint}/webFrontend`;

export const HOME_PAGE_ORDER_FOOD_ONLINE = `${webFrontend}/64dffaa58ffa55a377cdf42b6a690e721585809275.png`;

export const HOME_PAGE_GO_OUT_FOR_A_MEAL = `${webFrontend}/95f005332f5b9e71b9406828b63335331585809309.png`;

export const HOME_PAGE_ZOMATO_PRO = `${webFrontend}/b256d0dd8a29f9e0623ecaaea910534d1585809352.png`;

export const HOME_PAGE_NIGHT_LIFE = `${webFrontend}/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png`;

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

export const GET_LOCATIONS = "locations?query=%s&count=10";

export const getCities = (cityName: string) => {
  const cityURL = `cities?q=${cityName}`;
  return commonHeader(cityURL)
    .then((res) => res.data)
    .catch((err) => err);
};

export const getRestaurants = (
  entityId: string,
  cityName?: string | undefined,
  cuisineId?: string,
  start = 0,
  count = CARDS_TO_BE_SHOWN
) => {
  const commonURL = `search?entity_id=${entityId}&entity_type=city&start=${start}&count=${count}`;
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
  const restaurantURL = `restaurant?res_id=${resId}`;
  return commonHeader(restaurantURL).then((res) => res.data).catch((err) => err?.response?.status);
};

export const getCollections = (cityId: string, count = 4) => {
  const collectionsURL = `collections?city_id=${cityId}&count=${count}`;
  return commonHeader(collectionsURL).then((res) => res.data).catch((err) => err?.response?.status);
};
