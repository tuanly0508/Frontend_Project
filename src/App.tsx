import React from 'react'
import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import {PageAdmin} from './page/admin/page-admin/PageAdmin'
import HomePage from './page/home/page-home/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageShop from './page/shop/page-shop/PageShop'
import {PageCart} from './page/cart/page-cart/PageCart'
import PageProductDetail from './page/product-detail/detail/PageProductDetail'
import PageOrder from './page/order/PageOrder'
import PageCheckout from './page/check-out/PageCheckout'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>     
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/admin" element={<PageAdmin/>} />
            <Route path="/shop" element={<PageShop/>} />
            <Route path="/checkout/cart" element={<PageCart/>} />
            <Route path="/checkout/completed" element={<PageOrder/>} />
            <Route path="/detail/:id" element={<PageProductDetail/>} />
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter> 
  )
}

