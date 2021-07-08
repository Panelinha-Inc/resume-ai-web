import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { FiUser, FiEdit, FiLogOut } from "react-icons/fi";
import {useHistory} from 'react-router-dom';
import swal from 'sweetalert';
import './style.css';
import ls from 'local-storage';

import logo from '../../assets/logo.svg';
import example_user from '../../assets/vitoria.jpeg';

export default function NavBar() {

  const history = useHistory();

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  async function logout() {
    const willLogout = await swal({
      title: "Tem certeza que deseja sair?",
      text: "Sua sessão será encerrada.",
      icon: "warning",
      buttons: {
        buttonOne: {
          text: "Cancelar",
          value: "firstVal",
          visible: true,
          className: "swal-btn-cancel",
          closeModal: true,
        },
        buttonTwo: {
          text: "Sair",
          value: "secondVal",
          visible: true,
          className: "swal-btn-confirm",
          closeModal: true
        },
      }
    });

    if (willLogout === "secondVal") {
      ls.set('user-info', null);
      history.push('/');
    }
  }

  return (
    <Navbar bg="light">
      <Navbar.Brand>
        <div>
          <ul className="topnav">
            <li>
              <Link className='spaced_elements' style={{textDecoration: 'none', display: 'flex'}} to='/home'>
                <img
                  src={logo}
                  width="62"
                  alt="ResumeAI logo"
                />
                <h1 className='style_link' style={{marginLeft: '10px'}}>ResumeAI</h1>
              </Link>
            </li>
            <li className="right">
              <i onClick={myFunction}>
                  <img
                      src={example_user}
                      width="45"
                      alt="User profile"
                      style={{borderRadius: '300px', padding: '12px', cursor: 'pointer'}}
                  />
              </i>
            </li>
            <li className="right">
              <Link style={{textDecoration: 'none'}} className='about' to='/about'>
                <h1 className='style_link'>Sobre</h1>
              </Link>
            </li>
            <li className="right">
              <Link style={{textDecoration: 'none'}} className='about' to='/my_resumes'>
                <h1 className='style_link'>Meus currículos</h1>
              </Link>
            </li>
          </ul>
        </div>
      </Navbar.Brand>
      <div id="myLinks">
        <div style={{borderTop: '1px solid #f2f2f2'}}/>
        <Link style={{textDecoration: 'none'}} to='/'>
          <i><FiUser color="#1f2526" size="26px"/></i>
          <p>Ver perfil</p>
        </Link>
        <Link style={{textDecoration: 'none'}} to='/'>
          <i><FiEdit color="#1f2526" size="26px"/></i>
          <p>Editar perfil</p>
        </Link>
        <Link style={{textDecoration: 'none'}} onClick={logout}>
          <i><FiLogOut color="#1f2526" size="26px"/></i>
          <p>Sair</p>
        </Link>
      </div>
    </Navbar>
  )
}