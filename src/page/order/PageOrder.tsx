import React, { useEffect, useState } from 'react'
import './PageOrder.css'
import {FaCartPlus, FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { orderController } from '../../controller/OrderController';
import { OrderWithUser } from '../../model/orderTemp';
import moment from 'moment';
interface State {
    idUser: string,
    totalPrice: number,
    data: OrderWithUser[]
}

export default function PageOrder() {
    const [state, setState] = useState<State>({
        idUser: '1',
        totalPrice: 0,
        data: []
    })
    
    const getItemOrder = () => {
        orderController.getOrder('1').then(res => {
            setState({...state,data: res})
        })
    }
    
    useEffect(() => {
        getItemOrder()
    },[])

    const displayItem = state.data.map((item) => {
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
                            <div><p>{moment(item.timeAt).format('h:mm DD-MM-YYYY')} | <span>Pending</span></p></div>
                            <div><p>{item.user.nameUser}, {item.user.phone}, {item.user.email}, {item.user.address}</p></div>
                        </th>
                    </tr>
                </thead>
                {item.orderProduct.map((item) => {
                    return (<>
                        <tbody >
                            <tr >
                                <td>
                                    <div className='img-order'>
                                        <img src={item.product?.image} alt="" />
                                    </div>
                                    <div>
                                        <div><p>{item.product?.nameProduct}</p></div>
                                        <div><p className='desc'>Description</p></div>
                                        <div><p className='quantity'>x {item.quantity}</p></div>
                                    </div>
                                </td>
                                <td></td>
                                <td className='total-order'><p>{item.price} $</p></td>
                            </tr>
                        </tbody>
                    </>)
                })}
                <tfoot>
                    <tr>
                        <td className='order-total'>
                            <td><p>Estimated cost: <span>{} $</span></p></td>
                            <td><p>Shipping fee: <span>5 $</span></p></td>
                        </td>
                        <th></th>
                        <td className='order-total-2'>
                            <td><p >Total: <span>{ +5} $</span></p></td>
                        </td>
                    </tr>
                </tfoot>
            </table>
        )
    })

    return (
        <>
            {state.data.length > 0 ? 
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
