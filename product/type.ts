export interface Product {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    price: number;
}

// export interface Cart {
//     id: string;
//     title: string;
//     image: string;
//     price: number;
// }

 export interface CartItem extends Product {
     quantity: number;
}