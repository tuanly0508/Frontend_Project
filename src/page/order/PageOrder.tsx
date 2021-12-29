import React, { useEffect, useState } from 'react'
import './PageOrder.css'
import {FaCartPlus, FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ListOrder } from '../../model/ListOrder';
import { productController } from '../../controller/ProductController';
import { Cart } from '../../model/Cart';

interface State {
    dataOrder: ListOrder[],
    idUser: string,
    product: Cart[],
    totalPrice: number
}

export default function PageOrder() {
    const [state, setState] = useState<State>({
        dataOrder: [],
        idUser: '1',
        product: [],
        totalPrice: 0
    })

    useEffect(() => {
        productController.getListOrder(state.idUser).then(res => {
            setState({...state, dataOrder: res})
        })
    },[])
    
    const displayItem = state.dataOrder.map((item) => {
        let i = 0 
        return (
            <table className='table-body'>
                <thead>
                    <tr className='title-header'>
                        <th className='left'>
                            <i><FaShoppingCart/></i>
                            <p>To Clothing</p>
                            <Link to='/shop'>
                                <button className='btn-order'>View shop</button>
                            </Link>
                        </th>
                        <th className='right'>
                            <div><p>{item.timeAt} | <span>Pending</span></p></div>
                            <div><p>{item.nameCus}, {item.mobile}, {item.email}, {item.address}</p></div>
                        </th>
                    </tr>
                </thead>
                
                {item.product.map((item2) => {
                    i += item2.quantity * item2.price
                    return (    
                        <tbody >
                            <tr >
                                <td>
                                    <div className='img-order'>
                                        <img src={item2.image} alt="" />
                                    </div>
                                    <div>
                                        <div><p>{item2.name}</p></div>
                                        <div><p className='desc'>Description</p></div>
                                        <div><p className='quantity'>x {item2.quantity}</p></div>
                                    </div>
                                </td>
                                <td></td>
                                <td className='total-order'><p>{item2.price} $</p></td>
                            </tr>
                        </tbody>
                    )
                })}
                <tfoot>
                    <tr>
                        <th className='order-total'>
                            <td><p>Estimated cost: <span>{i} $</span></p></td>
                            <td><p>Shipping fee: <span>5 $</span></p></td>
                        </th>
                        <th></th>
                        <th className='order-total-2'>
                            <td><p >Total: <span>{i +5} $</span></p></td>
                        </th>
                    </tr>
                </tfoot>
            </table>
        )
    })

    return (
        <>
            {state.dataOrder.length > 0 ? 
                <div className='container-order'>
                    <div className='content'>
                        <div className='content-order-top' >
                            <h2>ORDER LIST</h2>
                        </div>
                        <div className='content-body'>
                            {displayItem}
                        </div>
                    </div>
                </div>
            : 
                <div className='cart-empty'>
                    <div className='icon-empty'>
                        <i><FaCartPlus/></i>
                    </div>
                    <div className='title-empty-order'>
                        <p>ORDER EMPTY VIEW SHOP NOW</p>
                        <Link to='/shop'>
                            <button>View Shop</button>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}
