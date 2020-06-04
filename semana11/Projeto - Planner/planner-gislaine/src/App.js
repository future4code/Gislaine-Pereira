import React, { useState, useEffect } from 'react';
import { fade, ThemeProvider, withStyles, makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import DiaSemana from './components/DiaSemana';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import IconeBotao from '@material-ui/icons/LibraryAdd';
import axios from "axios";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconDate from '@material-ui/icons/Today';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

const urlBase = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-gislaine"

const CampoTexto = withStyles({
  root: {
    width: "28vw",
    '& input:valid + fieldset': {
      borderColor: '#632D80',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: '#490a58',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', 
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginLeft: theme.spacing(1),
  },
  extendedIcon2: {
    marginRight: theme.spacing(1),
  },
}));

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#38B8A6",
      main: "#3f2199",
      dark: "#490a58",
      contrastText: "#57FFEA",
    },
  }
})

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [inputTarefa, setInputTarefa] = useState("")
  const [selecionaDia, setSelecionaDia] = useState("")
  const [listaTarefas, setListaTarefas] = useState([])
  
  useEffect(() => {
    pegaTarefas()
  }, [urlBase])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const adicionaTarefa = async () => {
    setInputTarefa("")
    setSelecionaDia("")
    const body ={
      text: inputTarefa,
      day: selecionaDia,
    }
    await axios
      .post(`${urlBase}`, body)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
    pegaTarefas()
  }


  const pegaTarefas = async () => {
    await axios
    .get(`${urlBase}`)
    .then(response => {
      setListaTarefas(response.data)
    })
     .catch(err => {
       console.log(err);
     });
  }
  
  return (
    <div id="tela-toda">
      <MuiThemeProvider theme={MyTheme}>
        <header>
          <h1>Minha Semana</h1>
          
          <form id="formulario">
  
            <CampoTexto
              className={classes.margin}
              label="Tarefa"
              required
              variant="outlined"
              value={inputTarefa}
              onChange={e =>{setInputTarefa(e.target.value)}}
              id="validation-outlined-input"
            />


            <Fab 
              onClick={handleClickOpen}
              variant="extended"
              size="medium"
              color="primary"
            >
              <IconDate className={classes.extendedIcon2} />
              {selecionaDia === ""? "Selecione o dia" : selecionaDia}
            </Fab>
            
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
              <DialogContent>
                <FormControl component="fieldset">
                  <RadioGroup aria-label="gender" name="gender1" value={selecionaDia} onChange={e =>{setSelecionaDia(e.target.value)}}>
                    <FormControlLabel value="Domingo" control={<Radio color="primary" />} label="Domingo" />
                    <FormControlLabel value="Segunda" control={<Radio color="primary" />} label="Segunda" />
                    <FormControlLabel value="Terça" control={<Radio color="primary" />} label="Terça" />
                    <FormControlLabel value="Quarta" control={<Radio color="primary" />} label="Quarta" />
                    <FormControlLabel value="Quinta" control={<Radio color="primary" />} label="Quinta" />
                    <FormControlLabel value="Sexta" control={<Radio color="primary" />} label="Sexta" />
                    <FormControlLabel value="Sábado" control={<Radio color="primary" />} label="Sábado" />
                  </RadioGroup>
                </FormControl>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancela
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Ok
                  </Button>
                </DialogActions>
            </Dialog>
  
            <Fab
              variant="extended"
              size="medium"
              color="primary"
              aria-label="add"
              className={classes.margin}
              onClick={adicionaTarefa}
            >
              Criar
              <IconeBotao className={classes.extendedIcon} />
            </Fab>
          </form>
        </header>
  
        <section id="conteudo-principal">
            <DiaSemana listaTarefasDia={listaTarefas} titulo={"Domingo"}/>
            <DiaSemana listaTarefasDia={listaTarefas} titulo={"Segunda"}/>
            <DiaSemana listaTarefasDia={listaTarefas} titulo={"Terça"}/>
            <DiaSemana listaTarefasDia={listaTarefas} titulo={"Quarta"}/>
            <DiaSemana listaTarefasDia={listaTarefas} titulo={"Quinta"}/>
            <DiaSemana listaTarefasDia={listaTarefas} titulo={"Sexta"}/>
            <DiaSemana listaTarefasDia={listaTarefas} titulo={"Sábado"}/>
        </section>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
