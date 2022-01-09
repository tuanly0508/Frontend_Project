import React, { useEffect, useState } from 'react'
import Footer from './component/footer/Footer'
import {Header} from './component/header/Header'
import {PageAdmin} from './page/admin/page-admin/PageAdmin'
import HomePage from './page/home/page-home/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageShop from './page/shop/page-shop/PageShop'
import {PageCart} from './page/cart/page-cart/PageCart'
import PageProductDetail from './page/product-detail/detail/PageProductDetail'
import PageOrder from './page/order/PageOrder'
import Register from './component/register/Register'
import { UserContextProvider } from './component/contexts/UserContext'
import { CartContextProvider } from './component/contexts/CartContext'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <CartContextProvider>
          <UserContextProvider>
            <Header />     
              <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/admin" element={<PageAdmin/>} />
                <Route path="/shop" element={<PageShop/>} />
                <Route path="/checkout/cart" element={<PageCart/>} />
                <Route path="/checkout/completed" element={<PageOrder/>} />
                <Route path="/detail/:id" element={<PageProductDetail/>} />
                <Route path="/register" element={<Register/>} />
              </Routes>
            {/* <Footer/> */}
          </UserContextProvider>
        </CartContextProvider>
      </div>
    </BrowserRouter>
  )
}

