import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm" style={{ paddingLeft: '185px'}}>

      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img src="/Logo.png" alt="Logo" width="140" height="70" className="d-inline-block align-text-top" style={{ marginLeft: "20px" }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-start" id="navbarNavDropdown">
          <ul className="navbar-nav ms-5"> 
            <li className="nav-item">
              <Link className="nav-link active fw-bold" aria-current="page" to="/" style={{ fontFamily: "Arial Nova, sans-serif", fontSize: "15px" }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/aboutus" style={{ fontFamily: "Arial Nova, sans-serif", fontSize: "15px" }}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/ourservices" style={{ fontFamily: "Arial Nova, sans-serif", fontSize: "15px" }}>Our Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/contactus" style={{ fontFamily: "Arial Nova, sans-serif", fontSize: "15px" }}>Contact Us</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  )
}
