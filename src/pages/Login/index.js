import React, { useState } from "react";
import './style.css';
import logo from '../../assets/logo_wbg_2.svg';
import { FiMail } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom';
import api from "../../api";
import ls from 'local-storage';

export default function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const status_code = await api.get('/login', {
            'auth': {
                'username': email,
                password
            }
        });

        if (status_code.data.status_code === 200) {
            ls.set('user-info', status_code.data.data);
            history.push('/home');
        } else {
            //alert(`Error message: ${status_code.data.data}`);
            swal("Ops!", `Error message: ${status_code.data.data}`, "error");
        }
    }

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
                    <form onSubmit={handleSubmit}>
                        <label className='style_label'>
                            <i className='icon'><FiMail color="#AAA9A9" size="28px"/></i>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                id='input_id'
                                style={{marginBottom: '20px'}}
                                required
                            />

                            <i className='icon'><RiLockPasswordLine color="#AAA9A9" size="30px"/></i>
                            <input
                                name="password"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
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