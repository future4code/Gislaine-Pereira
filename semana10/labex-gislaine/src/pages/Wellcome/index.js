import React, { useState } from "react";
import './index.css';
import clsx from 'clsx';
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import ImagemFundo from "../../img/fundo.jpg"
import Logo from "../../img/Logo2.png"
import Button from '@material-ui/core/Button';
import IconSend from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

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

const MyTheme = createMuiTheme({
    palette: {
        primary: {
            light: "rgba(255, 95, 0, 1)",
            main: "rgba(166, 62, 0, 1)",
            dark: "rgba(34, 13, 0, 1)",
            contrastText: "rgba(255, 229, 210, 1)"
        },
        error: {
            main: "rgba(166, 62, 0, 1)",
            light: "#e57373",
            dark: "#50a00e",
            contrastText: "#0bb496"
        }
    }
})


const TelaToda = styled.div `
  background-image: url("${ImagemFundo}");
  background-color: #0d0d2b;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`

const Wellcome = () => {
    const classes = useStyles();
    const history = useHistory();
    const [valorSenha, setValorSenha] = useState('')
    const [mostraSenha, setMostraSenha] = useState(false)
    const [valorUsuario, setValorUsuario] = useState('')

    const handleClickShowPassword = () => {
        setMostraSenha(!mostraSenha);
    };

    const handleMouseDownPassword = (event: React.MouseEvent < HTMLButtonElement > ) => {
        event.preventDefault();
    };
    
    const goToAdminPage = () => {
        history.push("/admin/home");
    };

    const goToUserPage = () => {
        history.push("/usuario/home");
    };

    return(
        <TelaToda>
            <MuiThemeProvider theme={MyTheme}>
                <section id="cabecalho">
                  <img id="logo" src={Logo} alt={'Logo'}/>
                  <h1>"Encontre as melhores viagens espaciais!"</h1>
                </section>

                <section id="corpo-site">      
                    <section className="div-login">
                        <h3>Sou Administrador</h3>
                        
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">Usuário</InputLabel>
                            <FilledInput
                                error
                                id="filled-adornment-password"
                                type={'text'}
                                value={valorUsuario}
                                onChange={e => setValorUsuario(e.target.value)}
                                endAdornment={
                                  <InputAdornment position="start">
                                    <AccountCircle color="primary"/>
                                  </InputAdornment>
                                }
                            />
                        </FormControl>
                        
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">Senha</InputLabel>
                            <FilledInput
                                error
                                id="filled-adornment-password"
                                type={mostraSenha ? 'text' : 'password'}
                                value={valorSenha}
                                onChange={e => setValorSenha(e.target.value)}
                                endAdornment={
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="Visibilidade Senha"
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
                      
                    <section className="div-login">
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