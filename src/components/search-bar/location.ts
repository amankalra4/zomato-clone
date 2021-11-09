export interface RootObject {
    location_suggestions: LocationSuggestion[];
    status: string;
    has_more: number;
    has_total: number;
    user_has_addresses: boolean;
}

export interface LocationSuggestion {
    entity_type?: string;
    entity_id?: number;
    title: string;
    latitude?: number;
    longitude?: number;
    city_id: number;
    city_name?: string;
    country_id?: number;
    country_name?: string;
}
