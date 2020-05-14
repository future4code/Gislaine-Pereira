import React, { useState, useEffect } from "react";
import "./components.css";
import styled from 'styled-components';
import axios from "axios";
import Botao from '@material-ui/core/Fab';
import IconMatch from '@material-ui/icons/Favorite'
import IconNoMatch from '@material-ui/icons/Close'
import Coracao from '../img/Coracao.gif'
import Logo from '../img/logo.png'

const Informações = styled.section`
  background-size: cover;
  background-image: url(${props => props.imagem});
  background-repeat: no-repeat;
  filter: blur(20px); 
  width: 87vw;
  height: 120vw;
  position: absolute;
  z-index: 1;
  background-position: center;
`
const ImagemPerfil = styled.div`
  background-size: cover;
  background-image: url(${props => props.imagem});
  background-repeat: no-repeat;
  height: 120vw;
  width: 87vw;
  overflow: hidden;
  z-index: 2;
  position: absolute;
  background-position: center;
`
function Perfil(props) {
  
  const [perfil, setPerfil] = useState([]);
  const [escolha, setEscolha] = useState("");
  const [mostraConteudo, setMostraConteudo] = useState('icones')
  
  useEffect(() => {
    pegaPerfil()}, 
  [props.baseUrl])

  const pegaPerfil = () => {
    axios
      .get(`${props.baseUrl}/person`)
      .then(response => {
        setPerfil(response.data.profile);
        setMostraConteudo('perfis')
      })
      .catch(err => {
        console.log(err);
      });
  }

  const gosteiPerfil = () => {
    setEscolha(true)
    setMostraConteudo('icones')
    const body ={
        id: "71gMbZs2txS9LDvGK5Ew",
        choice: true
    }
    axios
      .post(`${props.baseUrl}/choose-person`, body)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err);
      });
    pegaPerfil()
  }

  const naoGosteiPerfil = () => {
    setEscolha(false)
    setMostraConteudo('icones')
    const body ={
        id: "71gMbZs2txS9LDvGK5Ew",
        choice: false
    }
    axios
      .post(`${props.baseUrl}/choose-person`, body)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err);
      });
    pegaPerfil()
  }

  let conteudoNaTela;
    
  if (mostraConteudo === 'icones') {
      conteudoNaTela = <div id='loading'>
        <img id='coracao-loading' src={Coracao} alt='Coração Pulsando'/>
        <img id='logo-loading' src={Logo} alt='Logo'/>
      </div>
    } else {
      conteudoNaTela = <div>
        <section id='card-perfil'>
          <Informações imagem= {perfil.photo} />
          <ImagemPerfil imagem= {perfil.photo} />
          <div id='textousuario'>
            <p>{perfil.name}, {perfil.age}</p>
            <p>{perfil.bio}</p>
          </div>
        </section>

        <section id='container-botoes'> 
          <Botao 
            Botao className="botoes"
            onClick ={naoGosteiPerfil}
            variant ="outlined">
            <IconNoMatch id='botao-coracao'/>
          </Botao>

          <Botao 
            Botao className="botoes"
            onClick ={gosteiPerfil}
            variant ="outlined">
            <IconMatch id='botao-coracao'/>
          </Botao> 
        </section>
      </div>
  }

  console.log(escolha)

  return (
    <div id="App" >
      {conteudoNaTela}
    </div>
  );
}

export default Perfil;
