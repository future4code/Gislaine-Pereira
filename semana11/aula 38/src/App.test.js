import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

const criarPost = () =>{
    const utils = render (<App />)

    const input = utils.getByPlaceholderText('Novo post')
    fireEvent.change(input, {
        target:{
            value: "Post Teste"
        }
    })

    const button = utils.getByText(/Adicionar/)
    fireEvent.click(button)
    return utils
}

describe("Ações com os posts", () => {
    test("Criar novo post ao clicar no Botão de novo Post", () =>{
        const { getByText } = criarPost()
        const post = getByText("Post Teste")
        expect(post).toBeInTheDocument()
    })

    test("Curtir um post ao clicar no botão de curtir", () =>{
        const { getByText } = criarPost()
        const button = getByText("Curtir")
        fireEvent.click(button)
        expect(button).toHaveTextContent(/Descurtir/)
    })

    test("deve-se apagar o post quando clicar no botão de apagar", () =>{
    const { getByText, queryByText } = criarPost()
    const botaoApagar = getByText(/Apagar/)
    fireEvent.click(botaoApagar)
    const verificaPost = queryByText(/Post Teste/)
    expect(verificaPost).toEqual(null)
    })
})

describe("Ações com o input", () =>{
    test('Ao clicar em criar post, o input deve ser limpo', () =>{
        const { getByPlaceholderText } = criarPost()
        const inputNovoPost = getByPlaceholderText(/Novo post/).value
        expect(inputNovoPost).toEqual('')
    })

    test("mensagem Nenhum post deve aparecer na tela quando não houver post", () => {
    const {getByText} = render(<App/>)
    const nenhumPost = getByText(/nenhum post publicado/i)
    expect(nenhumPost).toBeInTheDocument()
    })

    test("mostrar quantidade de posts caso exista ao menos um", () => {
        const {getByText} = criarPost()
        const quantosPosts = getByText(/1/)
        expect(quantosPosts).toBeInTheDocument(/quantidade de posts/i)
    })

    test("caso o usuário tente criar post vazio", () => {
    const {getByText} = render(<App/>)
    const button = getByText(/adicionar/i)
    fireEvent.click(button)
    expect(getByText(/Insira o conteúdo do Post/i).toBeInTheDocument())
    })
})

