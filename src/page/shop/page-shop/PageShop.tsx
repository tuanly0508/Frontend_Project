import React, { useEffect, useState }  from 'react'
import { ProductDetail } from '../ProductDetail';
import './PageShop.css'
import { Link } from 'react-router-dom';
import {FaAngleDoubleRight, FaSearch} from 'react-icons/fa'
import ReactPaginate from 'react-paginate';
import { Product } from '../../../model/Product';
import { productController } from '../../../controller/ProductController';
import { Cart, getLocalStorage } from '../../../model/Cart';
import { Pagination } from '../../../model/Pagination';
import { cartController } from '../../../controller/CartController';
import { orderProduct } from '../../../model/orderProduct';

interface State {
    search: string,
    list: Product[],
    countPage: number,
    perPage: number,
    page: number,
    sort: string,
    desc: string
}

export default function PageShop() {
    //state
    const [state, setState] = useState<State>({
        search: '',
        list: [],
        countPage: 1,
        perPage: 0,
        page: 1,
        sort: '',
        desc: '',
    })

    const onAddDatabase = (order: orderProduct) => {      
        cartController.addCart(order) 
    }

    //pagination
    const changePage = ({selected}:any) => { 
        setState({...state, page: selected+1})
    }
    const disPlayProduct = state.list?.map((item,key) => {
        return (
            <ProductDetail product={item} onAddDatabase={onAddDatabase} key={key}/>
        )
    })
    
    //get list
    useEffect(() => {
        list({page:state.page,size:8,search:state.search,sort:state.sort})
    },[state.page,state.search,state.sort])

    const list = (pagination: Pagination) => {
        productController.pagination(pagination).then( res => {
            setState({...state, list: res.list, countPage: Math.ceil(res.pageCount)})
        })
    }
    
    //get value input
    const onChange = (e: any) => {
        let name = e.target.value
        setState({...state,search: name})
    }

    //sort price up
    const sortUp = () => {
        setState({...state,sort: 'sortPriceUp'})
    }

    //sort price down
    const sortDown = () => {
        setState({...state,sort: 'sortPriceDown'})
    }

    //sort name up
    const sortNameUp = () => {
        setState({...state, sort: 'sortNameUp'})
    }

    //sort name down
    const sortNameDown = () => {
        setState({...state,sort: 'sortNameDown'})
    }
    
    return (
        <div className='container-page-shop'>
            <div className='content-bot'>
                <div className='product-catalo'>
                    <div className='catalo'>
                        <div className="catalo-title">
                            <span>SEARCH PRODUCT</span>
                        </div>

                        <div className='inputSearch'>
                            <i className='icon'><FaSearch /></i>
                            <input onChange={onChange} className='input' type="text" placeholder='Search...'/>
                        </div>

                        <div className="catalo-port">
                            <ul>
                                <li onClick={sortUp} ><i><FaAngleDoubleRight/></i>Sort Up Ascending</li>
                                <li onClick={sortDown}><i><FaAngleDoubleRight/></i>Sort Descending</li>
                                <li onClick={sortNameUp}><i><FaAngleDoubleRight/></i>Sort Name A - Z</li>
                                <li onClick={sortNameDown}><i><FaAngleDoubleRight/></i>Sort Name Z - A</li>
                            </ul>
                        </div>

                        <div className="catalo-title-bot">
                            <span>PRODUCT PORTFOLIO</span>
                        </div>
                        <div className="catalo-port">
                            <ul>
                                <li ><i><FaAngleDoubleRight/></i><Link className='link' to="/">Aviator</Link></li>
                                <li ><i><FaAngleDoubleRight/></i><Link className='link' to="/">Baby-G</Link></li>
                                <li ><i><FaAngleDoubleRight/></i><Link className='link' to="/">Edifice</Link></li>
                                <li ><i><FaAngleDoubleRight/></i><Link className='link' to="/">G-Shock</Link></li>
                                <li ><i><FaAngleDoubleRight/></i><Link className='link' to="/">G-Steel</Link></li>
                                <li ><i><FaAngleDoubleRight/></i><Link className='link' to="/">Gravity.M</Link></li>
                                <li ><i><FaAngleDoubleRight/></i><Link className='link' to="/">MudMaster</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

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


    // handle click
    // const handleClick = (product: Product) => {
    //     let index = state.listCart.find(data => data.id === product.idProduct)
    //     let listAdd = state.listCart
    //     if(index) {
    //         let index = state.listCart.findIndex(data => data.id === product.idProduct)
    //         setState({...state,quantity: state.listCart[index].quantity+=1})
    //     }else {
    //         listAdd.push({
    //             id: product.idProduct,
    //             price: product.price,
    //             name: product.nameProduct,
    //             image: product.image,
    //             quantity: 1
    //         })
    //         setState({...state, listCart: listAdd})
    //     }
    //     localStorage.setItem('list-cart',JSON.stringify(listAdd))
    // }