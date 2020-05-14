import React, { useState, useEffect } from "react";
import "./App.css";
import IconButton from '@material-ui/core/IconButton';
import Perfis from './components/perfis'
import Matchs from './components/matchs'
import IconMatch from '@material-ui/icons/Favorite'
import Left from '@material-ui/icons/Undo'
import Right from '@material-ui/icons/Redo'
import IconPerfil from '@material-ui/icons/Group'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Apagar from '@material-ui/icons/DeleteForever'
import axios from "axios";
import Tooltip from '@material-ui/core/Tooltip';

const apiUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gislaine-costa-julian"

function App() {
  const [escolheTela, setEscolheTela] = useState('perfis')
  const [open, setOpen] = useState(false)
  
  const apagaTudo = () =>{
    console.log("funciou")
    const body ={
        id: "PatusZf4mHH6UoZfYC8I"
    }
    axios
      .put(`${apiUrl}/clear`, body)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err);
      });
   
  }
  
  const escolhePerfis = () =>{
    setEscolheTela('perfis')
  }

  const escolheMatchs = () =>{
    setEscolheTela('matchs')
  }

  let telaMostrada;
    
  if (escolheTela === 'perfis') {
      telaMostrada = <Perfis baseUrl={apiUrl}/>
    } else {
      telaMostrada = <Matchs baseUrl={apiUrl}/>
  }

  return (
    <div className="App">
        <AppBar position="static" >
          <Toolbar className='Cabecalho' >
            <IconButton onClick={escolhePerfis} aria-label="Ver Matchs" >
              <div id='icone-perfil' >
                <IconPerfil fontSize={'large'} className='iconeRoxo'/>
                <Left fontSize={'small'} className='iconeRoxo'/>
                <Right fontSize={'small'} className='iconeRoxo'/>
              </div>
            </IconButton>

            <IconButton IconButton onClick={escolheMatchs} id="icone-match" aria-label="Ver Matchs" >
              <IconMatch fontSize={'large'} className='iconeRoxo' onClick={escolheMatchs}/>
            </IconButton>

            <Tooltip title="Apagar Tudo" arrow >
              <IconButton onClick={apagaTudo} aria-label="Resetar" >
                <Apagar fontSize={'large'} className='iconeRoxo'/>
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        
      <section id='conteudo-principal'>
        {telaMostrada}
      </section>

    </div>
  );
}

export default App;
