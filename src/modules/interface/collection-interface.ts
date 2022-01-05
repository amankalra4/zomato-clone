export interface Collection2 {
    collection_id: number;
    res_count: number;
    image_url: string;
    url: string;
    title: string;
    description: string;
    share_url: string;
}

export interface Collection {
    collection: Collection2;
}

export interface ICollectionRoot {
    collections: Collection[];
    has_more: number;
    share_url: string;
    display_text: string;
    has_total: number;
    user_has_addresses: boolean;
}
