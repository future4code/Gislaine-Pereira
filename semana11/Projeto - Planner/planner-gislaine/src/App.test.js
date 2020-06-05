import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import App from './App';
import DiaSemana from './components/DiaSemana'

const criarTArefa = () =>{
  const utils = render(<App />)
  const input = utils.getByPlaceholderText(/Insira sua Tarefa/)
  const botao = utils.getByText(/Criar/)
  fireEvent.change(input, {
    target: {
      value: 'tarefa teste'
    }
  })
  fireEvent.click(botao)
  return utils
}

describe("Renderização inicial", () =>{
  test("Input texto aparece na tela", ()=>{
    const { getByPlaceholderText } = render(<App />)
    const input = getByPlaceholderText(/Insira sua Tarefa/)
    expect(input).toBeInTheDocument()
  })

  test("Select aparece na tela", () =>{
    const { getByText } = render(<App />)
    const select = getByText(/Selecione o dia/)
    expect(select).toBeInTheDocument()
  })

  test("Botão Adicionar Tarefa Aparfece na Tela", () =>{
    const { getByText } = render(<App />)
    const botao = getByText(/Criar/)
    expect(botao).toBeInTheDocument()
  })
})

describe("Criação de uma nova tarefa", () =>{

  test("Ao digitar no input, o texto deverá aparecer na tela", () =>{
    const { getByPlaceholderText } = render(<App />)
    const input = getByPlaceholderText(/Insira sua Tarefa/)
    fireEvent.change(input, {
      target:{
        value: 'tarefa teste'
      }
    })
    expect(input).toHaveValue('tarefa teste')
  })

  test('Ao clicar no botão "Criar", o input deve ser limpo', () =>{
    const { getByPlaceholderText } = criarTArefa()
    const input = getByPlaceholderText(/Insira sua Tarefa/)
    expect(input).toHaveValue("")
  })
})
