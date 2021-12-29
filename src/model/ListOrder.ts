import { Cart } from "./Cart";

export interface ListOrder{
    idUser: string,
    idOrder: string,
    nameCus: string,
    mobile: string,
    email:  string,
    address: string,
    timeAt: string
    product: Cart[]
}