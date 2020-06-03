import React from 'react';
import './App.css';
import DiaSemana from './components/DiaSemana'

const urlBase = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-gislaine"

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
    <div id="tela-toda">
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
          
          <button onclick="adicionaTarefa()">Criar Tarefa</button>
      </header>
        
      <div id="tarefas">
        <DiaSemana className="container-dia"/>
        <DiaSemana className="container-dia"/>
        <DiaSemana className="container-dia"/>
        <DiaSemana className="container-dia"/>
        <DiaSemana className="container-dia"/>
        <DiaSemana className="container-dia"/>
        <DiaSemana className="container-dia"/>
      </div>
    </div>
  );
}

export default App;
