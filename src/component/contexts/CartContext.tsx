import { type } from "os";
import React,{createContext, ReactNode, useContext,useState} from "react";

interface CartContextProviderProps {
    children: ReactNode
}

type State = {
    quantity: number    
    changeQuantity: (quantity:number) => void
}

const StateDefault = {
    quantity: 0,
    changeQuantity: () => {}
}

export const CartContext = createContext<State>(StateDefault)

export const CartContextProvider = ({children}: CartContextProviderProps) => {

    const [state,setState] = useState<State>(StateDefault)

    const changeQuantity = (quantity:number) => {
        setState({...state,quantity:quantity})
    }

    return (
        <CartContext.Provider value={{quantity:state.quantity,changeQuantity}}>
            {children}
        </CartContext.Provider>
    )
}