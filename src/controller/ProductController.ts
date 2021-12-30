import axios from 'axios'
import { Pagination } from '../model/Pagination'
import { Product } from '../model/Product'
import {ListOrder} from '../model/ListOrder'

class ProductController {

    //delete
    async delete(idProduct: string): Promise<Product[]> {
        return await axios.get(`http://localhost:8000/products/delete/${idProduct}`).then(res => {
            console.log(res.data.listProduct);
            
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
        return axios.post('http://localhost:8000/products/create',product).then(res => {
            return res.data
        })
    }

    //update product
    async update(product: Product, idProduct: string): Promise<Product[]> {
        console.log(product);
        return axios.put(`http://localhost:8000/products/update/${idProduct}`,product).then(res => {
            return res.data
        })
    }

    //get detail
    async getDetail(idProduct: string): Promise<Product> {
        return axios.get(`http://localhost:8000/products/detail/${idProduct}`).then(res => {
            console.log(res.data);
            
            return res.data
        })
    }

    //pagination
    async pagination(list:Pagination) {
        return await axios.post('http://localhost:8000/products/pagination',list).then(res => {      
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
