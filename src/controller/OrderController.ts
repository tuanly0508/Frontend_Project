import axios from 'axios'
import { Pagination } from '../model/Pagination'
import { Cart } from '../model/Cart'
import { orderProduct } from '../model/orderProduct'

class OrderController {
    //get item order
    async getItemOrder(idUser: string) {
        return await axios.get(`http://localhost:8000/orders/${idUser}`).then(res => {
            return res.data
        })
    }

    //update status order
    async updateStatusOrder(idOrder: string, idUser: string) {
        return axios.put(`http://localhost:8000/carts/order/update/${idOrder}/${idUser}`).then (res => {
            return res.data
        })
    }
}

export const orderController = new OrderController()