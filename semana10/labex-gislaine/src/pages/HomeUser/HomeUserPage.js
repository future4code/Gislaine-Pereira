import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const HomeUser = () => {
  const history = useHistory();

  const goToTripPage = () => {
    history.push("/usuario/detalhe-viagem");
  };

  return (
    <div>
      <p>Home Usuario</p>
      <button onClick={goToTripPage}>Mais Detalhes</button>
    </div>
  );
};

export default HomeUser;