export interface CuisineRoot {
    cuisines: CuisineObject[];
}

export interface CuisineObject {
    cuisine: CuisineInfo;
}

export interface CuisineInfo {
    cuisine_id: number;
    cuisine_name: string;
}
