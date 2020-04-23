import React from "react";
import styled from "styled-components";
import {PerguntaAberta} from "./PerguntasAbertas";
import {PerguntaFechada} from "./PerguntasFechadas";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1vw;
    align-items: center;
    height: 90vh;
`

const Titulo = styled.h1`
    font-weight: bold;
    text-align: center;
`;

const Botao = styled.button``;

export class Etapa1 extends React.Component {

    render() {
        return (
            <Container>
                <Titulo>Etapa 1 - DADOS GERAIS</Titulo>

                <PerguntaAberta pergunta={"1. Qual o seu nome?"} />

                <PerguntaAberta pergunta={"2. Qual sua idade?"} />

                <PerguntaAberta pergunta={"3. Qual seu email?"} />

                <PerguntaFechada
                    pergunta={"4. Qual a sua escolaridade?"}
                    opcoes={[
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo"
                    ]}
                />
                
                <Botao onClick={this.props.prox1}>Próxima Etapa</Botao>
            </Container>
        );
    }
}