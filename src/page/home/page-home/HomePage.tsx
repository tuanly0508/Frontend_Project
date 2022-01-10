import React, { useContext, useEffect } from 'react'
import './HomePage.css'
import Information from '../Information'
import Product from '../list-product/Product'
import News from '../news/News'
import Slider from '../Slider'
import { CartContext } from '../../../component/contexts/CartContext'
import { UserContext } from '../../../component/contexts/UserContext'

export default function HomePage() {
    const cartContext = useContext(CartContext)
    const userContext = useContext(UserContext)

    useEffect(() => {
        userContext.getInfoUser()
        cartContext.getInfoCart()
    },[])

    return (
        <div className='container'>
            <div className='content'>
                <Slider/>
                <Information/>
                <Product/>
                <Product/>
                <Product/>
                <News/>
            </div>
        </div>
    )
}
