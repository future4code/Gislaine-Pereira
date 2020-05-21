import React, { useState } from "react";
import "./Components.css"
import Twitter from "../img/twt.png";
import Facebook from "../img/face.png";
import Instagram from "../img/insta.png";
import By from "../img/by.png"
import Button from '@material-ui/core/Button';
import IconSend from '@material-ui/icons/Send';
import { useForm } from "react-hook-form";


const Rodape = () => {
  const [valorNome, setValorNome] = useState('')
  const [valorEmail, setValorEmail] = useState('')
  const [valorMensagem, setValorMensagem] = useState('')
  
  const enviarMensagem = () => {
    console.log('funcionou enviar');
  };
  
  return (
    <div id="conteudo-rodape">
      <section id='formulario'>
        <h5>Entre em contato conosco</h5>
        <form>
            <input 
              value={valorNome} 
              placeholder={'Nome'} 
              onChange={e => setValorNome(e.target.value)} 
              />
            <input
              value={valorEmail}
              placeholder={'E-mail'}
              onChange={e => setValorEmail(e.target.value)}
              type='email'
            />
            <textarea
              value={valorMensagem}
              placeholder={'Mensagem'}
              onChange={e => setValorMensagem(e.target.value)}
              type='text'
            />
            <Button
              variant="contained"
              color="primary"
              endIcon={<IconSend />}
              id="botao-enviar"
              onClick={enviarMensagem}
              size="small"
            >
              Enviar Mensagem
            </Button>
          </form>
      </section>
      
      <section id="sobre">
        <section id="institucional">
          <h4 className='sobre-titulo'>Sobre Nós</h4>
          <p className="sobre-texto">Missão</p>
          <p className="sobre-texto">Visão</p>
          <p className="sobre-texto">Valores</p>
        </section>
        <section id='redes-sociais'>
          <h4 className='sobre-titulo'>Nossas redes sociais</h4>
          <img src={Facebook} alt={'Twitter'}></img>
          <img src={Twitter} alt={'Twitter'}></img>
          <img src={Instagram} alt={'Twitter'}></img>
        </section>
      </section >
      
      <section id='autoria'>
        <img id='by-imagem' src={By} alt={'autoria'} />
      </section>
    </div>
  );
};

export default Rodape;