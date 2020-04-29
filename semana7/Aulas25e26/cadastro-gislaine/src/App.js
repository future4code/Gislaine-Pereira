import React from 'react';
import './App.css';
import styled from 'styled-components'

import Lista from './components/Lista'
import Formulario from './components/Formulario'

const TelaToda = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1vw;
`

const Botao = styled.button `
width: 15vw;
`
class App extends React.Component {
  state ={
    mostraFormulario: true,
    usuarios: [],
  }
  
  mudaPagina = () =>{
    this.setState({mostraFormulario: !this.state.mostraFormulario})
  }

  render(){
    
    if (this.state.mostraFormulario === true) {
      return (
        <TelaToda>
          <Botao onClick={this.mudaPagina}>Ir para a página de Lista</Botao>
          <Formulario />
        </TelaToda>
      );
    }
    else{
      return (
        <TelaToda>
          <Botao onClick={this.mudaPagina}>Ir para a página de cadastro</Botao>
          <Lista />
        </TelaToda>
      );
    }
  }
}

export default App;