import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomeAdmin from "./pages/HomeAdmin/HomeAdmPage"
import HomeUser from "./pages/HomeUser/HomeUserPage"
import NovaRota from "./pages/NovaRota/NovaRotaPage"
import Wellcome from "./pages/Wellcome/index"
import styled from 'styled-components'
import ImagemFundo from "./img/fundo2.jpg"
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./style/theme";

const apiUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gislaine-julian"

const TelaToda = styled.div `
  background-image: url("${ImagemFundo}");
  background-color: #0d0d2b;
  height: 100vh;
  height: 20vh;
  background-size: cover;
  background-repeat: no-repeat;
`

const App = () => {
  const [viagens, setViagens] = useState([]);

  useEffect(() => {
      pegaViagem()
    },
    [apiUrl])

  const pegaViagem = () => {
    axios
      .get(`${apiUrl}/trips`)
      .then(response => {
        setViagens(response.data.trips);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <MuiThemeProvider theme={theme}>
      <TelaToda>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Wellcome baseUrl={apiUrl} />
          </Route>
  
          <Route exact path="/admin/home">
            <HomeAdmin viagens={viagens}/>
          </Route>
          
          <Route exact path="/usuario/home">
            <HomeUser viagens={viagens} baseUrl={apiUrl}/>
          </Route>
          
          <Route exact path ="/admin/criar-nova-rota" >
            <NovaRota baseUrl={apiUrl}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </TelaToda>
    </MuiThemeProvider>
  );
}

export default App;
