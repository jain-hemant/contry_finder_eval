import React, { createContext, useState } from 'react'

export const countryContext = createContext()
const CounrtyContextProvider = ({children}) => {
  const [country, setCountry] = useState([])
  return (
    <countryContext.Provider value={{country,setCountry}}>
        {children}
    </countryContext.Provider>
  )
}

export default CounrtyContextProvider