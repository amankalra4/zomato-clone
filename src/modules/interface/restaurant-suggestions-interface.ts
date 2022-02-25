export interface IRestaurantSuggestionsRoot {
    results: IRestaurantSuggestionResult[];
}

export interface IRestaurantSuggestionResult {
    entityType: string;
    entityId: string;
    name: string;
    info: Info;
    order: Order;
    table: Table;
    actionInfo: ActionInfo3;
    isPromoted: boolean;
    distance: string;
    showRatingAsNew: number;
}

export interface ActionInfo3 {
    text: string;
    clickUrl: string;
}

export interface Table {
    isBookingActive: boolean;
    isBookingAvailable: boolean;
    actionInfo: ActionInfo2;
}

export interface ActionInfo2 {
    text: string;
    clickUrl: string;
}

export interface Order {
    deliveryTime: string;
    isServiceable: boolean;
    hasOnlineOrdering: boolean;
    promoOffers: string;
    actionInfo: ActionInfo;
    isDeliveringNow: boolean;
}

export interface ActionInfo {
    text: string;
    clickUrl: string;
}

export interface Info {
    resId: number;
    name: string;
    image: Image;
    o2FeaturedImage: O2FeaturedImage;
    rating: Rating;
    ratingNew: RatingNew;
    cft: Cft;
    cfo: Cfo;
    locality: Locality;
    timing: Timing;
    cuisine: Cuisine[];
    should_ban_ugc: boolean;
    isDisabled: boolean;
}

export interface Cuisine {
    deeplink: string;
    url: string;
    name: string;
}

export interface Timing {
    showTiming: boolean;
    text: string;
}

export interface Locality {
    name: string;
    address: string;
    localityUrl: string;
}

export interface Cfo {
    text: string;
}

export interface Cft {
    text: string;
}

export interface RatingNew {
    newlyOpenedObj?: any;
    suspiciousReviewObj?: any;
    ratings: Ratings;
}

export interface Ratings {
    DINING: DINING;
    DELIVERY: DELIVERY;
}

export interface DELIVERY {
    rating_type: string;
    rating: string;
    reviewCount: string;
    reviewTextSmall: string;
    subtext: string;
    color: string;
    ratingV2: string;
    subtitle: string;
    sideSubTitle: string;
    bgColorV2: BgColorV22;
    newOnDelivery: boolean;
}

export interface BgColorV22 {
    type: string;
    tint: string;
}

export interface DINING {
    rating_type: string;
    rating: string;
    reviewCount: string;
    reviewTextSmall: string;
    subtext: string;
    color: string;
    ratingV2: string;
    subtitle: string;
    sideSubTitle: string;
    bgColorV2: BgColorV2;
}

export interface BgColorV2 {
    type: string;
    tint: string;
}

export interface Rating {
    text: string;
    color: string;
}

export interface O2FeaturedImage {
    url: string;
}

export interface Image {
    url: string;
}
