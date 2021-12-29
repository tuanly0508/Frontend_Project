import React from 'react'
import './Header.css'
import {FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaHouseUser, FaSearch, FaShoppingCart, FaBoxes, FaCartArrowDown} from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        
        <div className='container'>
            <div className='content-top'>
                <div className='social'>
                    <ul className='left'>
                        <li className='menu'>
                            <i><FaFacebookSquare/></i>
                            <ul className='title'>
                                <li><Link className='link' to="/">Follow on Facebook</Link></li>
                            </ul>
                        </li>
                        <li className='menu'>
                            <i><FaTwitterSquare/></i>
                            <ul className='title'>
                                <li><Link className='link' to="/">Follow on Twitter</Link></li>
                            </ul>
                        </li>
                        <li className='menu'>
                            <i><FaInstagramSquare/></i>
                            <ul className='title'>
                            <li><Link className='link' to="/">Follow on Instagram</Link></li>
                            </ul>
                        </li>
                    </ul>                    
                </div>
                <div className='address'>
                    <i><FaHouseUser/></i><p>
                        111 Phan Boi Chau, Quan 9, Ho Chi Minh
                    </p>
                </div>
            </div>
            <div className='content-bot'>
                <nav >
                    <ul >
                        <li><Link className='link' to="/">Home</Link></li>
                        <li className='menu'><Link className='link' to="/shop">Shop
                            <ul className='menu-2'>
                                <li>Aviator</li>
                                <li>Baby-G</li>
                                <li>Edifice</li>
                                <li>G-shock</li>
                                <li>G-steel</li>
                                <li>Gravity</li>
                                <li>MubMaster</li>
                            </ul>
                        </Link></li>
                        <li>News</li>
                        <li>Contact</li>
                        <li>Helps</li>
                        <li>Product</li>
                        <li><Link className='link' to="/admin">Admin</Link></li>
                    </ul>
                </nav>

                <div className='logo'>
                    <img src="http://gwatch.vn/wp-content/uploads/2021/02/p10-2.png" alt="logo" />
                </div>

                <div className='login'>
                    <div className="sign-up-item">
                        <input type="text" name="email" id="email" placeholder="Search..."/>
                        <div className='icon'><i><FaSearch/></i></div>
                        <Link  to="/" className="label"><i className="icon-plane fab fa-telegram-plane"></i></Link>
                    </div>
                    <div className='right'>
                        <li>
                            <Link className='link' to="/checkout/cart">
                                <i className='icon'><FaShoppingCart/>
                                    <div className='order-list'>
                                        <Link className='link' to="/checkout/completed"><i><FaBoxes/></i><p>Order</p></Link>
                                        <Link className='link' to="/checkout/cart"><i><FaCartArrowDown/></i><p>Cart</p></Link>
                                    </div>
                                </i>
                            </Link>
                        </li>
                        <li>
                            <Link className='link' to="">Login</Link>
                        </li>
                        <li>
                            <Link className='link' to="">Register</Link>
                        </li>
                    </div>
                </div>
            </div>                 
        </div>
        
    )
}
