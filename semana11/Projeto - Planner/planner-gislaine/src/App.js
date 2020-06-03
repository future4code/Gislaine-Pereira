import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const adicionaTarefa = () => {
    const diaSemana = document.getElementById('selecionar-dia').value
    const minhaTarefa = document.getElementById('descreve-tarefa')
    const textoTarefa = document.getElementsByClassName('conteudo')
    const horarioTarefa = document.getElementById('horario').value


    if (minhaTarefa.value == '' || minhaTarefa.value == ' ') {
      alert('Insira pelo menos uma tarefa')
    } else {
      switch (diaSemana) {
        case 'domingo':
          textoTarefa[0].innerHTML += "<p onclick='riscarTarefa(this)'>" + horarioTarefa + " - " + minhaTarefa.value + '</p>'
          break;

        case 'segunda':
          textoTarefa[1].innerHTML += "<p onclick='riscarTarefa(this)'>" + horarioTarefa + " - " + minhaTarefa.value + '</p>'
          break;

        case 'terça':
          textoTarefa[2].innerHTML += "<p onclick='riscarTarefa(this)'>" + horarioTarefa + " - " + minhaTarefa.value + '</p>'
          break;

        case 'quarta':
          textoTarefa[3].innerHTML += "<p onclick='riscarTarefa(this)'>" + horarioTarefa + " - " + minhaTarefa.value + '</p>'
          break;

        case 'quinta':
          textoTarefa[4].innerHTML += "<p onclick='riscarTarefa(this)'>" + horarioTarefa + " - " + minhaTarefa.value + '</p>'
          break;

        case 'sexta':
          textoTarefa[5].innerHTML += "<p onclick='riscarTarefa(this)'>" + horarioTarefa + " - " + minhaTarefa.value + '</p>'
          break;

        default:
          textoTarefa[6].innerHTML += "<p onclick='riscarTarefa(this)'>" + horarioTarefa + " - " + minhaTarefa.value + '</p>'
          break;
      }
    }
    minhaTarefa.value = ""
  }


  const limpezatotal = () => {
    let tudoEmBranco = document.getElementsByClassName('conteudo')

    for (let i = 0; i < tudoEmBranco.length; i++) {
      tudoEmBranco[i].innerHTML = " "
    }
  }

  const riscarTarefa = (tarefaExecutada) => {
    tarefaExecutada.style.textDecoration = "line-through";
  }
  
  
  return (
    <div id="container">
        <header>
            <h1>Minha Semana</h1>
            <textarea wrap="hard" placeholder="Descrição da tarefa" id="descreve-tarefa"></textarea>
            <select id="selecionar-dia">
                <option value="domingo">Domingo</option>
                <option value="segunda">Segunda</option>
                <option value="terça">Terça</option>
                <option value="quarta">Quarta</option>
                <option value="quinta">Quinta</option>
                <option value="sexta">Sexta</option>
                <option value="sabado">Sábado</option>
            </select>
            
            <select id="horario">
                <option value="00:00">00:00</option>
                <option value="01:00">01:00</option>
                <option value="02:00">02:00</option>
                <option value="03:00">03:00</option>
                <option value="04:00">04:00</option>
                <option value="05:00">05:00</option>
                <option value="06:00">06:00</option>
                <option value="07:00">07:00</option>
                <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
                <option value="23:00">23:00</option>
            </select>
            
            <button onclick="adicionaTarefa()">Criar Tarefa</button>
            <button onclick="limpezatotal()">Apagar Todas</button>
        </header>
            
        <div id="tarefas">
    
            <div class="dia-semana">
                <section class="titulo-dia">Domingo</section>
                <section class="conteudo"></section>
            </div>
            
            <div class="dia-semana">
                <section class="titulo-dia">Segunda</section>
                <section class="conteudo"></section>
            </div>
            
            <div class="dia-semana">
                <section class="titulo-dia">Terça</section>
                <section class="conteudo"></section>
            </div>
            
            <div class="dia-semana">
                <section class="titulo-dia">Quarta</section>
                <section class="conteudo"></section>
            </div>
    
            <div class="dia-semana">
                <section class="titulo-dia">Quinta</section>
                <section class="conteudo"></section>
            </div>
    
            <div class="dia-semana">
                <section class="titulo-dia">Sexta</section>
                <section class="conteudo"></section>
            </div>
    
            <div class="dia-semana">
                <section class="titulo-dia">Sábado</section>
                <section class="conteudo"></section>
            </div>
    
        </div>

    </div>
  );
}

export default App;
