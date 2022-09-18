import React,{createContext, useContext, useState} from 'react'

const AuthContext = createContext()

function AuthProvider({children}) {
    const [user,setUser] = useState({})

    const onLogin = () => {
      setUser({
        name:'Bùi Kiệt',
        avatar: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/287900244_783504879310058_2173856243968758299_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ghQ9pmdPU5oAX-UDdbu&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT-VXmABWJ9YW3eMCdU-Lrl-W6JsybhtX29f0FlcH2x6kg&oe=632B9E41'
      })
    }
    const onLogout = () => {
      setUser()
    }
  return (
    <AuthContext.Provider value={{user,onLogin,onLogout}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider