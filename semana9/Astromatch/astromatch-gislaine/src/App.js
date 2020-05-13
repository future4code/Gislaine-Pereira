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

const apiUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gislaine-costa-julian"

function App() {
  const [escolheTela, setEscolheTela] = useState('perfis')
  
  let telaMostrada;
    
  if (escolheTela === 'perfis') {
      telaMostrada = <Perfis baseUrl={apiUrl}/>
    } else {
      telaMostrada = <Matchs baseUrl={apiUrl}/>
  }
  
  const escolhePerfis = () =>{
    setEscolheTela('perfis')
  }

  const escolheMatchs = () =>{
    setEscolheTela('matchs')
  }

  return (
    <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={escolhePerfis} aria-label="Ver Matchs" >
              <IconPerfil className='iconeAzul'/>
              <Left className='iconeRoxo'/>
              <Right className='iconeRoxo'/>
            </IconButton>

            <IconButton aria-label="Ver Matchs">
              <IconMatch className='iconeRoxo' onClick={escolheMatchs}/>
            </IconButton>
          </Toolbar>
        </AppBar>
        
      <section className='conteúdo-principal'>
        {telaMostrada}
      </section>
    </div>
  );
}

export default App;
