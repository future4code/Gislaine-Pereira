import React, { useState } from "react";
import './index.css';
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import ImagemFundo from "../../img/fundo.jpg"
import Logo from "../../img/Logo.png"

const TelaToda = styled.div`
   background-image: url("${ImagemFundo}");
  background-color: #0d0d2b;
  height: 100vh;
  img {
    width: 7vw;
  }
`

const Wellcome = () => {
  const history = useHistory();

  const goToAdminPage = () => {
    history.push("/admin/home");
  };

  const goToUserPage = () => {
    history.push("/usuario/home");
  };

  return (
    <TelaToda id="pagina-toda">
      <p>Home Usuário</p>
      <button onClick={goToAdminPage}>Administrador</button>
      <button onClick={goToUserPage}>Usuario</button>
    </TelaToda>
  );
};

export default Wellcome;