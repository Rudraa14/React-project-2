import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Services from './Component/Services/Services'
import Home from './Component/Home/Home'
const Router = () => {
  return (
    <div>
       <Header/>
                <Routes>
                  <Route path='' element={<Home/>}/>
                 <Route path='/about' element={<About/>}/>
                 <Route path='/services' element={<Services/>}/>
                 <Route path='/contact' element={<Contact/>}></Route>
                 </Routes>
      <Footer/>
    </div>
  )
}

export default Router
