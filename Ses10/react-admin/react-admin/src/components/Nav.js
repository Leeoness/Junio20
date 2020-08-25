import React from 'react'
import {NavLink} from 'react-router-dom'
import '../sass/styles.scss'

const Nav = () => {
  return (
    <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </nav>  
  )
}

export default Nav