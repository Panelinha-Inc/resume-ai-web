import React, { useState} from "react";
import NavBar from '../NavBar/index';

import ls from 'local-storage';
import api from '../../api.js';

import swal from 'sweetalert';

import './style.css';

import logo from '../../assets/logo_wbg.svg';

export default function Home() {
    const [file, setFile] = useState(null);
    const [user, ] = useState(ls.get('user-info'));

    function handleSelectFile(event) {
        if (!event.target.files) {
            setFile(null);
            return;
        }
        setFile(event.target.files[0]);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        
        if (file) {
            const data = new FormData();
            
            data.append('file', file);
            
            const status_code = await api.post('/uploadfile', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'user-id': user['localId'],
                    'token': user['idToken'],
                }
            });
    
            swal('Deu tudo certo!', `Arquivo enviado com sucesso! Status Code ${status_code.status}`, 'success');
        } else {
            swal('Ops!', 'Não há nenhum arquivo selecionado!', 'error');
        }
    }

    return (
        <div className="App">
        <NavBar/>
        <header className="App-header">
            <div className='App-div-logo'>
                <img src={logo} className="App-logo" alt="logo" width="200" height="200"/>
                <h1 style={{marginLeft: '-40px'}}>ResumeAI</h1>
            </div>
            <p className='App-text' style={{ marginTop: '9px' }}>Extraia automaticamente informações de currículos escaneados</p>
            <form onSubmit={handleSubmit}>
                <div className='inputFile'>
                    <input onChange={handleSelectFile} type="file" id='fileInput' />
                    <label
                        htmlFor='fileInput'
                        className='App-button'
                        >Selecionar arquivo
                    </label>
                    <span>{file ? file.name : 'Nenhum arquivo selecionado'}</span>
                </div>
                
                <input type="submit" value="Processar arquivo" id='submitInput' />
                <label
                    htmlFor='submitInput'
                    className='App-button'
                    >Processar arquivo
                </label>
            </form>
        </header>
        </div>
    );
}