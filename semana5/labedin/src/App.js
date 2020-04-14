import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import FotoPerfil from './imagens/perfil.jpg'
import IconeEmail from './imagens/email.png'
import IconeLocal from './imagens/endereço.png'
import IconeUFSC from './imagens/ufsc.jpg'
import IconePrime from './imagens/prime.jpg'
import IconeLabenu from './imagens/Labenu.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {FotoPerfil}
          nome="Gislaine Costa Pereira" 
          descricao= "Engº Agrônoma e Mestra em Nutrição Animal. Nerd, apaixonada por números, animais, novos conhecimentos, tecnologia e esportes ao ar livre."
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      < div className = "page-section-container" >
        <CardPequeno
          icone = {IconeEmail}
          textoNegrito = 'E-mail:'
          textoNormal = 'gislainecosta@agronoma.eng.br'
        />

        < CardPequeno
          icone = {IconeLocal}
          textoNegrito = 'Endereço:'
          textoNormal = 'Servidão Anhatomirim, 71.'
        />        

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={IconePrime}
          nome="Prime Pet Food" 
          descricao = "Assistente de Pesquisa e desenvolvimento."
        />
        
        <CardGrande 
          imagem={IconeUFSC}
          nome="Universidade Federal de Santa Catarina" 
          descricao = "Professora Substituta - Departamento de Zootecnia e Des. Rural"
        />
      </div>


      <div className="page-section-container">
        <h2>Cursos de Aperfeiçoamento</h2>
        <CardGrande 
          imagem={'https://img.ibxk.com.br/2020/02/18/18134521166101.jpg'}
          nome="Udemy" 
          descricao = "Cientista de Dados"
        />
        
        <CardGrande 
          imagem={IconeLabenu}
          nome="Labenu" 
          descricao = "Desenvolvimento Web Full Stack"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          link = "https://www.facebook.com/gislainecostapereira"
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem = "https://www.meioemensagem.com.br/wp-content/uploads/2016/05/Instagram-NovoIcone-Recorte-293x300.jpg"
          link = "https://www.instagram.com/costa.gislaine/"
          texto="Instagram" 
        />        
      </div>
    </div>
  );
}

export default App;
