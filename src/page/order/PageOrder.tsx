import React, { useEffect, useState } from 'react'
import './PageOrder.css'
import {FaCartPlus, FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { orderController } from '../../controller/OrderController';
import { buyUser } from '../../model/BuyUser';
import moment from 'moment';
import { dataCartOrder } from '../../model/DataCartOrder';
interface State {
    idUser: string,
    totalPrice: number,
    dataUser: buyUser[],
    dataCartOrder: dataCartOrder[]
}

export default function PageOrder() {
    const [state, setState] = useState<State>({
        idUser: '1',
        totalPrice: 0,
        dataUser: [],
        dataCartOrder: []
    })
    
    const getItemOrder = () => {
        orderController.getOrder('1').then(res => {
            setState({...state,dataCartOrder: res.dataCart, dataUser: res.dataUser})
        })
    }
    
    useEffect(() => {
        getItemOrder()
    },[])
    
    const displayItem = state.dataUser.map((item) => {
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
                            <div><p>{} | <span>Pending</span></p></div>
                            <div><p>{item.nameUser}, {item.phone}, {item.email}, {item.address}</p></div>
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {state.dataCartOrder.map((item) => {
                        return (
                            <>
                                <tr >
                                    <td>
                                        <div className='img-order'>
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div>
                                            <div><p>{item.nameProduct}</p></div>
                                            <div><p className='desc'>Description</p></div>
                                            <div><p className='quantity'>x {item.quantity}</p></div>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td className='total-order'><p>{item.price} $</p></td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th className='order-total'>
                            <td><p>Estimated cost: <span>{} $</span></p></td>
                            <td><p>Shipping fee: <span>5 $</span></p></td>
                        </th>
                        <th></th>
                        <th className='order-total-2'>
                            <td><p >Total: <span>{ +5} $</span></p></td>
                        </th>
                    </tr>
                </tfoot>
            </table>
        )
    })

    return (
        <>
            {state.dataCartOrder.length > 0 ? 
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
