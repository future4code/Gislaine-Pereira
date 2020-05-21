import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AdministrarViagem from "./pages/AdmnistrarViagem/AdmViagemPage"
import Candidatarse from "./pages/CandidatarseViagem/CandidatarseViagemPage"
import DetalheViagem from "./pages/DetalheViagem/DetalheViagemPage"
import HomeAdmin from "./pages/HomeAdmin/HomeAdmPage"
import HomeUser from "./pages/HomeUser/HomeUserPage"
import NovaRota from "./pages/NovaRota/NovaRotaPage"
import Wellcome from "./pages/Wellcome/index"
import styled from 'styled-components'
import ImagemFundo from "./img/fundo2.jpg"

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
  return (
    
    <TelaToda>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Wellcome />
          </Route>
  
          <Route exact path="/admin/home">
            <HomeAdmin />
          </Route>
          
          <Route exact path="/usuario/home">
            <HomeUser baseUrl={apiUrl}/>
          </Route>
          
          <Route exact path ="/admin/criar-nova-rota" >
            <NovaRota />
          </Route>
          
          <Route exact path = "/admin/administrar-viagem" >
            <AdministrarViagem />
          </Route>
  
          <Route exact path="/usuario/detalhe-viagem">
            <DetalheViagem />
          </Route>
  
          <Route exact path="usuario/candidatura">
            <Candidatarse />
          </Route>
        </Switch>
      </BrowserRouter>
    </TelaToda>
  );
}

export default App;
