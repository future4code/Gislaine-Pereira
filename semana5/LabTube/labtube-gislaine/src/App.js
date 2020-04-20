import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const titulo = "Titulo do vídeo"
  
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }
  
  return (
    <div>
      <div className="tela-inteira">
        <header>
       
        <div id="busca">
            <input type="text" placeholder="Busca" id="campoDeBusca" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4PbNa0D5n2vvkEIv6lA917YiWqTk9W0auuKwtMwh48qqra-ad&usqp=CAU" alt="" />
          </div>

          <div id="icones">
            <img src="https://image.flaticon.com/icons/png/512/54/54544.png" alt="" />
            <img src="https://image.flaticon.com/icons/png/512/58/58841.png" alt="" />
            <img src="https://image.flaticon.com/icons/png/512/61/61073.png" alt="" />
            <img src="https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg" alt="" />
          </div>
        </header>

        <nav className="menu-vertical">
          <img src="https://image.flaticon.com/icons/png/512/59/59165.png" alt="" />
          <span>LabTube</span>
          <ul>
            <li className="botoes-meunu-vertical"> <img src="https://image.flaticon.com/icons/png/512/45/45180.png" alt="" /> Início</li><br />
            <li className="botoes-meunu-vertical"> <img src="https://image.flaticon.com/icons/png/512/1085/1085688.png" alt="" /> Em alta</li><br />
            <li className="botoes-meunu-vertical"> <img src="data:image/png;base64,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" alt="" /> Inscrições</li><br /><br />
            <hr /> <br /><br />
            <li className="botoes-meunu-vertical"> <img src="https://image.flaticon.com/icons/png/512/129/129413.png" alt="" /> Originais</li><br />
            <li className="botoes-meunu-vertical"> <img src="https://image.flaticon.com/icons/png/512/61/61122.png" alt="" /> Histórico</li>
          </ul>
        </nav>

        <main>
          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="" />
              <h4>{titulo}</h4>
            </div>
          </section>
        </main>

      </div>
    </div>
  );
}

export default App;
