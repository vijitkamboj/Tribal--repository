import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'
const Nav = () => {
    return(
        <div id="nav">
                <div id ="nav-logo">
               
               </div>
            <div className="navbtn"><Link to="/home" className='links'>Home</Link></div>
            <div className="navbtn"><Link to="/home#about" className='links'>About</Link></div>
            <div className="navbtn"><Link to="/home" className='links'>Contact Us</Link></div>
            <div className="navbtn"><Link to="/home" className='links'>Categories</Link></div>
            <div className="navbtn"><Link to="/home" className='links'>Dashboad</Link></div>
            <div className="navbtn"><Link to="/login" className='links'>Login</Link></div>
            
        </div>
    )
}

export default Nav;