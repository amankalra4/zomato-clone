// follow bottom to top approach while reading this interface file

export interface HasMenuStatus {
    delivery: number;
    takeaway: number;
}

export interface R {
    res_id: number;
    is_grocery_store: boolean;
    has_menu_status: HasMenuStatus;
}

export interface Location {
    address: string;
    locality: string;
    city: string;
    city_id: number;
    latitude: string;
    longitude: string;
    zipcode: string;
    country_id: number;
    locality_verbose: string;
}

export interface Title {
    text: string;
}

export interface BgColor {
    type: string;
    tint: string;
}

export interface RatingObj {
    title: Title;
    bg_color: BgColor;
}

export interface UserRating {
    aggregate_rating: any;
    rating_text: string;
    rating_color: string;
    rating_obj: RatingObj;
    votes: number;
    custom_rating_text: string;
    custom_rating_text_background: string;
    rating_tool_tip: string;
}

export interface User {
    name: string;
    zomato_handle: string;
    foodie_color: string;
    profile_url: string;
    profile_image: string;
    profile_deeplink: string;
}

export interface Photo2 {
    id: string;
    url: string;
    thumb_url: string;
    user: User;
    res_id: number;
    caption: string;
    timestamp: number;
    friendly_time: string;
    width: number;
    height: number;
}

export interface Photo {
    photo: Photo2;
}

export interface Review {
    review: any[];
}

export interface AllReviews {
    reviews: Review[];
}

export interface Photo4 {
    url: string;
    thumb_url: string;
    order: number;
    md5sum: string;
    id: number;
    photo_id: number;
    uuid: number;
    type: string;
}

export interface Photo3 {
    photo: Photo4;
}

export interface ShareData {
    should_show: number;
}

export interface Event {
    event_id: number;
    friendly_start_date: string;
    friendly_end_date: string;
    friendly_timing_str: string;
    start_date: string;
    end_date: string;
    end_time: string;
    start_time: string;
    is_active: number;
    date_added: string;
    photos: Photo3[];
    restaurants: any[];
    is_valid: number;
    share_url: string;
    show_share_url: number;
    title: string;
    description: string;
    display_time: string;
    display_date: string;
    is_end_time_set: number;
    disclaimer: string;
    event_category: number;
    event_category_name: string;
    book_link: string;
    types: any[];
    share_data: ShareData;
}

export interface ZomatoEvent {
    event: Event;
}

export interface Restaurant2 {
    R: R;
    apikey: string;
    operational_status: string;
    id: string;
    name: string;
    url: string;
    location: Location;
    switch_to_order_menu: number;
    cuisines: string;
    timings: string;
    average_cost_for_two: number;
    price_range: number;
    currency: string;
    highlights: string[];
    offers: any[];
    opentable_support: number;
    is_zomato_book_res: number;
    mezzo_provider: string;
    is_book_form_web_view: number;
    book_form_web_view_url: string;
    book_again_url: string;
    thumb: string;
    user_rating: UserRating;
    all_reviews_count: number;
    photos_url: string;
    photo_count: number;
    photos: Photo[];
    menu_url: string;
    featured_image: string;
    medio_provider: any;
    has_online_delivery: number;
    is_delivering_now: number;
    store_type: string;
    include_bogo_offers: boolean;
    deeplink: string;
    is_table_reservation_supported: number;
    has_table_booking: number;
    events_url: string;
    phone_numbers: string;
    all_reviews: AllReviews;
    establishment: string[];
    establishment_types: any[];
    zomato_events: ZomatoEvent[];
    book_url: string;
}

export interface Restaurant {
    restaurant: Restaurant2;
}

export interface RootObject {
    results_found: number;
    results_start: number;
    results_shown: number;
    restaurants: Restaurant[];
}


