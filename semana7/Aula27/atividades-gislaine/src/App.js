import React from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'


const Aplicativo = styled.div`
  text-align: center;
  padding: 2vw;
  display: flex;
  flex-direction: column;
`
const Opcoes = styled.section`
  display: flex;
  padding: 5vw;
  justify-content: space-between;
`
const TituloGeral = styled.h1`
  margin-bottom: 3vw;
`
const Secao = styled.section`
`
const Subtitulo = styled.h3`
`
const Selecione = styled.select`
  border: 1px solid black;
`
const Rotulo = styled.label`
  font-size: 1em;
`
const Botao = styled.button`
  border: 1px solid black;
  margin: 2vw;
  height: 2.5vw;
  padding: 0 0.5vw;
`


class App extends React.Component {
  
  state = {
    atividadeRenderizada: [
      {
        "activity": "Learn how to play a new sport",
        "accessibility": 0.2,
        "type": "recreational",
        "participants": 1,
        "price": 0.1,
        "key": "5808228"
      }
    ],
    
    tiposAtividades:[
      "education", 
      "recreational", 
      "social", 
      "diy", 
      "charity", 
      "cooking", 
      "relaxation", 
      "music", 
      "busywork"
    ],

    isAleatorio: undefined
  }
  
  escolherAleatorio = () =>{
    this.setState({ isAleatorio: true})
  }

  escolherOpcoes = () => {
    this.setState({ isAleatorio: false })
  }
  
  tipoAtividade = (event) =>{
    const qualAtividade = event.target.value
    console.log(qualAtividade)
  }

  render (){

    return (
      <Aplicativo>
        
        <TituloGeral> Você está entediado? Escolha uma atvidade 🤹</TituloGeral>
        <Secao>
          <Subtitulo>Você quer escolher algum tipo?</Subtitulo><br/>
          <Botao onClick={this.escolherAleatorio}>Aleatório, gosto de viver perigosamente</Botao>
          <Botao onClick={this.escolherOpcoes}>Quero escolher alguma coisa, não confio no destino</Botao>
        </Secao>
        
        <Secao>
          <Opcoes>
            <Rotulo for='atividades'> Selecione um tipo de Atividade: &nbsp;
              <Selecione id='atividades' onChange={this.tipoAtividade}>
                <option value={""}>Nenuma</option>
                <option value={'aleatorio'}>Aleatório</option>
                {this.state.tiposAtividades.map(atividade => {
                  return (
                    <option key={atividade} value={atividade}>
                      {atividade}
                    </option>
                  );
                })}
              </Selecione>
            </Rotulo>
          </Opcoes>
        </Secao>
      
      </Aplicativo>
    );
  }
}

export default App;
