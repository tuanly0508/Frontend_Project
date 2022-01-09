import axios from 'axios'
import { orderTemp, OrderWithUser } from '../model/orderTemp'
import { Pagination } from '../model/Pagination'
import { AuthAxios } from './AuthAxios'

class OrderController {
    //get item order
    async getOrder(idUser: string, pagination: Pagination) {
        return await AuthAxios.post(`http://localhost:8000/orders/${idUser}`,pagination).then(res => {
            let list : OrderWithUser[] = res.data.list
            let pageCount: number = res.data.pageCount
            return {list,pageCount}
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