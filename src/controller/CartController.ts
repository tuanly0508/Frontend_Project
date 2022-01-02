import axios from 'axios'
import { Pagination } from '../model/Pagination'
import { Cart } from '../model/Cart'
import { orderProduct } from '../model/orderProduct'
import { dataCart } from '../page/cart/page-cart/PageCart'

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
            let dataCart: dataCart[] = res.data.dataCart
            let totalPrice: number = res.data.totalPrice
            return {dataCart,totalPrice}
        })
    }

    //update item cart
    async updateCart(idOrder: string,idUser: string,quantity:number) {
        return axios.put(`http://localhost:8000/carts/update/${idOrder}/${idUser}/${quantity}`).then(res => {
            let dataCart: dataCart[] = res.data.dataCart
            let totalPrice: number = res.data.totalPrice
            return {dataCart,totalPrice}
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

