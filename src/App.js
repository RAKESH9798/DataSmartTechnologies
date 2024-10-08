import React from 'react'
import HomePage from './Pages/Home/HomePage'
import FooterItems from './Components/Footer/FooterItems'
import NavItems from './Components/Navigation/NavItems'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Services from './Pages/Service/Services'
import Contact from './Pages/Contact/Contact'
import './index.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavItems/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <FooterItems/>
      </BrowserRouter>
    </div>
  )
}

export default App

