import React, { useState } from "react";

import './App.css';

import logo from './logo_wbg.svg';
import api from './api.js';

function App() {
  const [file, setFile] = useState();

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

  return (
    <div className="App">
      <header className="App-header">
        <label>ResumeAI</label>
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <input onChange={handleSelectFile} type="file" />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
