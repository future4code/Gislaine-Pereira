import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Botao = styled.button `
width: 5vw;
`
const Input = styled.input``

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

class Formulario extends React.Component {
  state={
      inputNome: '',
      inputEmail:'',
  }

  MudarInputNome =(event)=>{
  this.setState({inputNome: event.target.value})
  }

  MudarInputEmail =(event)=>{
    this.setState({inputEmail: event.target.value})
  }

  adicionaUsuario = () =>{
    
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }
    
    axios
    .post(
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
        headers: {
          Authorization: "gislaine-costa-julian"
        }
      }
    )
    .then(response =>{
      alert('Usuário criado com sucesso')
    })
    .catch(erro => {
      alert(erro.response)
    })
    this.setState({inputNome: '', inputEmail:'',})
  };
  

  render(){
  
  return (
    <Cadastro>
        <label for = "name" > Nome:
           <Input 
              type="text" 
              id="name"
              onChange={this.MudarInputNome}
              value = {this.state.inputNome}
              /><br/>
        </label>
        
        <label for = "email" > E-mail:
            <Input 
                type="text" 
                id="email"
                onChange={this.MudarInputEmail}
                value = {this.state.inputEmail}
                /><br/>
        </label>
      
      <Botao onClick={this.adicionaUsuario}>Salvar</Botao> 
    </Cadastro>
  );
  }     
}

export default Formulario;