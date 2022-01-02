import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './PageCheckOut.css'
import {FaBackward} from 'react-icons/fa'
import { buyUser } from '../../model/BuyUser';
import { userController } from '../../controller/UserController';
import { dataCart } from '../cart/page-cart/PageCart';
import { orderController } from '../../controller/OrderController';
import {v4 as uuid} from 'uuid'
import { orderTemp } from '../../model/orderTemp';

interface State {
    showPage: boolean,
    dataInput: buyUser,
    orderTemp: orderTemp
}

interface Props {
    showPage: (show:boolean) => void
    totalPrice: number
    dataCart: dataCart[]
}

export default function PageCheckout(props: Props) {
    //state
    const [state, setState] = useState<State>({
        showPage: false,
        dataInput: {idUser: '1', nameUser: '', email: '', phone: '', address: ''},
        orderTemp: {idOrder:'',idUser:'1', isTemp: true}
    })
    
    //show page
    const showPage = () => {
        props.showPage(state.showPage)
    }

    //add
    const handleSubmit = () => {     
        userController.update(state.dataInput)
        props.dataCart.map((item) => {
            orderController.updateOrderTempStt(item.idOrder,'1')
        })        
    }

    return (
        <div className='container-check-out'>
            <div className='content-check-out'>
                <div className='content-form'>
                    <form >
                        <div className='title-form-check'>
                            <i onClick={showPage}><FaBackward/></i><h2>Delivery Address</h2>
                        </div>
                        <div>
                            <input onChange={e => {setState({...state,dataInput:({...state.dataInput,nameUser: (e.target.value)})})}}  type="text" placeholder='Name' />
                            <input onChange={e => {setState({...state,dataInput:({...state.dataInput,phone: (e.target.value)})})}} type="text" placeholder='Mobile'/>
                            <input onChange={e => {setState({...state,dataInput:({...state.dataInput,email: (e.target.value)})})}} type="text" placeholder='Email'/>
                            <input onChange={e => {setState({...state,dataInput:({...state.dataInput,address: (e.target.value)})})}} type="text" placeholder='Address'/>
                        </div>
                    </form>
                </div>
                <div className='content-info'>
                    <div className='info-check'>
                        <p className='your-order'>Your order</p>    
                        <p className='tu-clothing'>To Clothing</p>
                        <p>Prices <span>{props.totalPrice.toPrecision(2)} $</span> </p>
                        <p >Delivery <span className='delivery'>3$</span> </p>
                        <p className='total-order-check'>Total <span>{(props.totalPrice+3).toPrecision(3)} $</span> </p>
                    </div>
                    <div>
                        <Link to='/checkout/completed'>
                            <button onClick={handleSubmit} className='btn-check'>CHECK OUT</button>
                        </Link>
                    </div>
                </div>
                <div className='content-form'>
                    <form>
                        <div className='title-form-check-2'>
                            <h2>Payment</h2>
                            <p>Select payment method:</p>
                        </div>
                        <div className='check-box'>
                            <div className='check-box-child'>
                                <input type="checkbox"/> <label>ShoppePay</label>
                                <input type="checkbox"/> <label>ShoppePay</label>
                            </div>
                            <div className='check-box-child'>
                                <input type="checkbox"/> <label>ShoppePay</label>
                                <input type="checkbox"/> <label>ShoppePay</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
