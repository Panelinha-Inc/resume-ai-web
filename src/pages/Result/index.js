import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import NavBar from '../NavBar/index';

import './style.css';

import result from './output.json';

export default function Result() {
  const [images, setImages] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setImages(result.paginas);
  }, []);

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
                activeImageIndex < (images.length - 1) ? setActiveImageIndex(activeImageIndex + 1) : setActiveImageIndex(activeImageIndex);
              }}><FiChevronRight size={40} color="#6FBF92" /></button>
            </div>

            {images.map((image, index) => {
              return (
                <img 
                src={`images/${image}`}
                className={index === activeImageIndex ? 'active' : ''}  
                alt={`Página ${(index + 1)}`} 
                />
                );
            })}
          </div>

          <div className='data-box'>
            <p>
              <b>Dados Pessoais:</b><br />
              <b>Nome:</b> {result.dados_pessoais.name} <br />
              <b>Telefone:</b> {result.dados_pessoais.contato.telefone} <br />
              <b>Email:</b> {result.dados_pessoais.contato.email} <br />
            </p>
            <hr />
            <p>
              <b>Educação:</b><br />
                {result.educacao.itens.map((item, index) => {
                  return (
                    <>
                    {item.curso}<br />{item.ano_inicio} - {item.ano_conclusao}<br /><hr />
                    </>
                  );
                })}
            </p>
            <p>
              <b>Experiência profissional:</b><br />
                {result.experiencias.itens.map((item, index) => {
                  return (
                    <>
                    {item.cargo}<br />{item.empresa}<br />{item.ano_inicio} - {item.ano_fim}<br /><hr />
                    </>
                  );
                })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}