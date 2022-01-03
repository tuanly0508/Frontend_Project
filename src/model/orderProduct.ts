import { Product } from "./Product";

export interface orderProduct{
    idOrder: string
    idProduct: string
    quantity: number
    price: number
    product?: Product
}