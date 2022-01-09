import React,{createContext, ReactNode, useContext,useState} from "react";
import { AuthAxios } from "../../controller/AuthAxios";
import { User } from "../../model/User";

interface UserContextProviderProps {
    children: ReactNode
}

type State = {
    user: User,
    changeUser: (user: User) => void,
    status: string    
    changeStatus: (status: string) => void
}

const StateDefault = {
    user: {idUser: "",nameUser:"",email:"",phone:"",address:""},
    changeUser: () => {},
    status: 'Login',
    changeStatus: () => {}
}

export const UserContext = createContext<State>(StateDefault)

export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [stateUser,setState] = useState<State>(StateDefault)

    const changeUser = (user:User) => {
        if(user) {
            setState({...stateUser,user:user,status:'Logout'})
        }
    }

    const changeStatus = (status:string) => {
        setState({...stateUser,status: status,user:StateDefault.user})
        localStorage.removeItem('accessToken')
        AuthAxios.defaults.headers.common['authorization'] = ""
    }

    const data:State = {user:stateUser.user,status:stateUser.status,changeUser,changeStatus}

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}