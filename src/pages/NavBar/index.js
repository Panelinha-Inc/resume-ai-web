import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import './style.css';

import logo from '../../assets/logo.svg';

export default function NavBar() {

  return (
    <Navbar bg="light">
      <Navbar.Brand>
        <div className='div_navbar'>
          <Link className='spaced_elements' style={{textDecoration: 'none'}} to='/'>
            <img
              src={logo}
              width="62"
              height="60"
              alt="ResumeAI logo"
            />
            <h1 class='style_link' style={{marginLeft: '10px'}}>ResumeAI</h1>
          </Link>
          <Link style={{textDecoration: 'none'}} className='about' to='/about'>
            <h1 class='style_link'>About</h1>
          </Link>
        </div>
      </Navbar.Brand>
    </Navbar>
  )
}