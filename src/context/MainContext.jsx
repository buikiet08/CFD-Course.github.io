import React,{useState} from 'react'

export const MainContext = React.createContext()

function MainProvider({children}) {
    const [data,setData] = useState({
      status: false,
      name: ''
    })
  return (
    <MainContext.Provider value={{data,setData}}>
        {children}
    </MainContext.Provider>
  )
}

export default MainProvider