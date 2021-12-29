import axios from 'axios'
import { Pagination } from '../model/Pagination'
import { Product } from '../model/Product'
import {ListOrder} from '../model/ListOrder'

class ProductController {

    //delete
    async delete(idProduct: string): Promise<Product[]> {
        return axios.get(`http://localhost:8000/delete/${idProduct}`).then(res => {
            return res.data
        })
    }
    //add order
    async addOrder(listOrder: ListOrder): Promise<ListOrder[]> { 
        return axios.post('http://localhost:8000/checkout/delivery',listOrder).then(res => {
            console.log(listOrder);
            
            return res.data
        })
    }
    //add product
    async add(product: Product): Promise<Product[]> {
        return axios.post('http://localhost:8000/add',product).then(resp => {
            return resp.data
        })
    }

    //update product
    async update(product: Product): Promise<Product[]> {
        console.log(product.name);
        return axios.put('http://localhost:8000/update',product).then(res => {
            console.log(res.data);
            
            return res.data
        })
    }

    //get detail
    async getDetail(idProduct: string): Promise<Product> {
        return axios.get(`http://localhost:8000/product/${idProduct}`).then(res => {
            return res.data
        })
    }
    //pagination
    async pagination(list:Pagination) {
        return axios.post('http://localhost:8000/shop',list).then(res => {      
            let list : Product[] = res.data.listProduct 
            let pageCount: number = res.data.pageCount
            return {list, pageCount}
        })
    }

    async getListOrder(idUser: string): Promise<ListOrder[]> {
        return axios.get(`http://localhost:8000/user/orders/${idUser}`).then(res => {           
            return res.data
        })
    }
}

export const productController = new ProductController()
