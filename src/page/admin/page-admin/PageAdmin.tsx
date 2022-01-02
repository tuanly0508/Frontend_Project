import React, { useEffect, useState }  from 'react'
import './PageAdmin.css'
import { Product } from '../../../model/Product';
import {Form} from '../Form';
import { v4 as uuid } from 'uuid';
import { ProductDetail } from '../list-product/ProductDetail';
import ReactPaginate from 'react-paginate';
import { productController } from '../../../controller/ProductController';
import { Pagination } from '../../../model/Pagination';
import { FaPlusCircle } from 'react-icons/fa';

interface State {
    newData: Product,
    nameButton: string,
    dataProduct: Product[],
    page: number,
    countPage: number,
    search: string,
    sort: string,
    dataProductDetail: Product,
    openModal: Boolean
}



export function PageAdmin() {
    //state
    const [state, setState] = useState<State>({
        newData: {idProduct:"",price: 0,nameProduct:"",image:""},
        nameButton: '',
        dataProduct: [],
        page: 1,
        countPage: 1,
        search: '',
        sort: '',
        dataProductDetail: {idProduct:"",price: 0,nameProduct:"",image:""},
        openModal: false
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
        list({page:state.page,size:4,search:state.search,sort:state.sort})
    },[state.page,state.search,state.sort])

    //delete
    const onDelete = (idProduct: string) => { 
        productController.delete(idProduct).then(res => {
            setState({...state,dataProduct: res})
        }) 
    } 
    
    //add and update
    const onAdd = (dataAdd: Product) => {   
        if (dataAdd.idProduct === '') {           
            dataAdd.idProduct = uuid()
            productController.add(dataAdd).then(res => {
                setState({...state,dataProduct: res})
            })
        }else {
            productController.update(dataAdd,dataAdd.idProduct).then(res => {     
                setState({...state, dataProduct: res})
            })
        }
    }

    //close modal
    const closeModal = (close:Boolean) => {
        setState({...state, openModal: close})
    } 
    
    //data edit, open modal
    const onEdit = (data: Product,open:Boolean) => {
        setState({...state, dataProductDetail: data,openModal: open})
    }
    
    //render item product
    const disPlayProduct = state.dataProduct.map((item,key) => {
        return (
            <ProductDetail  product={item} key={key} onEdit={onEdit} onDelete={onDelete}/>
        )
    })
    
    return (
        <div className='container-admin'>
            <div className='title'><p>PRODUCTS MANAGEMENT</p> <button onClick={() => {setState({...state,openModal: true})}} ><FaPlusCircle/></button></div>
            {state.openModal && <Form key={uuid()} closeModal={closeModal} onUpdate={state.dataProductDetail} onAdd={onAdd} onName={state.nameButton} />}
            <div className='content'>
            
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
