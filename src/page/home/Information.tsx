import React from 'react'

import {FaShopify, FaServicestack, FaSpotify} from 'react-icons/fa'

export default function Information() {
    return (
        <div className='information'>
            <div className='informa'>
                <div className='info'>
                    <div className='icon'><i><FaShopify/></i></div>
                    <div className='title'><p>Free Ship New</p></div>
                </div>
                <div className='info'>
                    <div className='icon'><i><FaServicestack/></i></div>
                    <div className='title'><p>Free Ship New</p></div>
                </div>
                <div className='info'>
                    <div className='icon'><i><FaSpotify/></i></div>
                    <div className='title'><p>Free Ship New</p></div>
                </div>
            </div>
        </div>
    )
}

