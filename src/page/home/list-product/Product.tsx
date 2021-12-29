import React, { useEffect, useState }  from 'react'
import {FaChevronRight} from 'react-icons/fa'
import { productController } from '../../../controller/ProductController';
import { Product } from '../../../model/Product';
import { ProductDetail } from './ProductDetail';

interface State {
    product: Product[]
}

export default function Products() {   
    const [state, setState] = useState<State>({product:[]});

    //get list
    useEffect(() => {

    },[])

    return (
        <div className='list-product'>
            <div className='title'>
                <p>PRODUCTS BY CATEGORY</p>
            </div>
            <div className='list'>
                <div className='product'>
                    {state.product.map((item,key) => <ProductDetail product={item} key={key} />)}
                </div>
            </div>
            <div className='title-end'>
                <div className='title'><p>More</p></div>
                <i><FaChevronRight/></i>
            </div>
        </div>
    )
}
