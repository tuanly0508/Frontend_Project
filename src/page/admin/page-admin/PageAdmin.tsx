import React, { useEffect, useState }  from 'react'
import './PageAdmin.css'
import { Product } from '../../../model/Product';
import {Form} from '../Form';
import { v4 as uuid } from 'uuid';
import { ProductDetail } from '../list-product/ProductDetail';
import ReactPaginate from 'react-paginate';
import { productController } from '../../../controller/ProductController';
import { Pagination } from '../../../model/Pagination';

interface State {
    newData: Product,
    nameButton: string,
    dataProduct: Product[],
    page: number,
    countPage: number,
    search: string,
    sort: string,
    dataProductDetail: Product 
}

export function PageAdmin() {
    //state
    const [state, setState] = useState<State>({
        newData: {id:"",price: 0,name:"",image:""},
        nameButton: '',
        dataProduct: [],
        page: 1,
        countPage: 1,
        search: '',
        sort: '',
        dataProductDetail: {id:"",price: 0,name:"",image:""},
    })

    //pagination
    const changePage = ({selected}:any) => {
        setState({...state,page: selected+1})
    }
    const list = (pagination: Pagination) => {
        productController.pagination(pagination).then( res => {
            setState({...state, dataProduct: res.list, countPage: res.pageCount})
        })
    }

    //get list
    useEffect(() => {
        list({page:state.page,size:8,search:state.search,sort:state.sort})
    },[state.page,state.search,state.sort])

    //delete
    const onDelete = (idProduct: string) => {   
        productController.delete(idProduct).then(res => {
            setState({...state,dataProduct: res})
        }) 
    } 
    
    //add
    const onAdd = (dataAdd: Product) => {   
        if (dataAdd.id === '') {           
            dataAdd.id = uuid()
            productController.add(dataAdd).then(res => {
                setState({...state,dataProduct: res})
            })
        }else {    
            productController.update(dataAdd).then(res => {               
                setState({...state, dataProduct: res})
            })
        }
        
    }
    
    //edit
    const onEdit = (data: Product) => {
        setState({...state, dataProductDetail: data})
    }
    
    //render item product
    const disPlayProduct = state.dataProduct.map((item,key) => {
        return (
            <ProductDetail product={item} key={key} onEdit={onEdit} onDelete={onDelete}/>
        )
    })
    
    return (
        <div className='container-admin'>
            <div className='title'><p>PRODUCTS MANAGEMENT</p></div>
            <div className='content'>
                {/* <Form key={uuid()}  onEdit={state.newData} onAdd={onAdd} onName={state.nameButton} /> */}
                <Form key={uuid()} onUpdate={state.dataProductDetail} onAdd={onAdd} onName={state.nameButton} />

                <div className='list-product'>
                    <div className='list'>
                        <div className='product'>
                            {disPlayProduct}
                        </div>
                    </div>
                </div>
            </div>
            <ReactPaginate 
                previousLabel="Previous"
                nextLabel="Next"
                pageCount= {state.countPage}
                onPageChange = {changePage}
                containerClassName='paginationBtn'
                previousClassName='previousBtn'
                nextLinkClassName='nextBtn'
                disabledClassName='paginationDisable'
                activeClassName='paginationActive'
            />
        </div>
    )
}
