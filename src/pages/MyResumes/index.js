import React, { useEffect, useState } from "react";
import NavBar from '../NavBar/index';
import ls from 'local-storage';
import { FiSearch } from "react-icons/fi";
import {Link} from 'react-router-dom';

// import iconDown from '../../assets/file_download.svg';
// import iconDel from '../../assets/delete.svg'
import api from '../../api.js';
import './style.css';

export default function MyResumes() {

    const [user, ] = useState(ls.get('user-info'));
    const [result, setResult] = useState([]);

    useEffect(() => {
        api.get('/documents/', {
            headers: {
              'user-id': user['localId'],
              'token': user['idToken'],
            }
          }).then(response => {
            setResult(response.data);
          });
    }, [user]);

    return (
        <div className='App'>
            <NavBar/>
            <div className='App-body' style={{height : '89vh'}}>
                <section id="page">
                    <div className='search-bar border-all back-all'>
                        <i className='icon-cv'><FiSearch color="#AAA9A9" size="28px"/></i>
                        <input className='search-cv-inp'></input>
                        <button className='search-cv-btn'>Buscar</button>
                    </div>
                    <div className='container-cv border-all back-all'>
                        {result.map(element => (
                            <Link key={element.fileId} className='item-cv border-all' to={`/results/${element.fileId}`}>
                                <div className='fxl'>
                                    {/* <div className='download-pdf border-all'>
                                        <img src={iconDown} className="center-item" alt="Download" width="24" height="24"/>
                                        <p className="center-item">PDF</p>
                                    </div> */}
                                    <p className="center-item" style={{marginRight: '5px'}}>Nome:</p>
                                    <p className="center-item">{element.fileId}</p>
                                </div>
                                <div className='fxr'>
                                    <div className='process-bar border-all' style={{backgroundColor: (element.status === 'processed')? '#6FBF94': '#FFED4B'}}>
                                        <p className="process center-item">{(element.status === 'processed')? 'Processado': 'Processando'}</p>
                                    </div>
                                    {/* <img src={iconDel} className='iconDel center-item' alt='Delete' width="24" height="24"/> */}
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className='container-filter border-all back-all'>
                        <div className='filter'>
                            <div className='item-filter'>
                                <h3>Formações</h3>
                                <input type="checkbox" name="i1" value="Engenharia eletrica"/>
                                <label for='i1'>Engenharia eletrica</label><br/>
                                <input type="checkbox" name="i2" value="Sistemas de Informação"/>
                                <label for='i2'>Sistemas de Informação</label><br/>
                                <input type="checkbox" name="i3" value="Sistemao"/>
                                <label for='i3'>Sistemas</label><br/>
                                <input type="checkbox" name="i4" value="Sistemas"/>
                                <label for='i4'>Sistemas</label><br/>
                            </div>

                            <div className='item-filter'>
                                <h3>Idiomas</h3>
                                <input type="checkbox" name="i1" value="Português"/>
                                <label for='i1'>Português</label><br/>
                                <input type="checkbox" name="i2" value="Inglês"/>
                                <label for='i2'>Inglês</label><br/>
                                <input type="checkbox" name="i3" value="Espanhol"/>
                                <label for='i3'>Espanhol</label><br/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}