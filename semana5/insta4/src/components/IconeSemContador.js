import React from 'react'
import styled from 'styled-components'

let ContainerIcone = styled.div `
	display: flex;
`

let Imagem = styled.img `
	margin-right: 5px;
`

export function IconeSemContador(props) {
	return <ContainerIcone className={'icon-container'}>
		<Imagem alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
	</ContainerIcone>
}
