import React, { useState, useEffect } from 'react';
import '../App';

const DiaSmena =(props) =>{
    const [tarefasDoDia, setTarefasDoDia] = useState([])

    useEffect(() =>{
        setTarefasDoDia(props.listaTarefasDia)
    }, [props.listaTarefasDia])

    const riscarTarefa = (tarefaExecutada) => {
        tarefaExecutada.style.textDecoration = "line-through";
    }

    const tarefasNaTela = tarefasDoDia.filter((tarefa, index, array) =>{
        return tarefa.day === props.titulo
    }).map((tarefa) => {
      return <article className="tarefa" id={tarefa.id} key={tarefa.id}>
          <p> ✔ {tarefa.text}</p>
      </article>
    })

    return(
        <div div className = "dia-semana" >
            <section class="titulo-dia">{props.titulo}</section>
            <section class="conteudo">{tarefasNaTela}</section>
        </div>
    )
}

export default DiaSmena;