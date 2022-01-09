import axios from 'axios'
import { Pagination } from '../model/Pagination'
import { Product } from '../model/Product'



class ProductController {

    //delete
    async delete(idProduct: string): Promise<Product[]> {
        return await axios.get(`http://localhost:8000/products/delete/${idProduct}`).then(res => {
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
    async update(product: Product, idProduct: string) {
        return axios.put(`http://localhost:8000/products/update/${idProduct}`,product).then(res => {
            return res.data
        })
    }

    //get detail
    async getDetail(idProduct: string): Promise<Product> {
        return axios.get(`http://localhost:8000/products/detail/${idProduct}`).then(res => {
            return res.data
        })
    }

    //pagination
    async pagination(list:Pagination) {
        return await axios.post('http://localhost:8000/products/list',list).then(res => {      
            let list : Product[] = res.data.dataProduct
            let pageCount: number = res.data.pageCount
            return {list, pageCount}
        })
    }
}

export const productController = new ProductController()
