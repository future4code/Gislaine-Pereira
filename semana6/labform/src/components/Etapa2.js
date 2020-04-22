import React from "react";
import styled from "styled-components";
import {PerguntaAberta} from "./PerguntasAbertas";


const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1vw;
    align-items: center;
    height: 60vh;
`

const Titulo = styled.h1`
    font-weight: bold;
    text-align: center;
`;


const Botao = styled.button``;

export class Etapa2 extends React.Component {

    render() {
        return (
            <Container>
                <Titulo>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>
                
                <PerguntaAberta pergunta={'5. Qual curso?'}></PerguntaAberta>

                <PerguntaAberta pergunta={'6. Qual a unidade de ensino?'}></PerguntaAberta><br/>

                <Botao onClick={this.props.prox2}>Próxima Etapa</Botao>
            </Container>
        );
    }
}
