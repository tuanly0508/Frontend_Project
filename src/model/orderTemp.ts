import { orderProduct } from "./orderProduct";
import { User } from "./User";
export interface orderTemp {
    idOrder: string;
    idUser: string
    timeAt: string
    isTemp: Boolean
}

export interface OrderWithDetail extends orderTemp {
    orderProduct: orderProduct[]
}

export interface OrderWithUser extends OrderWithDetail {
    user: User
} 