import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const DetalheViagem = () => {
  const history = useHistory();


  const goToApplicationPage = () => {
    history.push("usuario/candidatura");
  };

  return (
    <div>
      <p>Detalhe da Viagem</p>
      <button onClick={goToApplicationPage}>candidatar-se</button>
    </div>
  );
};

export default DetalheViagem;