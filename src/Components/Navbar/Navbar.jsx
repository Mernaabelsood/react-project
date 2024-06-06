import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-4">
                <div className="container">
                    <button className='home-btn'> <Link className="navbar-brand text-white fs-3" to="">START FRAMEWORK</Link></button>
                    
                   
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <button className='navbar-btn me-3'> <Link className="nav-link active text-white fw-bold me-3 fs-5" aria-current="page" to="about">About</Link></button>
                               
                            </li>
                            <li className="nav-item">
                            <button className='navbar-btn me-3'> <Link className="nav-link text-white fw-bold me-3 fs-5" to="portfolio">Portfolio</Link></button>
                                
                            </li>
                            <li className="nav-item">
                                <button className='navbar-btn'>  <Link className="nav-link text-white fw-bold fs-5" to="contact">Contact</Link></button>
                               
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;