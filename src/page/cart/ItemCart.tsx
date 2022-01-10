import React, {useState } from 'react'
import {FaTrash, FaMinusCircle, FaPlusCircle} from 'react-icons/fa'

export interface Props {
    cart: {idOrder:string,idUser: string,idProduct: string,image: string,price:number,nameProduct:string, quantity: number},
    onDelete: (idProduct:string,idOrder:string) => void,
    onPlusQuantity: (idCart:string, quantity: number,idUser:string,idOrder:string) => void,
}
interface State {
    quantity: number,
}

export default function ItemCart(props: Props) {
    const [state, setState] = useState<State>({
        quantity: props.cart.quantity
    })
    
    //update plus quantity database
    const onPlusQuantity = () => {
        let plus:any = state.quantity
        plus = plus + 1
        setState({...state,quantity: plus})
        props.onPlusQuantity(props.cart.idProduct,plus,'1',props.cart.idOrder)
    }

    //update minus quantity database
    const onMinusQuantity = () => {
        if (state.quantity >1) {
            let minus:any = state.quantity
            minus = minus - 1
            setState({...state,quantity:minus})
            props.onPlusQuantity(props.cart.idProduct,minus,'1',props.cart.idOrder)
        }else setState({...state,quantity:1})
    }

    return (
        <tr className='item'>
            <td className='img'><img src={props.cart.image} alt=''/></td>
            <td className='name'><p>{props.cart.nameProduct}</p></td>
            <td className='quantity'>
                <i onClick={onMinusQuantity}><FaMinusCircle/></i>
                <input disabled type="text" value={state.quantity} name="input" min={1}/>
                <i onClick={onPlusQuantity} ><FaPlusCircle/></i>
            </td>
            <td className='price'>$ {(state.quantity * props.cart.price).toPrecision(3)}</td>
            <td className='function'><FaTrash onClick={() => props.onDelete(props.cart.idProduct,props.cart.idOrder) } /></td>
        </tr>
    )
}
