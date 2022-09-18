import { createContext, useContext, useState } from "react";

const Context = createContext({})

export const PageProvider = ({children}) => {
    const [isOpenModal,setIsOpenModal] = useState(false)
    return <Context.Provider value={{isOpenModal,setIsOpenModal}}>
        {children}
    </Context.Provider>
}

export const usePage = () => useContext(Context)

