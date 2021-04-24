import React, { useState, useRef } from "react";
import NavBar from '../NavBar/index'
import Button from 'react-bootstrap/Button'

import logo from '../../assets/logo_wbg.svg';
import api from '../../api.js';

import './style.css';

export default function Home() {
    const [file, setFile] = useState({name: "Nenhum arquivo selecionado"});

    function handleSelectFile(event) {
        if (!event.target.files) {
        return;
        }
        setFile(event.target.files[0]);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData();

        console.log(file);
        data.append('file', file);

        const status_code = await api.post('/uploadfile', data);

        alert(`Arquivo enviado com sucesso! Status Code ${status_code.status}`);
    }

    const fileInput = useRef(null)
    const submitInput = useRef(null)

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
                <input onChange={handleSelectFile} type="file" ref={fileInput} style={{ display: 'none' }} className='App-input' />
                <div style={{ marginTop: '20px' }}>
                    <button
                        onClick={() => fileInput.current.click()}
                        className='App-button'
                        >Selecionar arquivo
                    </button>
                    <span style={{ fontSize: '15px', marginTop: '10px', marginLeft: '8px'}}>{file.name}</span>
                </div>
                <button
                    onClick={() => submitInput.current.click()}
                    className='App-button'
                    style={{marginTop: '30px'}}
                    >Processar
                </button>
                <input type="submit" value="Processar arquivo" ref={submitInput} style={{ display: 'none' }} />
            </form>
        </header>
        </div>
    );
}