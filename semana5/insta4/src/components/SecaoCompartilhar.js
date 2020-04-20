import React, {Component} from 'react'
import styled from 'styled-components'

import compartilharFace from '../img/face.png'
import compartilharInsta from '../img/instagram.png'
import compartilharTwit from '../img/twitter-icone.png'

let ShareContainer = styled.div `
    display: flex;
    justify-content: space-around;
    padding: 5px;
`

let ShareImg = styled.img `
    height: 2vw;
`


export class SecaoCompartilhar extends Component {

	compartilharFace =()=>{
		console.log('Post compartilhado no Facebook')
	}

	compartilharInsta = () => {
		console.log('Post compartilhado no Instagram')
	}

	compartilharTwit = () => {
		console.log('Post compartilhado no Twitter')
	}


	render(){		
		return <ShareContainer >
			<ShareImg src={compartilharFace} onClick={this.compartilharFace} />
			<ShareImg src={compartilharInsta} onClick={this.compartilharInsta} />
			<ShareImg src={compartilharTwit} onClick={this.compartilharTwit} />
		</ShareContainer>
	}	
}

