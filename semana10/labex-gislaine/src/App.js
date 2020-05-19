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

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Wellcome />
        </Route>

        <Route exact path="/admin/home">
          <HomeAdmin />
        </Route>
        
        <Route exact path="/usuario/home">
          <HomeUser />
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
  );
}

export default App;
