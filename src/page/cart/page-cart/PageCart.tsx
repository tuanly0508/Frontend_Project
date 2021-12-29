import React, {useEffect, useState } from 'react'
import { Cart, getLocalStorage } from '../../../model/Cart'
import PageCheckout from '../../check-out/PageCheckout'
import ItemCart from '../ItemCart'
import './PageCart.css'
import {FaCartPlus} from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface State {
    dataProduct: Cart[],
    totalPrice: number,
    showPage: boolean
}

export function PageCart() {
    //state
    const [state, setState] = useState<State>({
        dataProduct: getLocalStorage(),
        totalPrice: 0,
        showPage: false
    })

    //update page cart
    useEffect(() => {
        let y = 0
        state.dataProduct.map((item, key) => {
            y += item.quantity * item.price
        })
        setState({...state,totalPrice:y})
    },[])

    //delete item cart
    const onDelete = (id:string) => {
        let i = state.dataProduct.filter(data => data.id !== id)
        setState({...state,dataProduct:i})
        localStorage.setItem('list-cart',JSON.stringify(i))
    }
    
    //onUpdate quantity
    const onPlusQuantity = (id: string,quantity: number) => {
        let listPlus = state.dataProduct
        let i = listPlus.findIndex(data  => data.id === id)
        listPlus[i].quantity = quantity
        localStorage.setItem('list-cart', JSON.stringify(listPlus))
        setState({...state, dataProduct: listPlus})
        let y = 0
        state.dataProduct.map((item, key) => {
            y += item.quantity * item.price
        })
        setState({...state,totalPrice:y})
    }
    
    //render item cart
    const displayItemCart = state.dataProduct.map((item,key) => {
        return (
            < ItemCart cart={item} onDelete={onDelete} onPlusQuantity={onPlusQuantity} quantity={item.quantity} key={key}/>
        )
    })

    const displayEmpty = () => {
        if (state.dataProduct.length > 0) {
            return (
                <div className='content-cart'>
                <table className='table-top'>
                    <thead>
                        <tr className='title-header'>
                            <th></th>
                            <th>PRODUCT</th>
                            <th>QUANTITY</th>
                            <th>SUBTOTAL</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayItemCart}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th className='title-total'>Total:</th>
                            <th><p>{state.totalPrice}$</p></th>
                            <th>
                                <button className="btn btn-buy-cart" onClick={showPage}>Buy</button>
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            )
        }else {
            return (
                <div className='cart-empty'>
                    <div className='icon-empty'>
                        <i><FaCartPlus/></i>
                    </div>
                    <div className='title-empty'>
                        <p>CART EMPTY VIEW SHOP NOW</p>
                        <Link to='/shop'>
                            <button>View Shop</button>
                        </Link>
                    </div>
                </div>
            )
        }
    }

    const show = (show:boolean) => {
        setState({...state, showPage:show})
    }

    const showPage = () => {
        setState({...state, showPage: true})
    }
    
    return (
        <div>
            {state.showPage !== false && state.dataProduct.length > 0 ?  <PageCheckout dataProduct={state.dataProduct} totalPrice={state.totalPrice} showPage={show}/> : 
                <div className='container-cart'>
                    {displayEmpty()}
                </div>
            }
        </div>
    )
}
