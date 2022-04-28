export interface Kit {
    id?: number;
    code?: string;
    description?: string;
    state?: boolean
    creationDate?: string;
    modificationDate?: string;
    name?: string;
    modificationUser?: string;
    creationUser?: string;
    details?: KitDetail[];
}

export interface KitDetail {
    id?: number;
    amount?: number;
    state?: boolean;
    article?: number;
    articleName?: string;
    kit?: string;
}
