import React from "react";
import styled from "styled-components";
import {PerguntaAberta} from "./PerguntasAbertas";
import {PerguntaFechada} from "./PerguntasFechadas";

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

export class Etapa3 extends React.Component {

    render() {
        return (
            <Container>
                <Titulo>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulo>
                
                <PerguntaAberta pergunta={'5. Por que você não terminou um curso de graduação?'}></PerguntaAberta>

                <PerguntaFechada
                    pergunta={'6. Você fez algum curso complementar?'}
                    opcoes={[
                        "Nenhum",
                        "Curso Técnico",
                        "Curso de Inglês",
                    ]}
                ></PerguntaFechada>

                <Botao onClick={this.props.prox3}>Próxima Etapa</Botao>
            </Container>
        );
    }
}
