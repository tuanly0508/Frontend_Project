import React, { useEffect, useState } from 'react'
import {FaMinusCircle, FaPlusCircle} from 'react-icons/fa'
import { productController } from '../../../controller/ProductController'
import { Product } from '../../../model/Product'
import './PageProductDetail.css'

interface State {
    product: Product
}

export default function PageProductDetail() {
    //state
    const [state, setState] = useState<State>({
        product: {id:'',name:'',price:0,image: ''}
    })

    useEffect(() => {
        let id = window.location.pathname.substring(8)
        productController.getDetail(id).then(res => {
            setState({...state,product: res})
        })
    },[])
    
    return (
        <div className='container-detail'>
            <div className='content'>
                <div className='product-detail-img'>
                    <img src={state.product.image} alt="image" />
                </div>

                <div className='information-detail'>
                    <div className='title'>{state.product.name}</div>
                    <div className='price'>{state.product.price} $</div>
                    <div className='title-includes'>PRODUCT SET INCLUDES:</div>
                    <div className='add'>
                        <div className='quantity'>
                            <i><FaMinusCircle/></i><p>1</p><i><FaPlusCircle/></i>
                        </div>
                        <button className='btn btn-pri'>ADD TO CART</button>
                    </div>
                    <div className='catalo-detail'>CATALO: <p>G-SHOCK, G-STEEL</p></div>
                    <div className='description'>
                        <button className='btnMore'>MORE</button>
                        <div className='detail'>
                            <p className='title-detail'>FEATURE:</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius officia deserunt unde aliquam quibusdam repellendus accusamus perspiciatis facilis at quidem aut consectetur voluptatibus magni facere omnis fuga veritatis, hic cumque distinctio cum cupiditate velit, labore sunt! Porro eos molestias reprehenderit ullam, quasi totam neque magni ipsam beatae, vero nobis qui!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
