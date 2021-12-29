import React from 'react'
import { Cart } from '../../model/Cart'

interface Props {
    product: Cart[]
}

export default function ItemProduct(props:Props) {
    return (
        <>
            {/* <tbody >
                <tr >
                    <td>
                        <div className='img-order'>
                            <img src={item.image} alt="" />
                        </div>
                        <div>
                            <div><p>{item.name}</p></div>
                            <div><p className='desc'>Description</p></div>
                            <div><p className='quantity'>x {item.quantity}</p></div>
                        </div>
                    </td>
                    <td></td>
                    <td className='total-order'><p>{price} $</p></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th className='order-total'>
                        <td><p>Estimated cost: <span>{price} $</span></p></td>
                        <td><p>Shipping fee: <span>5 $</span></p></td>
                    </th>
                    <th></th>
                    <th className='order-total-2'>
                        <td><p >Total: <span>{price +5} $</span></p></td>
                    </th>
                </tr>
            </tfoot> */}
        </>
    )
}
