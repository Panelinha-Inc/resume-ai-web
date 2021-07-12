import React, { useState, useRef } from "react";
import NavBar from '../NavBar/index';
import ls from 'local-storage';
import swal from 'sweetalert';
import './style.css';

import api from '../../api.js';


export default function Login() {

    const [user, ] = useState(ls.get('user-info'));
    const [name, setName] = useState(user['displayName']);
    const [filePic, setfilePic] = useState(user['profilePic']);
    const [urlImage, setUrlImage] = useState(user['profilePic'])
    const fileInput = useRef(null);
    const urlImg = URL;

    function onChange(event) {
        if (event.target.files.length === 1) {
            setfilePic(event.target.files[0])
            setUrlImage(urlImg.createObjectURL(event.target.files[0]));
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        
        if ((filePic !== user['profilePic']) || (name !== user['displayName'])) {
            const data = new FormData();
            
            if (filePic === user['profilePic']) {
                console.log('atim')
                const blob = new Blob([user['profilePic']], {type: 'image/png'});
                data.append('file', new File([blob], "omermo.png", {
                    type: blob.type,
                }));
            } else {
                data.append('file', filePic);
            }
            data.append('displayName', name)
            console.log(filePic)
            console.log(name)
            const status_code = await api.put('/user', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'user-id': user['localId'],
                    'token': user['idToken'],
                }
            });
            if (status_code.status === 200) {
                swal({title: `Alterações realizada com sucesso!`, text:`Status Code ${status_code.status}`, icon:'success'});
                user['displayName'] = name;
                console.log(user)
                ls.set('user-info', user)
            } else {
                swal({
                    title: 'Erro',
                    text: `${status_code}`,
                    icon: 'error'
                })
            }
        } else {
            swal({title: `Sem alterações!`, icon: "info"});
        }
    } 

    async function handleNewPass() {
        const status_code = await api.post('/resetpassword', {
            'email': user['email']
        });

        if (status_code.status === 'success') {
            swal({
                title: 'Sucesso',
                text: 'Verifique o email',
                icon: 'success'
            });
        } else {
            swal({
                title: 'Erro',
                text: `${status_code.data}`,
                icon: 'error'
            });
        }
    }

    return (
        <div className='App'>
            <NavBar/>
            <div className='App-body' style={{height : '88vh'}}>
                <div className='card' style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 10 }}>
                    <div className='column_profile'>
                        <img
                            src={urlImage}
                            alt="User profile"
                            onClick={() => fileInput.current.click()}
                            style={{borderRadius: '100px', cursor: 'pointer', width: 100, height: 100}}
                        />
                        <input
                            type='file'
                            name='image'
                            ref={fileInput}
                            onChange={onChange}
                            style={{ display: 'none' }}
                        />
                        <p>{user['email']}</p>
                    </div>
                    <div className='column_editable'>
                        <form onSubmit={handleSubmit}>
                            <span>
                                
                            <label for='fname' style={{float: 'left'}}>Nome:</label>
                            <input
                                name="name"
                                type="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Nome"
                                id='fname'
                            />
                            </span>
                            <br></br>
                            <button className='button_forma'>Salvar alterações</button>
                        </form>
                        <p>Esqueceu a senha?</p>
                        <button onClick={handleNewPass} className='button_forma'>Redefinir senha</button>
                    </div>
                </div>
            </div>
        </div>
    )
}