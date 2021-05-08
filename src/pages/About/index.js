import React from "react";
import NavBar from '../NavBar/index';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

import img_about from '../../assets/img_about.svg';
import acucena from '../../assets/acucena.png';
import helio from '../../assets/helio.jpeg';
import jederson from '../../assets/jederson.jpeg';
import vitoria from '../../assets/vitoria.jpeg';

import './style.css';

export default function About() {
    return (
        <div>
            <NavBar/>
            <header className='container'>
                <div className='div_about'>
                    <img src={img_about} alt="logo" width="300" height="300"/>
                    <p>
                        A ResumeAI é uma plataforma que facilita e automatiza processos de análise de currículos.<br /><br />
                        Utilizando técnicas de Processamento de Imagens, OCR e NLP, a ResumeAI visa extrair informações relevantes de currículos em PDF ou imagens, auxiliando o recrutador na sumarização das informações do currículo.
                    </p>
                </div>
                
                <div className='div_box_team_grid'>
                    <div className='div_box_team'>
                        <div className='div_box_developer'>
                            <div className='box_content'>
                                <div className='profile'>
                                    <img src={acucena} alt="logo" width="90" height="90"/>
                                </div>
                                <div>
                                    <h4>Açucena Rodrigues</h4>
                                    <p>Web developer</p>
                                    <div className='icons'>
                                        <a href="https://br.linkedin.com/in/acucena-rodrigues" target="_blank" rel="noreferrer">
                                            <AiFillLinkedin size={32} color="#6FBF92"/>
                                        </a>
                                        <a href="https://github.com/acucenarodrigues1998" target="_blank" rel="noreferrer">
                                            <AiFillGithub size={32} color="#6FBF92"/>
                                        </a>
                                        <a href="mailto:acucenarodrigues1998@gmail.com" target="_blank" rel="noreferrer">
                                            <AiFillMail size={32} color="#6FBF92"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='div_box_developer'>
                            <div className='box_content'>
                                <div className='profile'>
                                    <img src={helio} alt="logo" width="90" height="90"/>
                                </div>
                                <div>
                                    <h4>Hélio Rocha</h4>
                                    <p>Web developer</p>
                                    <div className='icons'>
                                        <a href="https://www.linkedin.com/in/helio-rocha-vieira-de-couto-junior/" target="_blank" rel="noreferrer">
                                            <AiFillLinkedin size={32} color="#6FBF92"/>
                                        </a>
                                        <a href="https://github.com/Gas-Helio" target="_blank" rel="noreferrer">
                                            <AiFillGithub size={32} color="#6FBF92"/>
                                        </a>
                                        <a href="mailto:junior0helio15@gmail.com" target="_blank" rel="noreferrer">
                                            <AiFillMail size={32} color="#6FBF92"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='div_box_developer'>
                            <div className='box_content'>
                                <div className='profile'>
                                    <img src={jederson} alt="logo" width="90" height="90"/>
                                </div>
                                <div>
                                    <h4>Jederson Luz</h4>
                                    <p>Web developer</p>
                                    <div className='icons'>
                                        <a href="https://br.linkedin.com/in/jedersonluz" target="_blank" rel="noreferrer">
                                            <AiFillLinkedin size={32} color="#6FBF92"/>
                                        </a>
                                        <a href="https://github.com/JedersonLuz" target="_blank" rel="noreferrer">
                                            <AiFillGithub size={32} color="#6FBF92"/>
                                        </a>
                                        <a href="mailto:jedersonalpha@gmail.com" target="_blank" rel="noreferrer">
                                            <AiFillMail size={32} color="#6FBF92"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='div_box_developer'>
                            <div className='box_content'>
                                <div className='profile'>
                                    <img src={vitoria} alt="logo" width="90" height="90"/>
                                </div>
                                <div>
                                    <h4>Vitória Carvalho</h4>
                                    <p>Web developer</p>
                                    <div className='icons'>
                                        <a href="https://www.linkedin.com/in/vitória-carvalho-90210b19a" target="_blank" rel="noreferrer">
                                            <AiFillLinkedin size={32} color="#6FBF92"/>
                                        </a>
                                        <a href="https://github.com/VitoriaCarvalho" target="_blank" rel="noreferrer">
                                            <AiFillGithub size={32} color="#6FBF92"/>
                                        </a>
                                        <a href="mailto:vitoriiacb@gmail.com" target="_blank" rel="noreferrer">
                                            <AiFillMail size={32} color="#6FBF92"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
