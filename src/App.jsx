import React, { useState } from 'react'
import { BrowserRouter, Routes,Route }from "react-router-dom"
import './App.css'
import Nav from './COMPONENTS/NAV/Nav'
import Footter from './COMPONENTS/FOOTTER/Footter'
import Home from './COMPONENTS/BODY/HOME/Home'
import Register from './COMPONENTS/BODY/REGISTER/Register'
import View from './COMPONENTS/BODY/VIEW/View'
import Edit from './COMPONENTS/BODY/EDIT/Edit'

function App() {
  return (
    <>
     <BrowserRouter>
     <Nav/>
     <Routes>

      <Route path='/' Component={Home}/>
      <Route path='/view/:id' Component={View}/>
      <Route path='Register' Component={Register}/>
      <Route path='/Footer' Component={Footter}/>
      <Route path='/edit/:id' Component={Edit}/>
     
     </Routes>
     
     </BrowserRouter>
     
    </>
  )
}

export default App
