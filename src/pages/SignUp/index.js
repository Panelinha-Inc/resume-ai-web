import React, { useState } from "react";
import './style.css';
import logo from '../../assets/logo_wbg_2.svg';
import { FiMail, FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import {useHistory} from 'react-router-dom';
import api from "../../api";
import ls from 'local-storage';

export default function SignUp() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        if (password1 === password2) {
            const status_code = await api.post('/signup', {
                'displayName': name,
                'email': email,
                'password' : password1
            });
            
            if (status_code.data.status_code === 201) {
                ls.set('user-info', status_code.data.data);
                history.push('/home');
            } else {
                alert(`Error message: ${status_code.data.data}`);
                console.log(status_code.data.data)
            }
        } else {
            alert('As senhas estão diferentes')
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
                <div style={{marginTop: '200px'}}>
                    <h1 style={{fontSize: '48px', textAlign: 'center'}}>Crie sua conta</h1>
                    <form onSubmit={handleSubmit}>
                        <label className='style_label'>
                            <i className='icon'><FiUser color="#AAA9A9" size="28px"/></i>
                            <input
                                name="name"
                                type="text"
                                placeholder="Nome"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                id='input_id'
                                style={{marginBottom: '20px'}}
                                required
                            />

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
                                placeholder="Senha"
                                value={password1}
                                onChange={e => setPassword1(e.target.value)}
                                id='input_id'
                                style={{marginBottom: '20px'}}
                                required
                            />

                            <i className='icon'><RiLockPasswordLine color="#AAA9A9" size="30px"/></i>
                            <input
                                name="confirm_password"
                                type="password"
                                placeholder="Confirmar senha"
                                value={password2}
                                onChange={e => setPassword2(e.target.value)}
                                id='input_id'
                                required
                            />
                        </label>
                        <div className='div_button'>
                            <button
                                type="submit"
                                className='button_form'
                                formNoValidate
                                onClick={() => {history.push('/')}}
                            >Voltar</button>
                            <button type="submit" className='button_form'>Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}