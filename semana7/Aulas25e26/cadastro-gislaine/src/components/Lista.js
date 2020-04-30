import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Botao = styled.button `
width: 5vw;
height:2vw;
`
const Nome = styled.p`
`

const Usuario = styled.article `
  display: flex;
  width: 20vw;
  justify-content: space-between;
  align-items:center;
`

const TelaToda = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Titulo = styled.h1`
`
const ListaUsuario = styled.section`
`

class Lista extends React.Component {
  state ={
    listaUsuarios: []
  };

  componentDidMount(){
    this.pegarUsuario()
  }

  pegarUsuario = async () =>{
    try{
      const response = await axios
        .get(
          'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
              Authorization: "gislaine-costa-julian"
            }
          }
        )
      this.setState({
        listaUsuarios: response.data
      })
    }
    catch(erro) {
      alert(erro.response)
    }
  }
  
  apagarUsuario = (userId) => {
    
    const confirmaApagar = window.confirm('Tem certeza que deseja deletar o usuário?')
    
    if (confirmaApagar === true){
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
            headers: {
              Authorization: 'gislaine-costa-julian'
            }
          }
        )
      .then(response =>{
        alert('Usuário deletado com sucesso')
      })
      .catch(erro => {
        alert(erro.response)
      })
    }
  }

  render(){
  
    return (
      <TelaToda>
        <Titulo>Lista de Usuários</Titulo>
        <ListaUsuario>
          {this.state.listaUsuarios.map((user)=>{
            return <Usuario>
              <Nome>{user.name}</Nome>
              <Botao onClick={()=> {this.apagarUsuario(user.id)}}>Apagar</Botao>
            </Usuario>
          })}
        </ListaUsuario>
      </TelaToda>
    );
  }
}

export default Lista;