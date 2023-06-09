import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
const Header = () => {
  return (
    <div className='sticky-top'>
      <nav className="navbar navbar-expand-lg">
  <div className="container ">
    <h1>Techstar</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <HashLink to={"/#home"} className='nav-link'>Home</HashLink>
        </li>
        <li className="nav-item">
        <Link to={"/contact"} className='nav-link'>Contact</Link>
        </li>
        <li className="nav-item">
        <HashLink to={"/#about"} className='nav-link'>About</HashLink>
        </li>
        <li className="nav-item">
        <HashLink to={"/#brands"} className='nav-link'>Brands</HashLink>
        </li>
        <li className="nav-item">
        <Link to={"/servives"} className='nav-link'>Services</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
