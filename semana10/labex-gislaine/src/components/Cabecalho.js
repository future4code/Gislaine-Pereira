import React from "react";
import "./Components.css"
import Logo from "../img/Logo.png"
import styled from 'styled-components'
import IconHome from "@material-ui/icons/Home"
import Exit from "@material-ui/icons/ExitToApp"
import { useHistory } from "react-router-dom";

const IconeHome = styled(IconHome)`
  color: #200d01;
  &&{
    :hover{
      color: #5a2303
    }
  }
`
const IconeSair = styled(Exit)`
  color: #200d01;
  &&{
    :hover{
      color: #5a2303
    }
  }
`

const Cabecalho = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/usuario/home");
  };

  const goToWellcome = () => {
    history.push("/");
  };

  return (
    <div id="conteudo-cabecalho" >
      <img id='logo-site' src={Logo} alt="Logo" />
      
      <h1 id='titulo-cabecalho'>"Encontre as melhores viagens espaciais!"</h1>
      
      <section id='icones'>
        <article className="navegacao" onClick={goToHome}>
          <IconeHome fontSize={'large'} />
          <p className="texto-icone">Home</p>
        </article>

        <article onClick={goToWellcome}>
          <IconeSair fontSize={'large'} />
          <p className="texto-icone">Sair</p>
        </article>
      </section>
      
    </div>
  );
};

export default Cabecalho;