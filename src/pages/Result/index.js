import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import NavBar from '../NavBar/index';

import './style.css';

import cv_image_00 from './74d83d045a54df5bc6259ae7ad279c21_00.png';
import cv_image_01 from './74d83d045a54df5bc6259ae7ad279c21_01.png';

export default function Result() {
  const [images, setImages] = useState([cv_image_00, cv_image_01]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className='app'>
      <NavBar />
      <div className='container'>
        <h1>ResumeAI</h1>

        <div className='content'>
          <div className='pdf-box'>
            <div className='controller'>
              <button onClick={() => {
                setActiveImageIndex(activeImageIndex - 1);
              }}><FiChevronLeft size={40} color="#6FBF92" /></button>

              <button style={{left: 0}} onClick={() => {
                setActiveImageIndex(activeImageIndex + 1);
              }}><FiChevronRight size={40} color="#6FBF92" /></button>
            </div>

            {images.map((image, index) => {
              return (
                <img 
                src={image}
                className={index === activeImageIndex ? 'active' : ''}  
                alt={`Página ${(index + 1)}`} 
                />
                );
            })}
          </div>

          <div className='data-box'>
            <p>
              <b>Nome:</b> Jederson Sousa Luz
            </p>
            <hr />
            <p>
              <b>Educação:</b><br />
                Bacharelado em Sistemas de Informação<br />2017 - Presente<br /><hr />
                Médio/Técnico em Informática<br />2012 - 2017<br />
            </p>
            <hr />
            <p>
              <b>Experiência profissional:</b><br />
                Pesquisador em Visão e Inteligência Computacional<br />Universidade Federal do Piauí - UFPI<br />2018 - Presente<hr />
                Estagiário em Processamento de  Linguagem Natural e Machine Learning<br />Lawtech JurisfAI<br />Jul 2020 - Fev 2021 <br />
            </p>
            <hr />
            <p>
              <b>Procurando por:</b><br />
              “Trabalhar em uma organização onde
               eu possa agregar desenvolvendo
               solução com Inteligência Artificial e
               Algoritmos de Machine Learning,
               aplicados ao processamento de
               imagens, áudios e/ou texto. Busco um
               ambiente onde eu possa aperfeiçoar
               minhas habilidades técnicas e
               profissionais e crescer junto da
               organização.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}