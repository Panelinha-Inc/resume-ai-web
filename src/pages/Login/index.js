import React from "react";
import './style.css';
import logo from '../../assets/logo_wbg_2.svg';
import { FiMail } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import {useHistory} from 'react-router-dom';

export default function Login() {

    const history = useHistory();

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
            <div className="column1">
                <div className="content_column">
                    <div className='column1-div-logo'>
                        <img src={logo} className="logo" alt="logo" width="200" height="200"/>
                        <h1>ResumeAI</h1>
                    </div>
                    <p>Extraia automaticamente informações de currículos escaneados</p>
                </div>
            </div>

            <div className="column2">
                <div style={{marginTop: '260px'}}>
                    <h1 style={{fontSize: '48px', textAlign: 'center'}}>Login</h1>
                    <form onSubmit={() => {}}>
                        <label className='style_label'>
                            <i className='icon'><FiMail color="#AAA9A9" size="28px"/></i>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                id='input_id'
                                style={{marginBottom: '20px'}}
                                required
                            />

                            <i className='icon'><RiLockPasswordLine color="#AAA9A9" size="30px"/></i>
                            <input
                                name="password"
                                type="password"
                                placeholder="Senha"
                                id='input_id'
                                required
                            />
                        </label>
                        <div className='div_button'>
                            <button 
                                type="submit"
                                className='button_form'
                                formNoValidate
                                onClick={() => {history.push('/signup')}}
                            >Criar conta</button>

                            <button
                                type="submit"
                                className='button_form'
                            >Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}