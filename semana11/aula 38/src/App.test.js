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

