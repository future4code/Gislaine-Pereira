import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import "../Pages.css"
import CabecalhoAdmin from "../../components/CabecalhoAdmin"
import Rodape from "../../components/Rodapé"
import Fundo from "../../img/fundo2.jpg"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import MenuItem from '@material-ui/core/MenuItem';
import EnviarIcon from '@material-ui/icons/Send';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

const TituloForm = styled.h1`
    color: #363636;
    margin: 5vw 0;
`

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
const InputName = styled(TextField)`
    flex-basis: 100%;
`

const InputsLadoALado = styled.section `
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1vw 0;
`
const InputCategoria = styled(TextField)`
    flex-basis: 100%;
`
const ContainerInputParcelas = styled.div`
    display: flex;
    width: 13vw;
`
const ContainerInputPreco = styled.div`
    display: flex;
    width: 12vw;
`
const InputPreco = styled(TextField)`
    flex-basis: 100%;
`
const ContainerBotao = styled.section`
    display: flex;
    width: 15vw;
    margin: 5vw;
`

const BotaoEnviar = styled(Button)`
    flex-basis: 100%;
`

const InputLinhas = styled(TextField)`
    flex-basis: 100%;
`

const MyTheme = createMuiTheme({
      palette: {
        primary: {
          main: '#ff5f00'
        }
      }
});

const astros = [{
    value: 'Marte',
    label: 'Marte',
    img: {}
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
  const [destino, setDestino] = useState('')
  const [titulo, setTitulo] = useState('')
  const [data, setData] = useState('')
  const [duracao, setDuracao] = useState('')
  const [descricao, setDescricao] = useState('')
  const [openAlertSucesso, setOpenAlertSucesso] = useState(false);
  const [openAlertErro, setOpenAlertErro] = useState(false);

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
        <section id="container-formulario">
          <h1>Insira as características da Viagem</h1>  
          <InputsLadoALado>
            <ContainerInputParcelas>
              <InputCategoria
                required
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
              </InputCategoria>
            </ContainerInputParcelas>
            <ContainerInputPreco>
              <InputPreco
                required
                label="Duração (dias)"
                id="input-duracao"
                value={duracao}
                type="number"
                min="1"
                onChange={e => {setDuracao(e.target.value)}}
              />
            </ContainerInputPreco>
            <ContainerInputPreco>
              <InputPreco
                required
                label="Data da viagem"
                id="input-data-viagem"
                min="2020-05-21"
                placeholder=""
                type="date"
                value={data}
                onChange={e => {setData(e.target.value)}}
              />
            </ContainerInputPreco>
          </InputsLadoALado>                            
          <InputsLadoALado>
            <section id="container-titulo">
              <InputName
                required
                id="input-titulo-viagem"
                label="Título da Viagem"
                margin="dense"
                value={titulo}
                onChange={e => {setTitulo(e.target.value)}}
              />
            </section>
            <InputLinhas
                required
                id="standard-multiline-flexible"
                label="Insira a descrição da viagem"
                multiline
                rowsMax="8"
                value={descricao}
                onChange={e => {setDescricao(e.target.value)}}
                margin="normal"
            />
          </InputsLadoALado> 
          <ContainerBotao>
              <BotaoEnviar id="botao-cadastar-viagem" onClick={cadastraViagem} variant="contained" color="primary" className={""}>
                Criar Destino &nbsp;
                <EnviarIcon className={""} />
              </BotaoEnviar>
          </ContainerBotao>
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