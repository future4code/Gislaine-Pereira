import React, { useState, useEffect } from "react";
import "./components.css";
import axios from "axios";


function Perfil(props) {
  
  const [perfil, setPerfil] = useState([]);
  const [isMatch, setIsMatch] = useState();
  
  useEffect(() => {
    pegaPerfil()}, 
  [props.baseUrl])

  const pegaPerfil = () => {
    axios
      .get(`${props.baseUrl}/person`)
      .then(response => {
        setPerfil(response.data.profile);

      })
      .catch(err => {
        console.log(err);
      });
  }

  const gosteiPerfil = () =>{
    setIsMatch(true)
    pegaPerfil()
  }

  const naoGosteiPerfil = () =>{
    setIsMatch(false)
    pegaPerfil()
  }

  console.log(isMatch)

  return (
    <div className="App" >
      
      <section className='informacoes'>
        <div className='moldura-perfil'>
          <img className='foto-perfil' src={perfil.photo} alt={'Foto Perfil'} />
        </div>
        <p>{perfil.name}</p>
        <p>{perfil.age}</p>
        <p>{perfil.bio}</p>
      </section>

      <section> 
        <button onClick={gosteiPerfil}>amei</button>
        <button onClick={naoGosteiPerfil}>não amei</button>
      </section>
    </div>
  );
}

export default Perfil;
