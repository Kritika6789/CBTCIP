import React from 'react'
import {
    Link
  } from "react-router-dom";
// import Event1 from './Event1';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/" style={{fontFamily:`'Brush Script MT', cursive`,color:"Red",fontSize:"40px",marginLeft:"20px"}}>Eventer</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link to="/signin" className="nav-link">SignIn</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">LogIn</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/getdata">enter</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/rooms">Hotel</Link>
      </li>
      
    </ul>

  </div>
</nav>

    </div>
  )
}

export default Navbar
