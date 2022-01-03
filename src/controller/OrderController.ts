import axios from 'axios'
import { buyUser } from '../model/BuyUser'
import { dataCartOrder } from '../model/DataCartOrder'
import { orderProduct } from '../model/orderProduct'
import { orderTemp } from '../model/orderTemp'

class OrderController {
    //get item order
    async getOrder(idUser: string) {
        return await axios.get(`http://localhost:8000/orders/${idUser}`).then(res => {
            
            // let dataUser:buyUser = res.data
            // let dataCart:orderProduct[] = res.data.orderProduct
            // let timeAt = res.data.timeAt
            return res.data
        })
    }

    //create 
    async createOrder(orderTemp: orderTemp) {
        return axios.post(`http://localhost:8000/orders/create`,orderTemp).then (res => {
            return res.data
        })
    }

    //update status order
    async updateOrderTempStt(idOrder: string, idUser: string) {
        return axios.put(`http://localhost:8000/orders/update/${idOrder}/${idUser}`).then (res => {
            return res.data
        })
    }
}

export const orderController = new OrderController()