import { IProduct } from "../@types/product.type";
export declare class ProductResponseDTO {
    id: string;
    productName: string;
    price: number;
    sales: number;
    rdate: Date;
    thumbnail: File | Blob | null;
    img: File | Blob | null;
    delivery: string;
    seller?: string;
    description: string;
    packageType?: string;
    detail: string;
    category?: string;
    constructor(params: IProduct);
}
