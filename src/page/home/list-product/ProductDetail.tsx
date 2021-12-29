import React from 'react'
import {Product } from '../../../model/Product'

export interface Props {
    product: Product
}

export function ProductDetail(props:Props) {
    return (
        <div className='product-detail'>
            <img src={props.product.image} alt="p1" />
            <div className='name'>{props.product.name}</div>
            <div className='price'>
                <div className='before'>{props.product.price+"$"}</div>
            </div>
        </div>
    )
}