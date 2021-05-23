import React from 'react';

import NavBar from '../NavBar/index';

import './style.css';

import cv_image from './74d83d045a54df5bc6259ae7ad279c21_00.png';

export default function Result() {
  return (
    <div className='app'>
      <NavBar />
      <div className='container'>
        <h1>ResumeAI</h1>

        <div className='content'>
          <div className='pdf-box'>
            <img src={cv_image} alt='Page 1' />
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