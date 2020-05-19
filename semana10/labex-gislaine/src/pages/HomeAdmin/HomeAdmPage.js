import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const HomeAdmin = () => {
  useEffect(() =>{
    document.title = "Home Administrador"
  })
  
  const history = useHistory();

  const goToCreateRoute = () => {
    history.push("/admin/criar-nova-rota");
  };

  const goToEditTrip = () => {
    history.push("/admin/administrar-viagem");
  };

  return (
    <div>
      <p>Home Adminin</p>
      <button onClick={goToCreateRoute}>Criar viagem</button>
      <button onClick={goToEditTrip}>Editar Viagem</button>
    </div>
  );

};

export default HomeAdmin;