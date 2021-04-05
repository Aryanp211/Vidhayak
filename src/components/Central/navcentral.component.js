
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
       
        <Link to="/home" className="navbar-brand">HOME</Link>
        
        <div className="collpase navbar-collapse">
        
        <ul className="navbar-nav mr-auto"style={{marginLeft:210}} >
          
          <li className="navbar-item">  
          <Link to="/Allocate" className="nav-link" style={{marginLeft:20}}>Allocate Money</Link>
          </li>

          <li className="navbar-item">
          <Link to='/Pending' className='nav-link' style={{marginLeft:20}}>Pending Requests</Link>
         </li>
         
         <li className="navbar-item">
          <Link to="/Authorized" className="nav-link" style={{marginLeft:20}}>Approved Requests</Link>
         </li>
       {/*}   <li className="navbar-item">
          <Link to="/statewisetransaction" className="nav-link" style={{marginLeft:20}}>State wise transactions</Link>
          </li> */}

          

          
          {/* <li className="navbar-item">
          <Link to="/AddCriminal" className="nav-link" style={{marginLeft:20}}>ADD CRIMINAL</Link>
          </li>
          <li className="navbar-item">
          <Link to="/ShowCriminal" className="nav-link" style={{marginLeft:20}}>SHOW CRIMINALS</Link>
          </li> */}
          
          </ul>
          <a href="http://localhost:3000/" className="navbar-brand">LOGOUT</a>
          
        </div>        
      </nav>
    );
  }
};
