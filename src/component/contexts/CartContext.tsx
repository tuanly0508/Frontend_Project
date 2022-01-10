import { type } from "os";
import React,{createContext, ReactNode, useContext,useEffect,useState} from "react";
import { cartController } from "../../controller/CartController";
import { userController } from "../../controller/UserController";
import { dataCart } from "../../page/cart/page-cart/PageCart";
import { UserContext } from "./UserContext";

interface CartContextProviderProps {
    children: ReactNode
}

type State = {
    idUser: string
    quantity: number    
    dataCart: dataCart[]
    totalPrice: number
    changeQuantity: (quantity:number) => void
    getInfoCart: () => void
}

const StateDefault = {
    idUser: '',
    quantity: 0,
    dataCart: [],
    totalPrice: 0,
    changeQuantity: () => {},
    getInfoCart: () => {}
}

export const CartContext = createContext<State>(StateDefault)

export const CartContextProvider = ({children}: CartContextProviderProps) => {

    const [state,setState] = useState<State>(StateDefault)

    const changeQuantity = (quantity:number) => {
        setState({...state,quantity:quantity})
    }

    const getInfoCart = () => {
        cartController.getItemCart().then(res => {
            setState({...state,quantity:res.dataCart.length})
        })
    }

    return (
        <CartContext.Provider value={{quantity:state.quantity,getInfoCart,changeQuantity,idUser:state.idUser,dataCart: state.dataCart,totalPrice:state.totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}