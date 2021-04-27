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
          <img
            src={logo}
            width="62"
            height="60"
            alt="ResumeAI logo"
          />
          <h1 className='spaced_elements'>ResumeAI</h1>
          <h1 className='about'>About</h1>
        </div>
      </Navbar.Brand>
    </Navbar>
  )
}