import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../../model/Product'
import { v4 as uuid } from 'uuid';
import { orderProduct } from '../../model/orderProduct';
export interface Props {
    onAddDatabase: (orderProduct: orderProduct) => void
    product: Product
}
interface State {
    orderProduct: orderProduct
}

export function ProductDetail(props:Props) {
    const [state] = useState<State>({
        orderProduct: {idOrder: uuid(), idProduct: props.product.idProduct, quantity: 1,price:props.product.price}
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