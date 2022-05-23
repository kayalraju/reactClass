import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <a className="navbar-brand" href="#">Abc.com</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/service">Service</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/menu">Menu</NavLink>
      </li>
     
    </ul>
   
  </div>
</nav>
    </div>
  )
}
