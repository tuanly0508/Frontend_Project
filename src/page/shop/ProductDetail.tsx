import React from 'react'
import { Link } from 'react-router-dom'
import { Cart } from '../../model/Cart'
import { Product } from '../../model/Product'

export interface Props {
    handleClick: (products:Product) => void
    product: Product
}

export function ProductDetail(props:Props) {

    return (
        <div className='product-detail'>
            <span></span><span></span><span></span><span></span>
            <div className='container-product'>
                <img src={props.product.image} alt="p1" />
                <i className='icon'>
                    <button className='btn' onClick={() => props.handleClick(props.product)}  >ADD</button>
                    <Link to={`/detail/${props.product.id}`}>
                        <button className='btn' >XEM</button>
                    </Link>
                </i>
                <div className='name'>{props.product.name}</div>
                <div className='price'>
                    <div className='before'>{props.product.price+"$"}</div>
                </div>
            </div>
        </div>
    )
}