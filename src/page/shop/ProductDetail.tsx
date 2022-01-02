import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Cart } from '../../model/Cart'
import { Product } from '../../model/Product'
import { v4 as uuid } from 'uuid';
import { orderProduct } from '../../model/orderProduct';
import moment from 'moment';
export interface Props {
    //onAddLocal: (products:Product) => void
    onAddDatabase: (orderProduct: orderProduct) => void
    product: Product
}
interface State {
    orderProduct: orderProduct
}

export function ProductDetail(props:Props) {
    const [state, setState] = useState<State>({
        orderProduct: {idOrder: uuid(),idUser: '1', idProduct: props.product.idProduct, quantity: 1, timeAt: moment(new Date()).format('DD-MM-YYYY HH:MM '),price:props.product.price}
    })
    
    return (
        <div className='product-detail'>
            <span></span><span></span><span></span><span></span>
            <div className='container-product'>
                <img src={props.product.image} alt="p1" />
                <i className='icon'>
                    <button className='btn' onClick={() => props.onAddDatabase(state.orderProduct)}  >ADD</button>
                    <Link to={`/detail/${props.product.idProduct}`}>
                        <button className='btn' >XEM</button>
                    </Link>
                </i>
                <div className='name'>{props.product.nameProduct}</div>
                <div className='price'>
                    <div className='before'>{props.product.price+"$"}</div>
                </div>
            </div>
        </div>
    )
}