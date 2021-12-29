import React, { useState } from 'react'
import {FaTrash, FaMinusCircle, FaPlusCircle} from 'react-icons/fa'
import { Cart, getLocalStorage } from '../../model/Cart'

export interface Props {
    cart: Cart,
    quantity: number,
    onDelete: (id:string) => void,
    // onMinusQuantity: (id:string, quantity: number) => void
    onPlusQuantity: (id:string, quantity: number) => void
}

interface State {
    quantity: number,
    list: Cart []
}

export default function ItemCart(props: Props) {
    const [state, setState] = useState<State>({
        quantity: props.quantity,
        list: getLocalStorage()
    })
    
    //onUpdate quantity
    const onMinusQuantity = () => {
        if (state.quantity >1) {
            let minus = state.quantity
            minus = minus - 1
            setState({...state,quantity:minus})
            props.onPlusQuantity(props.cart.id,minus)
        }else setState({...state,quantity:1})
    }

    //plus
    const onPlusQuantity = () => {
        let plus = state.quantity
        plus = plus + 1
        setState({...state,quantity:plus})
        props.onPlusQuantity(props.cart.id,plus)
    }

    return (
        <tr className='item'>
            <td className='img'><img src={props.cart.image} alt=''/></td>
            <td className='name'><p>{props.cart.name}</p></td>
            <td className='quantity'>
                <i onClick={onMinusQuantity}><FaMinusCircle/></i>
                <input disabled type="text" value={state.quantity} name="input" min={1}/>
                <i onClick={onPlusQuantity}><FaPlusCircle/></i>
            </td>
            <td className='price'>${state.quantity * props.cart.price}</td>
            <td className='function'><FaTrash onClick={() => props.onDelete(props.cart.id)}/></td>
        </tr>
    )
}
// () => props.onPlusQuantity(props.cart.id, state.quantity)
