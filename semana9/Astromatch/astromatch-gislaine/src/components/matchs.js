import React, { useState, useEffect } from "react";
import "./components.css";
import axios from "axios";
import styled from 'styled-components';

const ContainerMatch = styled.section`
  background-size: cover;
  background-image: url(${props => props.imagem});
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center;
  width: 13vw;
  height: 13vw;
  border-radius: 50%;
  margin-right: 3vw;
  box-shadow:  -3px 1px 4px 0px rgba(74, 163, 151, 0.7);
  border: 2px solid #753192;
`

function Perfil(props) {

  const [match, setMatch] = useState([{
      "id": "71gMbZs2txS9LDvGK5Ew",
      "age": 26,
      "name": "Anitta",
      "photo": "https://images.outgo.com.br/clients/1/events/2923/Anitta-Perfil-4-1.png",
      "bio": "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
      },
      {
          "id": "YEzTxkmzuNanBY55rJrw",
          "age": 70,
          "name": "Dory",
          "photo": "https://imgix.bustle.com/rehost/2016/9/13/a9a9b50d-6a3e-469c-b24c-ecaebe55f43a.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70&dpr=2",
          "bio": "Gosto de nadar e cantar. Procuro pessoas que entendam baleies e..."
      },
      {
          "id": "STPkwKJPB2Bhe1LTjQfU",
          "name": "Buzz Aldrin",
          "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Buzz_Aldrin.jpg/800px-Buzz_Aldrin.jpg",
          "bio": "Para o alto e avante! Gosto de construir coisas, mas sou um pouco estourado.",
          "age": 36
      },
  ]);


//  useEffect(() => {
//    axios
//      .get(`${props.baseUrl}/matches`)
//      .then(response => {
//        setMatch(response.data.results);
//
//      })
//      .catch(err => {
//        console.log(err);
//      });
//  }, [match, props.baseUrl])

  const clicouPerfilMatch = () =>{}

  const listaMatchs = match.map((pessoa) => {
  return <article onClick={clicouPerfilMatch()} className='perfis-match' key={pessoa.id}>
            <ContainerMatch imagem= {pessoa.photo} />
            <p>{pessoa.name}</p>
    </article>
  })

  return (
    <div className="App">
      {listaMatchs}
    </div>
  );
}

export default Perfil;