import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import "../Pages.css";
import CabecalhoAdmin from "../../components/CabecalhoAdmin";
import Rodape from "../../components/Rodapé";
import Fundo from "../../img/fundo4.jpg";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import EnviarIcon from '@material-ui/icons/Send';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import InputData from "../../components/InputData";
import FuncaoLogin from "../../hooks/Login"
import Plutao from "../../img/plutão.jpg"
import Jupter from "../../img/jupiter.jpg"
import Ganimedes from "../../img/ganimedes.jpg"
import Marte from "../../img/marte.jpg"
import Netuno from "../../img/netuno.jpg"
import Saturno from "../../img/saturno.jpg"
import Tita from "../../img/tita.jpg"
import Mercurio from "../../img/Mercurio.jpg"
import Nebula from "../../img/nebula.jpg"


const MyTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#ff8035",
      main: "#ff5f00",
      dark: "#e13e00",
      contrastText: "#1f0c01"
    },
    secondary: {
      dark: "#732000",
      main: "#1f0c01",
      light: "rgba(255, 255, 255, 0.4)",
      contrastText: "#ff5f00",
    }
  }
})

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const TelaToda = styled.div `
  background-image: url("${Fundo}");
  background-color: #1b1001;
  max-width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const astros = [{
    value: 'Marte',
    label: 'Marte',
  },
  {
    value: 'Jupiter',
    label: 'Júpiter',
  },
  {
    value: 'Mercúrio',
    label: 'Mercúrio',
  },
  {
    value: 'Netuno',
    label: 'Netuno',
  },
  {
    value: 'Saturno',
    label: 'Saturno',
  },
  {
    value: 'Plutão',
    label: 'Plutão',
  },
  {
    value: 'Titã',
    label: 'Titã',
  },
  {
    value: 'Ganimedes',
    label: 'Ganimedes',
  },
];

const NovaRota = (props) => {
  FuncaoLogin()
  const [destino, setDestino] = useState('')
  const [titulo, setTitulo] = useState('')
  const [data, setData] = useState('')
  const [duracao, setDuracao] = useState('')
  const [descricao, setDescricao] = useState('')
  const [openAlertSucesso, setOpenAlertSucesso] = useState(false);
  const [openAlertErro, setOpenAlertErro] = useState(false);

  useEffect(() => {
    escolheAstro();
  }, [destino]);

  const limpaTudo = () => {
    setDestino('');
    setTitulo('');
    setData('');
    setDuracao('');
    setDescricao('');
  }

  const formSucesso = () => {
    setOpenAlertSucesso(true);
  };

  const formErro = (erro) => {
    setOpenAlertErro(true);
    console.log(erro);
  };

  const cadastraViagem = () =>{
    const body ={
        name: {titulo},
        planet: {destino},
        date: {data},
        description: {descricao},
        durationInDays: {duracao}
    }
    axios
      .post(`${props.baseUrl}/trips`, body)
      .then(response => {
        formSucesso();
        limpaTudo();
      })
      .catch(err => {
        formErro();
        console.log(err);
      });
  }

  let astroEscolhido
  const escolheAstro = ()=>{
    switch (destino) {
      case "Marte":
        astroEscolhido = Marte
        break;
      case "Jupiter":
        astroEscolhido = Jupter
        break;
      case "Netuno":
        astroEscolhido = Netuno
        break;
      case "Saturno":
        astroEscolhido = Saturno
        break;
      case "Titã":
        astroEscolhido = Tita
        break;
      case "Plutão":
        astroEscolhido = Plutao
        break;
      case "Ganimedes":
        astroEscolhido = Ganimedes
        break;
      case "Mercúrio":
        astroEscolhido = Mercurio
        break;
      default:
        astroEscolhido = Nebula
        break;
    }
  }

  const fechaAlert = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlertSucesso(false);
    setOpenAlertErro(false);
  }; 

  return (
    <TelaToda>
      <CabecalhoAdmin />

      <MuiThemeProvider theme={MyTheme}>    
        <section id="conteudo-principal-nova">
          <section id="container-titulo">
            <h1>Cadastre a sua viagem</h1>
            <img src={Marte} alt='Astro escolhido'/>
          </section>
          
          <section id="container-formulario">
            <div className="inputs-novarota">
              <TextField
                required
                fullWidth
                id="input-seleciona-destino"
                select
                label="Destino"
                value={destino}
                onChange={e => {setDestino(e.target.value)}}
                margin="normal"
              >
                {astros.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            
            <section className='inputs-novarota'>
              <TextField
                required
                label="Duração (dias)"
                id="input-duracao"
                value={duracao}
                type="number"
                min="1"
                onChange={e => {setDuracao(e.target.value)}}
              />
            </section>
          
            <section className="inputs-novarota">
              <InputData fullWidth/>
            </section>
            
            <TextField
              required
              id="input-titulo-viagem"
              label="Título da Viagem"
              margin="dense"
              value={titulo}
              onChange={e => {setTitulo(e.target.value)}}
              fullWidth
            />
  
            <TextField
              required
              id="standard-multiline-flexible"
              label="Insira a descrição da viagem"
              multiline
              rowsMax="8"
              value={descricao}
              onChange={e => {setDescricao(e.target.value)}}
              margin="normal"
              maxLength="10"
              fullWidth
            />
  
            <Button onClick={cadastraViagem} variant="contained" color="primary" >
              Criar Destino &nbsp;
              <EnviarIcon className={""} />
            </Button>
          </section>
        </section>
      </MuiThemeProvider>

      <Snackbar open={openAlertSucesso} autoHideDuration={6000} onClose={fechaAlert}>
        <Alert onClose={fechaAlert} severity="success">
          Viagem Cadastrada com sucesso!
        </Alert>
      </Snackbar>

      <Snackbar open={openAlertErro} autoHideDuration={6000} onClose={fechaAlert}>
        <Alert onClose={fechaAlert} severity="error">
          Por favor, tente novamente
        </Alert>
      </Snackbar>
      
      <Rodape />

    </TelaToda>
  );
};

export default NovaRota;