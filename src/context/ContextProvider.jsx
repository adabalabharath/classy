import React, { createContext, useState } from 'react'

export const context=createContext()
const ContextProvider = ({children}) => {
     const [count,setCount]=useState(1)
     const [openSnackbar, setOpenSnackbar] = useState(false); 
     const increase=()=>{
        setCount(count+1)
     }
     const decrease=()=>{
        if(count>1)
        setCount(count-1)
     }
  return (
    <context.Provider value={{count,setCount,increase,decrease,openSnackbar, setOpenSnackbar}}>{children}</context.Provider>
  )
}

export default ContextProvider