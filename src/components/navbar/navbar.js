import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa';



const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);



    return (
        <nav>
            <div className='nav-container'>
                <div className='logo'>

                    <h2>
                        <Link to='/' className='logo-link' onClick={handleClick}>myContacts</Link>
                    </h2>
                    
                </div>

                <div className="navbar-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                <div className={click ? "button-container active" : "button-container"}>
                    <div 
                        className="nav-button" onClick={handleClick}
                    >
                        <Link to="/add" className="nav-btn-link" onClick={handleClick} >Add Contacts</Link>
                    </div>

                    <div 
                        className="nav-button" onClick={handleClick}
                    >
                        <Link to="/view" className="nav-btn-link">View Contacts</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar



















