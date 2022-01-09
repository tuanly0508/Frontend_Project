import axios from 'axios'
import { orderProduct } from '../model/orderProduct'
import { dataCart } from '../page/cart/page-cart/PageCart'
import { AuthAxios } from './AuthAxios'

class CartController {

    //delete item cart
    async deleteCart(idProduct: string,idUser: string) {
        return await axios.get(`http://localhost:8000/carts/delete/${idProduct}/${idUser}`).then(res => {      
            return res.data
        })
    }

    //get item cart
    async getItemCart(idUser: string) {
        return AuthAxios.get(`http://localhost:8000/carts/${idUser}`).then(res => {
            let dataCart: dataCart[] = res.data.dataCart
            let totalPrice: number = res.data.totalPrice
            return {dataCart,totalPrice}
        })
    }

    //update item cart
    async updateCart(idOrder: string,idUser: string,quantity:number) {
        return AuthAxios.put(`http://localhost:8000/carts/update/${idOrder}/${idUser}/${quantity}`).then(res => {
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

