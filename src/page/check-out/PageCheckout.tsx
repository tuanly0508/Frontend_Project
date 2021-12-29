import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './PageCheckOut.css'
import {FaBackward} from 'react-icons/fa'
import { v4 as uuid } from 'uuid';
import { productController } from '../../controller/ProductController'
import { ListOrder } from '../../model/ListOrder';
import { Product } from '../../model/Product';
import { Cart } from '../../model/Cart';
import moment from 'moment';

interface State {
    dataOrder: ListOrder[],
    showPage: boolean,
    dataInput: ListOrder
}

interface Props {
    showPage: (show:boolean) => void
    totalPrice: number
    dataProduct: Cart[]
}
//{name:'',mobile:'',email:'',address:''}
export default function PageCheckout(props: Props) {
    let now = new Date()
    var i = moment(now).format('DD-MM-YYYY HH:MM:SS ')
    
    //state
    const [state, setState] = useState<State>({
        dataOrder: [],
        showPage: false,
        dataInput: {idOrder:'',idUser:'1',nameCus:'',mobile:'',email:'',address:'',timeAt:i,product: props.dataProduct }
    })

    //show page
    const showPage = () => {
        props.showPage(state.showPage)
    }

    //add
    const handleSubmit = () => {
        state.dataInput.idOrder = uuid()        
        productController.addOrder(state.dataInput).then(res => {
            setState({...state,dataOrder: res})
        })
        localStorage.setItem('list-cart','')
    }

    return (
        <div className='container-check-out'>
            <div className='content-check-out'>
                <div className='content-form'>
                    <form >
                        <div className='title-form-check'>
                            <i onClick={showPage}><FaBackward/></i>   <h2>Delivery Address</h2>
                        </div>
                        <div>
                            <input onChange={e => {setState({...state,dataInput:({...state.dataInput,nameCus: (e.target.value)})})}}  type="text" placeholder='Name' />
                            <input onChange={e => {setState({...state,dataInput:({...state.dataInput,mobile: (e.target.value)})})}} type="text" placeholder='Mobile'/>
                            <input onChange={e => {setState({...state,dataInput:({...state.dataInput,email: (e.target.value)})})}} type="text" placeholder='Email'/>
                            <input onChange={e => {setState({...state,dataInput:({...state.dataInput,address: (e.target.value)})})}} type="text" placeholder='Address'/>
                        </div>
                    </form>
                </div>
                <div className='content-info'>
                    <div className='info-check'>
                        <p className='your-order'>Your order</p>    
                        <p className='tu-clothing'>To Clothing</p>
                        <p>Prices <span>{props.totalPrice} $</span> </p>
                        <p >Delivery <span className='delivery'>3$</span> </p>
                        <p className='total-order-check'>Total <span>{props.totalPrice+3} $</span> </p>
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
