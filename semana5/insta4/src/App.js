import React from 'react';
import styled from 'styled-components';

import Post from './components/Post';
import postGislaine from './img/DSC04326.jpg'
import perfilGislaine from './img/perfil.jpg'
import postGislaine2 from './img/Abelha.jpg'
import perfilGislaine2 from './img/perfil2.jpg'

let FormInput = styled.input `
  margin: 0.5vw;
  width: 18vw;
`

let ButtonInput = styled.button `
  margin: 1vw;
  border-radius: 30%;
  width: 6vw;
  height: 2.5vw;
  background-color: black;
  color: #fff;
`

let ContainerPrincipal = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1vw;
`

let TituloForm = styled.h2`
  color: black;
  font-weight: bold;
  text-align:center;
`

let Formulario = styled.div`
  border: 1px solid black;
  border-radius: 10%;
  height: 45vh;
  width: 20vw;
`
let Secao = styled.section `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
      { 
        nomeUsuario: 'paulinha', 
        fotoUsuario: 'https://picsum.photos/50/50?a=1', 
        fotoPost: 'https://picsum.photos/200/150?a=2' 
      }, 
      { 
        nomeUsuario: 'Gislaine Costa', 
        fotoUsuario: perfilGislaine, 
        fotoPost: postGislaine
      },
      { 
        nomeUsuario: 'Gika Pereira', 
        fotoUsuario: perfilGislaine2, 
        fotoPost: postGislaine2 
      }
    ]
  };

  adicionaPost = () => {
      
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };
    
    const postsSite = [...this.state.posts, novoPost];

    this.setState({ posts: postsSite });
    this.setState({ valorInputUsuario: "" });
    this.setState({ valorInputFotoUsuario: "" });
    this.setState({ valorInputFotoPost: "" });
  }
    
  onChangeInputUsuario = event => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = event => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = event => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {

    const listaPosts = this.state.posts.map((post) => {
      return(
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });
    
    return (
      < ContainerPrincipal >
        <Secao>
          {listaPosts}
        </Secao>
        
        < Formulario >
          <TituloForm>Insira um novo post</TituloForm>

          <FormInput
          value={this.state.valorInputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={"Usuário"}
          /><br/>
          
          <FormInput 
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"URL da foto do usuário"}
          /><br/>

          <FormInput 
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"URL da foto do post"}
          /><br/>

          <ButtonInput onClick={this.adicionaPost}> Postar</ButtonInput>
        </Formulario>

      </ContainerPrincipal>
    );
  }
}

export default App;
