import React, { useContext, useEffect, useState }  from 'react'
import { ProductDetail } from '../ProductDetail';
import './PageShop.css'
import { Link } from 'react-router-dom';
import {FaAngleDoubleRight, FaSearch} from 'react-icons/fa'
import ReactPaginate from 'react-paginate';
import { Product } from '../../../model/Product';
import { productController } from '../../../controller/ProductController';
import { cartController } from '../../../controller/CartController';
import { orderProduct } from '../../../model/orderProduct';
import { userController } from '../../../controller/UserController';
import { UserContext } from '../../../component/contexts/UserContext';
import { CartContext } from '../../../component/contexts/CartContext';
interface State {
    search: string,
    field: string,
    list: Product[],
    countPage: number,
    perPage: number,
    page: number,
    sort: string,
    desc: string
}

export default function PageShop() {
    const cartContext = useContext(CartContext)
    const userContext = useContext(UserContext)
    
    //state
    const [state, setState] = useState<State>({
        search: '',
        field: '',
        list: [],
        countPage: 1,
        perPage: 0,
        page: 1,
        sort: '',
        desc: ''
    })

    const onAddDatabase = (order: orderProduct) => {      
        cartContext.changeQuantity(cartContext.quantity+1)
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
    
    useEffect(() => {
        userContext.getInfoUser()
        cartContext.getInfoCart()
    },[])
    
    //get list
    useEffect(() => {
        productController.pagination({search:state.search,field:state.field,sort: state.sort,page:state.page,size:8}).then( res => {
            setState({...state, list: res.list, countPage: Math.ceil(res.pageCount)})
        })
    },[state.page,state.search,state.field,state.sort])
    
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
                            <input onChange={(e) => setState({...state,search: (e.target.value)})} className='input' type="text" placeholder='Search...'/>
                        </div>

                        <div className="catalo-port">
                            <ul>
                                <li onClick={(e) => setState({...state,field:'price',sort:'asc'})} ><i><FaAngleDoubleRight/></i>Sort Up Ascending</li>
                                <li onClick={(e) => setState({...state,field:'price',sort:'desc'})}><i><FaAngleDoubleRight/></i>Sort Descending</li>
                                <li onClick={(e) => setState({...state,field:'nameProduct',sort:'asc'})}><i><FaAngleDoubleRight/></i>Sort Name A - Z</li>
                                <li onClick={(e) => setState({...state,field:'nameProduct',sort:'desc'})}><i><FaAngleDoubleRight/></i>Sort Name Z - A</li>
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