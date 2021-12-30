import React from 'react'
import {Product } from '../../../model/Product'
import {FaTrash} from 'react-icons/fa'

export interface Props {
    onEdit: ( product:Product, open: Boolean) => void
    onDelete: (idProduct:string) => void
    product: Product
}

export function ProductDetail(props:Props) {
    return (
        <div className='product-detail'  >
            <div className='container-product'>
                <FaTrash className='trash' onClick={() =>  props.onDelete(props.product.idProduct)} />
                <img src={props.product.image} alt="p1" onClick={() => props.onEdit(props.product,true) } />
                <div className='name'>{props.product.nameProduct}</div>
                <div className='price'>
                    <div className='before'>{props.product.price+"$"}</div>
                </div>
            </div>
        </div>
    )
}