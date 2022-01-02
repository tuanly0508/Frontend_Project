import axios from 'axios'
import { Pagination } from '../model/Pagination'
import { Cart } from '../model/Cart'
import { orderProduct } from '../model/orderProduct'

class CartController {

    //delete item cart
    async deleteCart(idOrder: string,idUser: string) {
        return await axios.get(`http://localhost:8000/carts/delete/${idOrder}/${idUser}`).then(res => {      
            return res.data
        })
    }

    //get item cart
    async getItemCart(idUser: string) {
        return await axios.get(`http://localhost:8000/carts/${idUser}`).then(res => {
            return res.data
        })
    }

    //update item cart
    async updateCart(idOrder: string,idUser: string,quantity:number) {
        return axios.put(`http://localhost:8000/carts/update/${idOrder}/${idUser}/${quantity}`).then(res => {
            return res.data
        })
    }

     //add order to cart
     async addCart(orderProduct: orderProduct) {
        return axios.post('http://localhost:8000/carts/create',orderProduct).then(res => {
            return res.data
        })
    }
}

export const cartController = new CartController()

