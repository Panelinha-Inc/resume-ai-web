import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import NavBar from '../NavBar/index';

import './style.css';

import { useParams } from "react-router-dom";
import ls from 'local-storage';
import api from '../../api';

export default function Result() {
  const params = useParams();
  const [user, ] = useState(ls.get('user-info'));
  const [result, setResult] = useState();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // api.get(`document/?fileId=${params.fileId}`, {
    api.get(`document/?fileId=74d83d045a54df5bc6259ae7ad279c21`, {
      headers: {
        'user-id': user['localId'],
        'token': user['idToken'],
      }
    }).then(response => {
      setResult(response.data);
    });
  }, [user, params]);

  if (!result) {
    return <p>Loading...</p>;
  }

  return (
    <div className='app'>
      <NavBar />
      <div className='container'>
        <h1>ResumeAI</h1>

        <div className='content'>
          <div className='pdf-box'>
            <div className='controller'>
              <button onClick={() => {
                activeImageIndex > 0 ? setActiveImageIndex(activeImageIndex - 1) : setActiveImageIndex(activeImageIndex);
              }}><FiChevronLeft size={40} color="#6FBF92" /></button>

              <button style={{left: 0}} onClick={() => {
                setActiveImageIndex(activeImageIndex + 1);
                activeImageIndex < (result.pages.length - 1) ? setActiveImageIndex(activeImageIndex + 1) : setActiveImageIndex(activeImageIndex);
              }}><FiChevronRight size={40} color="#6FBF92" /></button>
            </div>

            {result.pages.map((image, index) => {
              return (
                <img 
                src={image}
                key={index}
                className={index === activeImageIndex ? 'active' : ''}  
                alt={`Página ${(index + 1)}`} 
                />
                );
            })}
          </div>

          <div className='data-box'>
            <p>
              <b>Dados Pessoais:</b><br />
              <b>Nome:</b> {result['Dados pessoais']['name']} <br />
              <b>Email:</b> {result['Dados pessoais']['Contato']['Email']} <br />
              <b>GitHub:</b> <a href={result['Dados pessoais']['Contato']['GitHub']}>
                {result['Dados pessoais']['Contato']['GitHub']}
              </a> <br />
              <b>LinkedIn:</b> <a href={result['Dados pessoais']['Contato']['LinkedIn']}>
                {result['Dados pessoais']['Contato']['LinkedIn']}
              </a> <br />
              <b>Telefones:</b><br />
                {result['Dados pessoais']['Contato']['Telefones'].map((telefone, index) => {
                  return (
                    <>
                      &nbsp;&nbsp;&nbsp;&nbsp;{telefone}<br />
                    </>
                  );
                })}
              <b>Outros:</b><br />
                {result['Dados pessoais']['Contato']['Outros'].map((outro, index) => {
                  return (
                    <>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <a href={outro}>
                        {outro}
                      </a><br />
                    </>
                  );
                })}
                <b>Data de nascimento:</b> {result['Dados pessoais']['Data de nascimento']} <br />
                <b>Endereço:</b> {result['Dados pessoais']['Endereço']['CEP']} <br />
            </p>
            <hr />
            {/* <p>
              <b>Educação:</b><br />
                {result.educacao.itens.map((item, index) => {
                  return (
                    <>
                    {item.curso}<br />{item.ano_inicio} - {item.ano_conclusao}<br /><hr />
                    </>
                  );
                })}
            </p> */}
            <p>
              <b>Experiência profissional:</b>
              {result['Experiências profissionais']}
            </p>
            <hr />
            <p>
              <b>Idiomas:</b><br />
                {result['Idiomas'].map((idioma, index) => {
                  return (
                    <>
                      &nbsp;&nbsp;&nbsp;&nbsp;{idioma}<br />
                    </>
                  );
                })}
            </p>
            {/* <p>
              <b>Experiência profissional:</b><br />
                {result.experiencias.itens.map((item, index) => {
                  return (
                    <>
                    {item.cargo}<br />{item.empresa}<br />{item.ano_inicio} - {item.ano_fim}<br /><hr />
                    </>
                  );
                })}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}