import {Product} from "./products";

export interface providers{
    id: number;
    name: string;
    country: string;
    products: Product[];
}