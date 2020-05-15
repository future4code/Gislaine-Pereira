import React, { useState, useEffect } from "react";
import "./components.css";
import styled from 'styled-components'
import axios from "axios";
import Botao from '@material-ui/core/Fab';
import IconMatch from '@material-ui/icons/Favorite'
import IconNoMatch from '@material-ui/icons/Close'
import Coracao from '../img/Coracao.gif'
import Logo from '../img/logo.png'
import { Informações } from './ImagensBackground.js'
import { ImagemPerfil } from './ImagensBackground.js'

const CardPerfil = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.75);
  width: 87vw;
  height: 120vw;
  position: relative;
  overflow: hidden;
  margin-top: 3vw;
`

function Perfil(props) {
  
  const [perfil, setPerfil] = useState([]);
  const [mostraConteudo, setMostraConteudo] = useState('icones')

  useEffect(() => {
    pegaPerfil()}, 
  [props.baseUrl])

  const pegaPerfil = () => {
    setMostraConteudo('icones')  
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
    const body ={
        id: perfil.id,
        choice: true
    }
    axios
      .post(`${props.baseUrl}/choose-person`, body)
      .then(response => {
        console.log(response.data)
        pegaPerfil()
      })
      .catch(err => {
        console.log(err);
      });
    
  }

  const naoGosteiPerfil = () => {
    const body ={
        id: perfil.id,
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
  }

  let conteudoNaTela;
    
  if (mostraConteudo === 'icones') {
      conteudoNaTela = <div id='loading'>
        <img className='coracao-loading' src={Coracao} alt='Coração Pulsando'/>
        <img id='logo-loading' src={Logo} alt='Logo'/>
      </div>
  } else{
    if (perfil === null) {
      conteudoNaTela = <div id='sem-perfis'>
        <img className='coracao-loading' src={Coracao} alt='Coração Pulsando'/>
        <h1>Acabaram os perfis</h1>
        <p id='texto-acabou'>Aproveite para xavecar aquele match ou comece tudo novamente clicando na Lixeira</p>
      </div>
    }else{
      conteudoNaTela = <div>
        <CardPerfil animado={animacao}>
          <Informações imagem= {perfil.photo} />
          <ImagemPerfil imagem= {perfil.photo} />
          <div id='textousuario'>
            <p>{perfil.name}, {perfil.age}</p>
            <p>{perfil.bio}</p>
          </div>
        </CardPerfil>
      
        <section id='container-botoes'> 
          <Botao 
            id='botao-x'
            onClick ={naoGosteiPerfil}
            variant ="outlined">
            <IconNoMatch id='icone-x'/>
          </Botao>
      
          <Botao 
            id='botao-coracao'
            onClick ={gosteiPerfil}
            variant ="outlined">
            <IconMatch id='icone-coracao'/>
          </Botao> 
        </section>
      </div>
    }
  }

  return (
    <div id="App" >
      {conteudoNaTela}
    </div>
  );
}

export default Perfil;
