import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Wellcome = () => {
  const history = useHistory();

  const goToAdminPage = () => {
    history.push("/admin/home");
  };

  const goToUserPage = () => {
    history.push("/usuario/home");
  };

  return (
    <div>
      <p>Home Usuário</p>
      <button onClick={goToAdminPage}>Administrador</button>
      <button onClick={goToUserPage}>Usuario</button>
    </div>
  );
};

export default Wellcome;