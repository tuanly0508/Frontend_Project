import React from 'react'
import './Footer.css'
import {FaUser, FaPhone, FaVoicemail, FaUserFriends, FaCaretSquareRight, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className='bg'>
                <div className='bg-mask'>
                    <div className='info'>
                        <div className='infol'>
                            <div className="logo">
                                <img src="https://dcassetcdn.com/design_img/44755/57546/57546_806229_44755_image.jpg" alt="" />
                            </div>
                            <div className="logo-item">
                                <div className="address-icon"><i><FaUser/></i></div>
                                <div className="logo-text">111 Phan Bội Châu,P.10,Q.1,Tp.HCM</div>
                            </div>
                            <div className="logo-item">
                                <div className="mobile-icon"><i><FaPhone/></i></div>
                                <div className="logo-text">088 888 888</div>
                            </div>
                            <div className="logo-item">
                                <div className="email-icon"><i><FaVoicemail/></i></div>
                                <div className="logo-text">tuananh@gmail.com</div>
                            </div>
                            <div className="logo-item">
                                <div className="spyke-icon"><i><FaUserFriends/></i></div>
                                <div className="logo-text">tuananhtranps</div>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <h3>MENU</h3>
                        <div className="footer-menu-con">
                            <ul>
                                <li className="footer-menu-con-1"><Link to="/home"><i><FaCaretSquareRight/></i>Trang chủ</Link></li>
                                <li className="footer-menu-con-1"><Link to="/"><i><FaCaretSquareRight/></i>Giới thiệu</Link></li>
                                <li className="footer-menu-con-1"><Link to="/"><i><FaCaretSquareRight/></i>Tin tức</Link></li>
                                <li className="footer-menu-con-1"><Link to="/"><i><FaCaretSquareRight/></i>Liên hệ</Link></li>
                                <li className="footer-menu-con-1"><Link to="/"><i><FaCaretSquareRight/></i>Kiểm tra đơn hàng</Link></li>
                                <li className="footer-menu-con-1"><Link to="/"><i><FaCaretSquareRight/></i>Đăng kí Affilicate</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="info">
                        <h3>SẢN PHẨM</h3>
                        <div className="footer-menu-con">
                            <ul>
                                <li className="footer-menu-con-1"><Link to="#"><i><FaCaretSquareRight/></i>Aviator</Link></li>
                                <li className="footer-menu-con-1"><Link to="#"><i><FaCaretSquareRight/></i>Baby-G</Link></li>
                                <li className="footer-menu-con-1"><Link to="#"><i><FaCaretSquareRight/></i>Edifice</Link></li>
                                <li className="footer-menu-con-1"><Link to="#"><i><FaCaretSquareRight/></i>G-Shock</Link></li>
                                <li className="footer-menu-con-1"><Link to="#"><i><FaCaretSquareRight/></i>G-Stell</Link></li>
                                <li className="footer-menu-con-1"><Link to="#"><i><FaCaretSquareRight/></i>Gravity</Link></li>
                                <li className="footer-menu-con-1"><Link to="#"><i><FaCaretSquareRight/></i>Mubmaster</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="info">
                        <h3>ĐĂNG KÍ</h3>
                        <p className="sign-up-item">Đăng ký để nhận được những thông tin mới nhất <br/> từ chúng
                            tôi.</p>
                        <div className="sign-up-item">
                            <input type="email" name="email" id="email" placeholder="Email..."/>
                            <Link to="#" className="label"><i className="icon-plane fab fa-telegram-plane"></i></Link>
                        </div>
                        <h3 className="sign-up-item-2">KẾT NỐI VỚI CHÚNG TÔI</h3>
                        <div className="sign-up-item">
                            <ul className="address-item-menu">
                                <li className="address-item-menu-1"><Link to="#"><i><FaFacebookSquare/></i></Link>
                                    <ul className="address-item-menu-2">
                                        <li className="address-item-menu-3">
                                            <Link to="#">Follow on Facebook</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="address-item-menu-1"><Link to="#"><i><FaInstagramSquare/></i></Link>
                                    <ul className="address-item-menu-2">
                                        <li className="address-item-menu-3">
                                            <Link to="#">Follow on Instagram</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="address-item-menu-1"><Link to="#"><i><FaTwitterSquare/></i></Link>
                                    <ul className="address-item-menu-2">
                                        <li className="address-item-menu-3">
                                            <Link to="#">Follow on Twitter</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
