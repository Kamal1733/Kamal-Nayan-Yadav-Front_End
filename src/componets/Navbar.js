import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import imgg from "../SteelEye_Logo.jpg";
 
const Navbar = () => {
  return (
    <div className="navbar">
      
       <div>
          <Link to="/"  style={{textDecoration: 'none'}}>Home</Link>
          </div>
          <div>
      <img className='image' src={imgg} alt="" />
      </div>
          <div>
          <Link to="/Answer"  style={{textDecoration: 'none'}}>Question/Answer</Link>
       </div>
    </div>
  );
};

export default Navbar;
