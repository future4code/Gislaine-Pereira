import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  cursor:pointer;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filter: ''
    }


  componentDidUpdate() {
    const novasTarefas = this.state;
    localStorage.setItem("tarefasGuardadas", JSON.stringify(novasTarefas));
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novaListaDeTarefas = [novaTarefa, ...this.state.tarefas]
    this.setState ({tarefas: novaListaDeTarefas, inputValue: ""})
  }

  selectTarefa = (id) => {
    const tarefaFeita = this.state.tarefas.map((tarefa)=>{
      if(id === tarefa.id){
        const tarefasConcluidas = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return tarefasConcluidas
      } 
      else{
        return tarefa
      }
    })  
    
    this.setState({tarefas:tarefaFeita})
  }

  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value })
  }

  apagarTarefa = (tarefaId) => {
    const novaListaDeTarefas = this.state.tarefas.filter((tarefa) => {
      return tarefaId !== tarefa.id
    })

    this.setState({tarefas: novaListaDeTarefas})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer> <br/>
        <p>Para marcar uma tarefa como concluída, clique 1 vez. Para apagar uma tarefa, clique 2 vezes.</p>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick={() => this.apagarTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
