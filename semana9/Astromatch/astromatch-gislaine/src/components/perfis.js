import React, { useState, useEffect } from "react";
import "./components.css";
import axios from "axios";
import Botao from '@material-ui/core/Fab';
import IconMatch from '@material-ui/icons/Favorite'
import IconNoMatch from '@material-ui/icons/Close'
import Coracao from '../img/Coracao.gif'
import Logo from '../img/logo.png'
import { Informações } from './ImagensBackground.js'
import { ImagemPerfil } from './ImagensBackground.js'

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
        id: perfil.id,
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
    pegaPerfil()
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
