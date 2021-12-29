import React from 'react'
import New from './New'

export default function News() {
    return (
        <div className='news'>
            <div className='title'>
                <p>NEWS</p>
            </div>
            <div className='list'>
                <New/>
                <New/>
                <New/>
            </div>
        </div>
    )
}
