import { createContext, useContext, useState } from "react";

const Context = createContext({})

export const PageProvider = ({children}) => {
    const [isOpenModal,setIsOpenModal] = useState(false)
    const [user,setUser] = useState()
    return <Context.Provider value={{isOpenModal,setIsOpenModal,user,setUser}}>
        {children}
    </Context.Provider>
}

export const usePage = () => useContext(Context)

