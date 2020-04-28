import React from 'react';
import './App.css';
import styled from 'styled-components'

const Botao = styled.button `
width: 5vw;
`
const Input = styled.input``

const Nomes = styled.p``

const Cadastro = styled.section`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 5vw 0;
  width: 20vw;
  height: 20vh;
  padding: 1vw;
`

const TelaToda = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


class App extends React.Component {
  
  render(){
  
  return (
    <TelaToda>
      <Cadastro>
        <label for="name">
          Nome: <Input type="text" id="name"/><br/>
        </label>
        <label for="email">  
          E-mail: <Input type="text" id='email'/><br/>
        </label>
        <Botao>Salvar</Botao> 
      </Cadastro>
    </TelaToda>
  );
  }
}

export default App;