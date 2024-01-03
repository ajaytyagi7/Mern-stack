import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
  <div >
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarNav ">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to='/'>
            Home
          </NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to='/Login'>
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/Signup'>
            Signup
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "to='/Contact'>
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "to='/Eventhandling'>
            Eventhandling
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "to='/StateManagement'>
            StateManagement
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "to='/Page'>
            Page
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "to='/Todo'>
            Todo
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "to='/Browseproduct'>
          Browseproduct
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "to='/Productcard'>
          Productcard
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  </div>
  )
}

export default Navbar