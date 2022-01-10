import React,{createContext, ReactNode, useContext,useState} from "react";
import { AuthAxios } from "../../controller/AuthAxios";
import { userController } from "../../controller/UserController";
import { User } from "../../model/User";

interface UserContextProviderProps {
    children: ReactNode
}

type State = {
    user: User,
    changeUser: (user: User) => void,
    status: string    
    changeStatus: (status: string) => void
    getInfoUser: () => void
}

const StateDefault = {
    user: {idUser: "",nameUser:"",email:"",phone:"",address:""},
    changeUser: () => {},
    status: 'Login',
    changeStatus: () => {},
    getInfoUser: () => {}
}

export const UserContext = createContext<State>(StateDefault)

export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [state,setState] = useState<State>(StateDefault)

    const changeUser = (user:User) => {
        if(user) {
            setState({...state,user:user,status:'Logout'})
        }
    }

    const changeStatus = (status:string) => {
        setState({...state,status: status,user:StateDefault.user})
        localStorage.removeItem('accessToken')
        AuthAxios.defaults.headers.common['authorization'] = ""
    }

    const getInfoUser = () => {
        userController.getMe().then(res => {
            setState({...state,user:res,status:'Logout'})
        })
    }

    const data:State = {user:state.user,status:state.status,changeUser,changeStatus,getInfoUser}

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}