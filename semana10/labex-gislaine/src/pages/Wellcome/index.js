import React, { useState } from "react";
import './index.css';
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import ImagemFundo from "../../img/fundo.jpg"
import Logo from "../../img/Logo.png"
import Button from '@material-ui/core/Button';
import IconSend from '@material-ui/icons/Send';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';


const TelaToda = styled.div`
  background-image: url("${ImagemFundo}");
  background-color: #0d0d2b;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`
const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#642500'
    }
  }
})
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }),
);

const Wellcome = () => {
  const history = useHistory();
  const classes = useStyles();
 
  const [valorSenha, setValorSenha] = useState('')
  const [mostraSenha, setMostraSenha] = useState(false)
  const [valorUsuario, setValorUsuario] = useState('')

  const handleClickShowPassword = () => {
    setMostraSenha(!mostraSenha);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const goToAdminPage = () => {
    history.push("/admin/home");
  };

  const goToUserPage = () => {
    history.push("/usuario/home");
  };

  return (
    <TelaToda>
      <MuiThemeProvider theme={MyTheme}>
        <section id="cabecalho">
          <img id="logo" src={Logo} alt={'Logo'}/>
          <h1>"Encontre as melhores viagens espaciais!"</h1>
        </section>
        
        <section id="corpo-site">      
          <section className="div-login">
            <h3>Sou Administrador</h3>
            
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="input-user">Usuário</InputLabel>
              <Input
                id="input-user"
                value={valorUsuario}
                onChange={e => setValorUsuario(e.target.value)}
                endAdornment={
                  <InputAdornment position="start">
                    <AccountCircle color="primary"/>
                  </InputAdornment>
                }
              />
            </FormControl>
            
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="input-senha">Senha</InputLabel>
              <Input
                id="input-senha"
                type={mostraSenha ? 'text' : 'password'}
                value={valorSenha}
                onChange={e => setValorSenha(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {mostraSenha ? <Visibility color="primary"/> : <VisibilityOff color="primary" />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            
            <Button
              variant="contained"
              color="primary"
              endIcon={<IconSend />}
              id="botao-admin"
              onClick={goToAdminPage}
              size="small"
            >
              Entrar
            </Button>
          </section>
  
          <section className="div-login" >
            <h3>Quero me candidatar</h3>
            <p>Escontre a sua viagem dos sonhos</p>
            <Button
              variant="contained"
              color="primary"
              endIcon={<IconSend />}
              id="botao-user"
              onClick={goToUserPage}
              size="large"
            >
              Entrar
            </Button>
          </section>
        </section>
      </MuiThemeProvider>
    </TelaToda>
  );
};

export default Wellcome;