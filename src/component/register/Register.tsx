import React, {useContext, useEffect, useState } from 'react'
import { userController } from '../../controller/UserController'
import './Register.css'
import {FaShareSquare} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { CartContext } from '../contexts/CartContext'

interface State {
    email:string
    pass: string
    show: Boolean
}

export default function Register() {
    let navigate =useNavigate()
    
    const {status} = useContext(UserContext)
    const cartContext = useContext(CartContext)

    const [state, setState] = useState<State>({
        email:'',
        pass:'',
        show: true
    })
    const onSubmit = (e: any) => {
        e.preventDefault()
        userController.login(state.email,state.pass).then(res => {
            let token = res.accessToken
            localStorage.setItem('accessToken',token)
            alert('ok')
            navigate('/shop')
        })
    }

    return (
        <div className='container-register'>
            <div className="content-wrapper">
                <div className="content">
                    <div className="signUp-wrapper shadow-box">
                        <div className="company-details ">
                        
                            <div className="shadow"></div>
                            <div className="wrapper-1">
                                <div className="logo">
                                <div className="icon-food">
                                </div>
                                </div>
                                <h1 className="title">G-WATCH</h1>
                            </div>
                        </div>
                        <div className="signUp-form ">
                            <div className="wrapper-2">
                                <div className="form-title">SIGN IN</div>
                                <i className='icon-regis' ><FaShareSquare/></i>
                                <div className="form">
                                    <form onSubmit={onSubmit}>
                                        <p className="content-item">
                                            <label>Full Name
                                                <input type="text" placeholder="Lorem ipsum" />
                                            </label>
                                        </p>

                                        <p className="content-item">
                                            <label>Email
                                                <input onChange={(e) => setState({...state,email: (e.target.value)})} type="text"  placeholder="lorem@loremipsum.com" name="email" required/>
                                            </label>
                                        </p>

                                        <p className="content-item">
                                            <label>Password
                                                <input onChange={(e) => setState({...state,pass: (e.target.value)})} type="password" placeholder="*****" name="psw" required/>
                                            </label>
                                        </p>
                                        <button className='btn-register'>{status}</button>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
