import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/user/home" className="navbar-brand">HOME</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/stategov/requests" className="nav-link" style={{marginLeft:30}}>REQUEST TO CENTRAL</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user/crimestat" className="nav-link" style={{marginLeft:30}}>Allocation made</Link>

          </li>
          
        </ul>
        <a href="http://localhost:3000/" className="navbar-brand">LOGOUT</a>
        </div>
       
      </nav>
    );
  }
};