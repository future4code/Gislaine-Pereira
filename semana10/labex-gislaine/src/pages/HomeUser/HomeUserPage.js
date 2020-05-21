import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import "../Pages.css"
import axios from "axios";
import Cabecalho from "../../components/Cabecalho"
import Rodape from "../../components/Rodapé"
import Fundo from "../../img/fundo2.jpg"
import Plutao from "../../img/plutão.jpg"
import Jupter from "../../img/jupiter.jpg"
import Ganimedes from "../../img/ganimedes.jpg"
import Marte from "../../img/marte.jpg"
import Netuno from "../../img/netuno.jpg"
import Saturno from "../../img/saturno.jpg"
import Tita from "../../img/tita.jpg"
import Nebula from "../../img/nebula.jpg"
import Button from '@material-ui/core/Button';
import IconPlus from '@material-ui/icons/FastForward'
import Candidatarse from "../CandidatarseViagem/CandidatarseViagemPage"


const TelaToda = styled.div `
  background-image: url("${Fundo}");
  background-color: #1b1001;
  max-width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`

const HomeUser = (props) => {
  const [viagens, setViagens] = useState([]);
  const [open, setOpen] = useState(false);
  const [idViagem, setIdViagem] = useState('')

  useEffect(() => {
    pegaViagem()},
  [props.baseUrl])

  const fechaForm = () => {
    setOpen(false);
  };
  
  const pegaViagem = () => {
    axios
      .get(`${props.baseUrl}/trips`)
      .then(response => {
        setViagens(response.data.trips);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const ListaViagem = viagens.map((viagem) => {
    let astroEscolhido  
    switch (viagem.planet) {
        case "Marte":
          astroEscolhido = Marte
          break;
        case "Jupiter":
          astroEscolhido = Jupter
          break;
        case "Netuno":
          astroEscolhido = Netuno
          break;
        case "Saturno":
          astroEscolhido = Saturno
          break;
        case "Titã":
          astroEscolhido = Tita
          break;
        case "Plutão":
          astroEscolhido = Plutao
          break;
        case "Ganimedes":
          astroEscolhido = Ganimedes
          break;
        default:
          astroEscolhido = Nebula
          break;
      }
    return <article className='viagem' key={viagem.id}>
      <img id='astro-img' src={astroEscolhido} alt="Foto do astro"/>
      <h1 id='astro-nome'>{viagem.planet} </h1>
      <h2>{viagem.name}</h2>
      <p className='descricao'>"{viagem.description}"</p>
      <p className='detalhe-viagem'>Duração: {viagem.durationInDays} dias</p>
      <p className='detalhe-viagem'>Data: {viagem.date}</p>
      <Button
        variant="contained"
        endIcon={<IconPlus />}
        id="inscrever-se"
        onClick = {
          () => {
            setOpen(true);
            setIdViagem(viagem.id)
          }
        }
        size="small"
      >
        Eu quero!
      </Button>
    </article>
    
  })

  return (
    <TelaToda>
      <Cabecalho />
      
      <section id='display-viagens'>
          {ListaViagem}
      </section>
      
      <Candidatarse baseUrl={props.baseUrl} fechaForm={fechaForm.bind()} isOpen={open} viagemId={idViagem}/>
      
      <Rodape />

    </TelaToda>
  );
};

export default HomeUser;