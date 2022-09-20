import { createContext, useContext, useState } from "react";
import userService from "../services/userService";

const Context = createContext({})

export const PageProvider = ({children}) => {
    const [isOpenModal,setIsOpenModal] = useState(false)
    const [user,setUser] = useState(() => {
        const user = localStorage.getItem('user')
        if(user) return JSON.parse(user)
        return false
    })
    // thay doi du lieu may nay thi may khac cung dc cap nhat
    useEffect(() => {
        (async () => {
            let token = localStorage.getItem('token')
            if(token) {
                const user = await userService.getInfo()
                localStorage.getItem('user', JSON.stringify(user.data))
                setUser(user.data)
            }
        })
    }, [])
    return <Context.Provider value={{isOpenModal,setIsOpenModal,user,setUser}}>
        {children}
    </Context.Provider>
}

export const usePage = () => useContext(Context)

