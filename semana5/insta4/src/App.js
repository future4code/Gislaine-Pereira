import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import postGislaine from './img/DSC04326.jpg'
import perfilGislaine from './img/perfil.jpg'
import postGislaine2 from './img/Abelha.jpg'
import perfilGislaine2 from './img/perfil2.jpg'

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Gislaine Costa'}
          fotoUsuario={perfilGislaine}
          fotoPost={postGislaine}
        />

        <Post
          nomeUsuario={'Gika Pereira'}
          fotoUsuario={perfilGislaine2}
          fotoPost={postGislaine2}
        />
      </div>
    );
  }
}

export default App;
