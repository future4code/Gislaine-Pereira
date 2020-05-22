import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Enviar from '@material-ui/icons/Send'
import Cancelar from '@material-ui/icons/Cancel'
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import axios from "axios";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#D76D2D'
    }
  }
})

const Input = styled(TextField)`
  margin:0;
  padding: 0;
`
const paises = [{
    value: 'Brasil',
    label: 'Brasil',
    src: 'https://cdn.countryflags.com/thumbs/brazil/flag-wave-250.png',
  },
  {
    value: 'Dominica',
    label: 'Dominica',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Dominica.png/800px-Flag_of_Dominica.png'
  },
  {
    value: 'Estados Unidos',
    label: 'Estados Unidos',
    src: 'https://static.todamateria.com.br/upload/ba/nd/bandeira_americana_bb.jpg'
  },
  {
    value: 'Espanha',
    label: 'Espanha',
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg'
  },
  {
    value: 'Moçambique',
    label: 'Moçambique',
    src: 'https://images.uncyc.org/pt/a/ab/Bandeira_de_Mo%C3%A7ambique.png'
  },
  {
    value: 'China',
    label: 'China',
    src: 'https://ae01.alicdn.com/kf/HTB1JCySFY9YBuNjy0Fgq6AxcXXaY/China-Bandeira-Com-Casaco-de-Bra-os-de-120x180-cm-100D-Poli-ster-Bandeiras-E-Banners.jpg'
  },
  {
    value: 'Austrália',
    label: 'Austrália',
    src: 'https://cdn.pixabay.com/photo/2020/02/21/05/49/australia-4866531_960_720.png'
  },

];

const Candidatarse = (props) => {
  const [país, setPaís] = useState('Brasil')
  const [openForm, setOpenForm] = useState('')
  const [idViagem, setIdViagem] = useState("")
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [profissao, setProfissao] = useState("")
  const [mensagem, setMensagem] = useState('')
  const [openAlertSucesso, setOpenAlertSucesso] = useState(false);
  const [openAlertErro, setOpenAlertErro] = useState(false);

  useEffect(() => {
    setIdViagem(props.viagemId)},
  [props.viagemId])

  useEffect(() => {
    setOpenForm(props.isOpen)},
  [props.isOpen])
  
  const limpaTudo = () =>{
    setPaís('');
    setIdViagem('');
    setName('');
    setAge('');
    setProfissao('');
    setMensagem('');
  }
  
  const formSucesso = () => {
    setOpenAlertSucesso(true);
  };

  const formErro = (erro) => {
    setOpenAlertErro(true);
    console.log(erro);
  };

  const fechaAlert = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlertSucesso(false);
    setOpenAlertErro(false);
  }; 

  const enviaCandidato = () => {
    const body ={
      name: {name},
      age:{age},
      applicationText: {mensagem},
      profession: {profissao},
      country: {país},
    }
    axios
      .post(`${props.baseUrl}/trips/${idViagem}/apply`, body)
      .then(response => {
        console.log(response.data);
        limpaTudo();
        formSucesso()
      })
      .catch(err => {
        formErro(err);
      });
  }

  return (
    <MuiThemeProvider theme={MyTheme}>
      <Dialog fullWidth={true} open={openForm} onClose={props.fechaForm} id='form-iscricao'>
        <DialogTitle id="form-dialog-title">Formulario de Inscrição</DialogTitle>
        <DialogContent id="conteudo-dialogo">
          <DialogContentText>
            Preencha todos os dados 
          </DialogContentText>
          
          <section className="inputs">
            <Input
              required
              autoFocus
              margin="dense"
              id='input-medio'
              label="Nome"
              type="text"
              value={name}
              onChange={e => {setName(e.target.value)}}
            />
            <section id='container-idade'>
              <Input
                required
                autoFocus
                id='idade'
                label="Idade"
                type="number"
                value={age}
                onChange={e => {setAge(e.target.value)}}
              />
            </section>
            <Input
              required
              className='input-pequeno'
              select
              label="País"
              value={país}
              onChange={e => {setPaís(e.target.value)}}
            >
              {paises.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <div> <img src={option.src} height="18px" width="24px"/> &nbsp; {option.label}</div>
                </MenuItem>
              ))}
            </Input>
          </section>
          <section className='inputs'>
            <Input
              required
              autoFocus
              margin="dense"
              label="Profissão"
              id='profissao'
              type="text"
              value={profissao}
              onChange={e => {setProfissao(e.target.value)}}
            />
              <Input
                required
                autoFocus
                margin="dense"
                label="Mensagem"
                type="text"
                multiline
                value={mensagem}
                onChange={e => {setMensagem(e.target.value)}}
              />
          </section>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            endIcon={<Cancelar />}
            id="dialog-inscricao"
            onClick={props.fechaForm}
            size="small"
          >
            Cancelar
          </Button>
          
          <Button
            variant="contained"
            endIcon={<Enviar />}
            id="dialog-inscricao"
            onClick={() =>{props.fechaForm(); enviaCandidato()} }
            size="small"
          >
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
      
      <Snackbar open={openAlertSucesso} autoHideDuration={6000} onClose={fechaAlert}>
        <Alert onClose={fechaAlert} severity="success">
          Formulário enviado com sucesso!
        </Alert>
      </Snackbar>

      <Snackbar open={openAlertErro} autoHideDuration={6000} onClose={fechaAlert}>
        <Alert onClose={fechaAlert} severity="error">
          Por favor, tente novamente
        </Alert>
      </Snackbar>
      
    </MuiThemeProvider>
  );
};

export default Candidatarse;