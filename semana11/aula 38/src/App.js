import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [mensagemErro, setMensagemErro] = useState(false)

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  let mensagem 
  if(postsList.length === 0){
    mensagem = "Nenhum post publicado"
  }else{
    mensagem = `Quantidade de Posts: ${postsList.length}`
  }

  const addPost = () => {
    // Adiciona um post à lista
    const newPost = {
      id: Date.now(),
      text: inputValue,
      liked: false
    };

    const newPostsList = [newPost, ...postsList];
    setInputValue('')
    setPostsList(newPostsList);
    setMensagemErro(inputValue === "" ? true : false)
  };

  const deletePost = postId => {
    // Apaga um post da lista
    const newPostsList = postsList.filter(post => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = postId => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  let conteudo 
  if (mensagemErro === false) {
    conteudo = postsList.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
            toggleLike={toggleLike}
            deletePost={deletePost}
          />
        );
      })
  }else{
    return(
      <p>Insira o conteúdo do Post</p>
    )
  }

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button onClick={addPost}>Adicionar</button>
      </div>
      <br />
      <h4>{mensagem}</h4>
      {conteudo}
    </div>
  );
};

export default App;
