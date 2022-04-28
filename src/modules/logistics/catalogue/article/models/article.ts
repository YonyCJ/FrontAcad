import {ArticleType} from "@modules/logistics/catalogue/article-type/models/article-type";
import {Category} from "@modules/logistics/catalogue/category/models/category";
import {MeasureUnit} from "@modules/logistics/catalogue/measure-unit/models/measure-unit";
import {Kit} from "@modules/logistics/catalogue/kit/models/kit";

export interface Article {
    articleType?: ArticleType;
    category?: Category;
    code?: string;
    creationDate?: string;
    creationUser?: string;
    description?: string;
    id?: number;
    kit?: Kit;
    kitState?: boolean;
    measureUnit?: MeasureUnit;
    modificationDate?: string;
    modificationUser?: string;
    name?: string;
    serie?: boolean;
    state?: boolean;
}

export interface ArticleAutocomplete {
    id: number;
    name: string;
}
