import axios from 'axios'
import { orderProduct } from '../model/orderProduct'
import { dataCart } from '../page/cart/page-cart/PageCart'
import { AuthAxios } from './AuthAxios'

class CartController {

    //delete item cart
    async deleteCart(idProduct: string,idUser: string,idOrder:string) {
        return await AuthAxios.get(`http://localhost:8000/carts/delete/${idProduct}/${idUser}/${idOrder}`).then(res => {      
            return res.data
        })
    }

    //get item cart
    async getItemCart() {
        return AuthAxios.get(`http://localhost:8000/carts`).then(res => {
            let dataCart: dataCart[] = res.data.dataCart
            let totalPrice: number = res.data.totalPrice
            return {dataCart,totalPrice}
        })
    }

    //update item cart
    async updateCart(idProduct: string,idUser: string,quantity:number,idOrder:string) {
        return AuthAxios.put(`http://localhost:8000/carts/update/${idProduct}/${idUser}/${quantity}/${idOrder}`).then(res => {
            let dataCart: dataCart[] = res.data.dataCart
            let totalPrice: number = res.data.totalPrice
            return {dataCart,totalPrice}
        })
    }

     //add order to cart
     async addCart(orderProduct: orderProduct) {
        return AuthAxios.post('http://localhost:8000/carts/create',orderProduct).then(res => {
            return res.data
        })
    }
}

export const cartController = new CartController()

