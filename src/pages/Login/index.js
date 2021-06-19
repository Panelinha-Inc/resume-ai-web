import React from "react";
import './style.css';
import logo from '../../assets/logo_wbg_2.svg';

export default function About() {
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
                <div className="content_column">
                    <h1 style={{fontSize: '48px', textAlign: 'center'}}>Login</h1>
                    <form onSubmit={() => {}}>
                        <label>
                            <p>{'Desisto, não funciona, era pra ter um input aqui ->'}</p>
                                <input name="name" type="text"/>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}