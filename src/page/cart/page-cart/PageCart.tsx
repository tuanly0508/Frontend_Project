import React, {useEffect, useState } from 'react'
import PageCheckout from '../../check-out/PageCheckout'
import ItemCart from '../ItemCart'
import './PageCart.css'
import {FaCartPlus} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { cartController } from '../../../controller/CartController'
interface State {
    showPage: boolean,
    dataCart: dataCart[],
    totalPrice: number
}
export interface dataCart {
    idOrder: string,
    idUser: string,
    image: string,
    price:number,
    nameProduct:string, 
    quantity: number
}

export function PageCart() {
    //state
    const [state, setState] = useState<State>({
        showPage: false,
        dataCart: [],
        totalPrice: 0
    })
    
    //useEffect
    useEffect(() => {
        getItemCart()
        let y= 0
        state.dataCart.map((item) => {    
            y += item.price * item.quantity
            console.log(y);
            
        })
        
    },[])

    //get item cart
    const getItemCart = () => {
        cartController.getItemCart('1').then(res => { 
            setState({...state,dataCart: res.dataCart,totalPrice: res.totalPrice})
        })
    }
    
    //delete item cart database
    const onDelete = (idCart:string) => {
        cartController.deleteCart(idCart,'1').then(res => {
            setState({...state,dataCart: res})
        })
    }
    
    //update plus and minus quantity database
    const onPlusQuantity = (idCart:string, quantity:number, idUser: string) => {
        cartController.updateCart(idCart,idUser,quantity).then(res => {
            setState({...state,dataCart:res.dataCart,totalPrice: res.totalPrice})
        })
    }
    
    //render item cart
    const displayItemCart = state.dataCart.map((item,key) => {
        return (
            < ItemCart cart={item} onPlusQuantity={onPlusQuantity} onDelete={onDelete} key={key}/>
        )
    })
    
    const displayEmpty = () => {
        if (state.dataCart.length > 0) {
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
                            <th><p>{state.totalPrice.toPrecision(3)}$</p></th>
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
            {state.showPage !== false && state.dataCart.length > 0 ?  <PageCheckout dataCart={state.dataCart} totalPrice={state.totalPrice} showPage={show}/> : 
                <div className='container-cart'>
                    {displayEmpty()}
                </div>
            }
        </div>
    )
}

//delete item cart local
    // const onDelete = (id:string) => {
    //     let i = state.dataProduct.filter(data => data.id !== id)
    //     setState({...state,dataProduct:i})
    //     localStorage.setItem('list-cart',JSON.stringify(i))
    // }

    //onUpdate quantity local
    // const onPlusQuantity = (id: string,quantity: number) => {
    //     let listPlus = state.dataProduct
    //     let i = listPlus.findIndex(data  => data.id === id)
    //     listPlus[i].quantity = quantity
    //     localStorage.setItem('list-cart', JSON.stringify(listPlus))
    //     setState({...state, dataProduct: listPlus})
    //     let y = 0
    //     state.dataProduct.map((item, key) => {
    //         y += item.quantity * item.price
    //     })
    //     setState({...state,totalPrice:y})
    // }