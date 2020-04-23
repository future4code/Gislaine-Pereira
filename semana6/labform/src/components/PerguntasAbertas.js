import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1vw;
    align-items: center;
`
const Pergunta = styled.h4 ``;

const Input = styled.input ``;

export class PerguntaAberta extends React.Component {

    render() {
        return (
            <Container>
                <Pergunta>
                    {this.props.pergunta}
                </Pergunta>

                <Input />
            </Container>
        );
    }
}
