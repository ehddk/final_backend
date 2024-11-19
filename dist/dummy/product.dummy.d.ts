export declare const CATEGORIES: string[];
export declare const DELIVERY_TYPES: string[];
export declare const PACKAGE_TYPES: string[];
export declare const generateProducts: (count: number) => {
    productName: string;
    price: number;
    sales: number;
    rdate: Date;
    thumbnail: string;
    img: string;
    delivery: string;
    seller: string;
    description: string;
    packageType: string;
    category: string;
}[];
