import React from 'react'
import './HomePage.css'
import Information from '../Information'
import Product from '../list-product/Product'
import News from '../news/News'
import Slider from '../Slider'

export default function HomePage() {
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
