import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='naav-bar'>
       <Link className='regiter-left' to='/'>Home</Link>
      <Link className='home-right' to='/Register'>Register</Link>
    </div>
  )
}

export default Nav
