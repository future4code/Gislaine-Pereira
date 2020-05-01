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
  padding: 5vw 5vw 2vw 5vw;
  justify-content: space-between;
`
const TituloGeral = styled.h1`
  margin-bottom: 3vw;
`
const ListaAtividades = styled.section `
  text-align: start;
  padding: 0vw 5vw;
`
const Selecione = styled.select`
  border: 1px solid black;
`
const Rotulo = styled.label`
  font-size: 1.5vw;
  font-weight: bold;
`
const Paragrafo = styled.p`
  font-size: 1.3vw;
  margin: 2vw;
`
const Input = styled.input`
  border: 1px solid black;
  width: 3vw;
  height:1.5vw;
  padding: 0.2vw;
`

const Botao = styled.button`
  background-color: black;
  color: white;
  width: 5vw;
  height: 3vw;
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
    atividade:{},
    numeroParticipantes: 0,
    tipoAtividade: "",
    linguagemNavegador: '',
  }
  

  
  numParticipantes = (event) =>{
    //const numeroParticipantes = event.target.value;
    this.setState({numeroParticipantes: event.target.value})
  }

  tipoAtividade = (event) =>{
    //const tipoAtividade = event.target.value;
   this.setState({tipoAtividade: event.target.value})
  }  
  
  buscarAtividade = () =>{
    if(this.state.tipoAtividade === 'aleatorio'){
      axios
      .get("https://www.boredapi.com/api/activity/")
      .then(response => {
        this.setState({ atividade: response.data });
      })
      .catch(err => {
        console.log(err);
      });
    }else{
      axios
      .get(`https://www.boredapi.com/api/activity?type=${this.state.tipoAtividade}&participants=${this.state.numeroParticipantes}`)
      .then(response => {
        this.setState({ atividade: response.data });
      })
      .catch(err => {
        console.log(err);
      });

    }
  }
  

  render (){
    
    return (
      <Aplicativo>
        
        <TituloGeral> Você está entediado? Escolha uma atvidade 🤹</TituloGeral>        
        
        <Opcoes>
          <Rotulo for='atividades'> Selecione um tipo de atividade: &nbsp;
            <Selecione id='atividades' onChange={this.tipoAtividade}>
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
          <Rotulo for="quantidade"> Quantos Participantes ? (Escolha de 1 à 5): &nbsp;
            <Input
              type = "number"
              id = "quantidade"
              onChange = {this.numParticipantes}
              min = "1"
              max = "5"
              OnChange={this.numParticipantes} />
          </Rotulo>
          <Botao onClick={this.buscarAtividade}>Buscar</Botao>
        </Opcoes>

        <ListaAtividades>
          <Paragrafo> <b>Atividade: &nbsp;</b>
            {this.state.atividade.activity}
          </Paragrafo>
          <Paragrafo> <b>Acessibilidade: &nbsp;</b>
            {this.state.atividade.accessibility}
          </Paragrafo>
          <Paragrafo> <b>Tipo: &nbsp;</b>
            {this.state.atividade.type}
          </Paragrafo>
          <Paragrafo> <b> Participantes necessários: &nbsp;</b>
            {this.state.atividade.participants}
          </Paragrafo>
          <Paragrafo> <b>Preço: &nbsp;</b>
            {this.state.atividade.price}
          </Paragrafo>
        </ListaAtividades>
      
      </Aplicativo>
    );
  }
}

export default App;
