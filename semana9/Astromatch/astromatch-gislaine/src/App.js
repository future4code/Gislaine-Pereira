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
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const apiUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gislaine-costa-julian"

function App() {
  const [escolheTela, setEscolheTela] = useState('perfis')
  const [open, setOpen] = useState(false)

  const confirmaExclui = () => {
    setOpen(true);
  };

  const fechaConfirma = () => {
    setOpen(false);
  };

  
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
    setOpen(false)
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
              <IconButton onClick={confirmaExclui} aria-label="Resetar" >
                <Apagar fontSize={'large'} className='iconeRoxo'/>
              </IconButton>
            </Tooltip>
            <Dialog
              open={open}
              onClose={fechaConfirma}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              id='dialogo'
            >
              <DialogTitle id="alert-dialog-title">{"Você tem certeza que quer resetar?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Isso irá apagar todos os matchs e todas as suas escolhas
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button id="botao-confimra" onClick={fechaConfirma} >
                  Não
                </Button>
                <Button onClick={apagaTudo} id="botao-confimra" autoFocus>
                  Sim
                </Button>
              </DialogActions>
            </Dialog>
          </Toolbar>
        </AppBar>
        
      <section id='conteudo-principal'>
        {telaMostrada}
      </section>

    </div>
  );
}

export default App;
