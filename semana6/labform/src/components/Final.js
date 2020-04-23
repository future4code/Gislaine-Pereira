import React from "react";
import styled from "styled-components";

const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1vw;
    align-items: center;
`

const Titulo = styled.h1`
    font-weight: bold;
    text-align: center;
`;

const Texto = styled.h3``;

export class Final extends React.Component {

    render() {
        return (
            <Container>
                <Titulo>O FORMULÁRIO ACABOU</Titulo>
                <Texto> Muito obrigado por participar!Entraremos em contato!</Texto>
            </Container>
        );
    }
}
