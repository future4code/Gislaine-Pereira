import React, { useState, useEffect, Fragment } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
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
import Venus from "../../img/venus.jpg"
import Urano from "../../img/urano.jpg"

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
    },
    error:{
      main: "#dd0000",
      contrastText: "#fde1e7"
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

const NovaRota = (props) => {
  
  useEffect(() => {
    formataData();
  }, [form.selectedDate]);
  
  FuncaoLogin()
   const { form, onChange, resetForm } = useForm({
    destino: "",
    titulo: "",
    selectedDate: new Date(),
    duracao: "",
    descricao: "",
  });

  const [dataFormatada, setDataFromatada] = useState("");
  const [openAlertSucesso, setOpenAlertSucesso] = useState(false);
  const [openAlertErro, setOpenAlertErro] = useState(false);
  
  const formataData = () => {
    if (form.selectedDate !== null) {
      let dia = (form.selectedDate.getDate() < 10 ? "0" : "") + form.selectedDate.getDate();
      let mes = (form.selectedDate.getMonth() + 1 < 10 ? "0" : "") + (form.selectedDate.getMonth() + 1);
      let ano = form.selectedDate.getYear() - 100;
      const novaData = dia + "/" + mes + "/" + ano
      setDataFromatada(novaData);
      console.log(novaData);
    }
  };

  const handleInputChange = event => {
    const { value, name } = event.target;

    onChange(name, value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    console.log(form);
  };

  const formSucesso = () => {
    setOpenAlertSucesso(true);
  };

  const formErro = (erro) => {
    setOpenAlertErro(true);
    console.log(erro);
  };

  const cadastraViagem = () =>{
    const body ={
      name: form.titulo,
      planet: form.destino,
      date: {dataFormatada},
      description: form.descricao,
      durationInDays: form.duracao,
    }
    axios
      .post(`${props.baseUrl}/trips`, body)
      .then(response => {
        formSucesso();
      }) 
      .catch(err => {
        formErro();
        console.log(err);
      });
  }

  let astroEscolhido
  switch (form.destino) {
    case "Marte":
      astroEscolhido = Marte;
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
    case "Vênus":
      astroEscolhido = Venus
      break;
    case "Urano":
      astroEscolhido = Urano
      break;
    default:
      astroEscolhido = Nebula
      break;
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
            <h1 id="titulo-nova-rota">Cadastre a sua viagem</h1>
            <img src={astroEscolhido} alt='Astro escolhido'/>
          </section>
          
          <form id="container-formulario">
            <div className="inputs-novarota">
              <TextField
                required
                fullWidth
                name="destino"
                id="input-seleciona-destino"
                select
                label="Destino"
                value={form.destino}
                onChange={handleInputChange}
                margin="normal"
              >
                {props.listaAstros.map(option => (
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
                name="duracao"
                id="input-duracao"
                value={form.duracao}
                type="number"
                min="50"
                onChange={handleInputChange}
              />
            </section>
          
            <section className="inputs-novarota">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Fragment>
                  <KeyboardDatePicker
                    required
                    label="Data da Viagem"
                    name="selectedDate"
                    clearable
                    value={form.selectedDate}
                    onChange={handleInputChange}
                    minDate={new Date()}
                    format="dd/MM/yy"
                  />
                </Fragment>
              </MuiPickersUtilsProvider>
            </section>
            
            <TextField
              required
              id="input-titulo-viagem"
              label="Título da Viagem"
              margin="dense"
              inputProps={{ 
                pattern: "[a-z0-9A-Z°-]{5,}",
                title: "O nome deve conter mais de 5 letras" }}
              value={titulo}
              onChange={e => {setTitulo(e.target.value)}}
              fullWidth
            />
  
            <TextField
              required
              id="standard-multiline-flexible"
              label="Insira a descrição da viagem"
              multiline
              inputProps={{ 
                pattern: "[A-Za-z]{30,100}", 
                title: "O nome deve conter entre 30 3 100 caracteres" }}
              rowsMax="8"
              value={descricao}
              onChange={e => {setDescricao(e.target.value)}}
              margin="normal"
              fullWidth
            />
  
            <Button onClick={cadastraViagem} variant="contained" color="primary" >
              Criar Destino &nbsp;
              <EnviarIcon className={""} />
            </Button>
          </form>
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