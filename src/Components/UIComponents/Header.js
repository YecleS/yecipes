import React, { useState } from 'react';
import '../Styles/Header.css';
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
  const[isNavBarOpen, isSetNavBarOpen] = useState(false);
  const location = useLocation();

  const toggleNavBar = () => {
    isSetNavBarOpen(!isNavBarOpen);
  }

  return (
    <div className={`header ${location.pathname === '/about-us' || location.pathname === '/contact-us' ? 'header__other-page-styling':''}`}>
        <div className='header__content-wrapper'>
            <div className='header__logo-wrapper'>
              <p className='header__logo'>Yecipes.</p>
            </div>
            <div className={`header__nav-wrapper ${isNavBarOpen ? 'header__nav-wrapper-active': ''}`}>
              <i className="header__nav-icon fa-solid fa-xmark" onClick={toggleNavBar}></i>
              <nav className='header__nav'>
                <NavLink to='/' className='header__nav-link' onClick={toggleNavBar}><li className='header__link'>Home</li></NavLink>
                <NavLink to='/catalog' className='header__nav-link' onClick={toggleNavBar}><li className='header__link'>Catalog</li></NavLink>
                <NavLink to='/about-us' className='header__nav-link' onClick={toggleNavBar}><li className='header__link'>About Us</li></NavLink>
                <NavLink to='/contact-us' className='header__nav-link' onClick={toggleNavBar}><li className='header__link'>Contact Us</li></NavLink>
                <button className='header__reach-out' onClick={toggleNavBar}>Reach Out</button>
              </nav>             
            </div>
            <div className='header__reach-out-wrapper'>
              <button className='header__reach-out'>Reach Out</button>
            </div>
            <i className="header__nav-icon fa-solid fa-bars" onClick={toggleNavBar}></i>
        </div>
    </div>
  )
}

export default Header
