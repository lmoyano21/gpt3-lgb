import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () =>(
  <>
  <p><Link to={`home`}>Home</Link></p>
  <p><a href='#my-web'>Who am I?</a></p>
  <p><a href='#possibility'>My Skills</a></p>
  <p><a href='#features'>Technologies</a></p>
  <p><a href='#blog'>Experience</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="myweb__navbar">
      <div className="myweb__navbar-links">
        <div className="myweb__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="myweb__navbar-links_container">
          <Menu />  
        </div>
      </div>
      <div className="myweb__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="myweb__navbar-menu" >
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="myweb__navbar-menu_container scale-up-center" > 
            <div className="myweb__navbar-container-links">
              <Menu />
              <div className="myweb__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar