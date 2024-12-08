import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Country from '../Pages/Country'
import CountrySingle from '../Pages/CountrySingle'


const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Country/>}/>
        <Route path='/:contryName' element={<CountrySingle/>}/>
    </Routes>
  )
}

export default AppRoutes