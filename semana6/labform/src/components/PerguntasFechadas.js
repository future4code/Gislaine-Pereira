import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1vw;
    align-items: center;
`

const Pergunta = styled.h4``;

const Selecione = styled.select ``;

export class PerguntaFechada extends React.Component {
    state ={
        opcoesResposta: [this.props.opcoes]
    }
    
    
    render() {
       console.log(this.state.opcoesResposta)
       return (
             
            <Container>
                <Pergunta>
                    {this.props.pergunta}
                </Pergunta>

                <Selecione>
                    <option>{this.props.opcoes[0]}</option>
                    <option>{this.props.opcoes[1]}</option>
                    <option>{this.props.opcoes[2]}</option>
                    <option>{this.props.opcoes[3]}</option>
                </Selecione>
            </Container>
            
        );
    }
}
