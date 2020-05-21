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
  },
  {
    value: 'Estados Unidos',
    label: 'E.U.A',
  },
  {
    value: 'Espanha',
    label: 'Espanha',
  },
  {
    value: 'Moçambique',
    label: 'Moçambique',
  },
  {
    value: 'Japão',
    label: 'Japão',
  },
  {
    value: 'Indonédia',
    label: 'Indonésia',
  },
];

const Candidatarse = (props) => {
  const [país, setPaís] = useState('Brasil')
  const [open, setOpen] = useState(false);
  const [idViagem, setIdViagem] = useState("")
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [profissao, setProfissao] = useState("")
  const [mensagem, setMensagem] = useState('')
  
  useEffect(() => {
    setIdViagem(props.viagemId)},
  [props.viagemId])

  useEffect(() => {
    setOpen(props.isOpen)},
  [props.isOpen])
  
  const limpaTudo = () =>{
    setPaís('');
    setIdViagem('');
    setName('');
    setAge('');
    setProfissao('');
    setMensagem('');
  }
  
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
        limpaTudo()
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <MuiThemeProvider theme={MyTheme}>
      <Dialog fullWidth={true} open={open} onClose={props.fechaForm} id='form-iscricao'>
        <DialogTitle id="form-dialog-title">Formulario de Inscrição</DialogTitle>
        <DialogContent id="conteudo-dialogo">
          <DialogContentText>
            Preencha todos os dados 
          </DialogContentText>
          
          <section className="inputs">
            <Input
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
                autoFocus
                id='idade'
                label="Idade"
                type="number"
                value={age}
                onChange={e => {setAge(e.target.value)}}
              />
            </section>
            <Input
              className='input-pequeno'
              select
              label="País"
              value={país}
              onChange={e => {setPaís(e.target.value)}}
            >
              {paises.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Input>
          </section>
          <section className='inputs'>
            <Input
              autoFocus
              margin="dense"
              label="Profissão"
              id='profissao'
              type="text"
              value={profissao}
              onChange={e => {setProfissao(e.target.value)}}
            />
              <Input
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
    </MuiThemeProvider>
  );
};

export default Candidatarse;