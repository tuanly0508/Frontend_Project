import axios from 'axios'
import { User } from '../model/User'

class UserController {

    //update user
    async update(buyUser: User): Promise<User> {
        return axios.put(`http://localhost:8000/users/update`,buyUser).then(res => {
            return res.data
        })
    }

    //get detail user
    async getUserDetail(idUser: string): Promise<User[]> {
        return axios.get(`http://localhost:8000/users/detail/${idUser}`).then(res => {
            return res.data
        })
    }

    // //delete item cart
    // async delete(idOrder: string,idUser: string) {
    //     return await axios.get(`http://localhost:8000/carts/delete/${idOrder}/${idUser}`).then(res => {      
    //         return res.data
    //     })
    // }

    // //get item cart
    // async getItemCart(idUser: string) {
    //     return await axios.get(`http://localhost:8000/carts/${idUser}`).then(res => {
    //         return res.data
    //     })
    // }



    //  //add order to cart
    //  async addOrderCart(order: orderUser) {
    //     return axios.post('http://localhost:8000/carts/create',order).then(res => {
    //         return res.data
    //     })
    // }

    

   

    // //add order
    // async addOrder(listOrder: ListOrder): Promise<ListOrder[]> { 
    //     return axios.post('http://localhost:8000/checkout/delivery',listOrder).then(res => {
    //         return res.data
    //     })
    // }

    





    // async getListOrder(idUser: string): Promise<ListOrder[]> {
    //     return axios.get(`http://localhost:8000/user/orders/${idUser}`).then(res => {           
    //         return res.data
    //     })
    // }
}

export const userController = new UserController()

