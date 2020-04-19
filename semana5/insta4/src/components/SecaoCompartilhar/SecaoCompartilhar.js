import React, {Component} from 'react'
import './SecaoCompartilhar.css'

import compartilharFace from '../../img/face.png'
import compartilharInsta from '../../img/instagram.png'
import compartilharTwit from '../../img/twitter-icone.png'

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
		return <div className={'share-container'}>
			<img src={compartilharFace} onClick={this.compartilharFace} />
			<img src={compartilharInsta} onClick={this.compartilharInsta} />
			<img src={compartilharTwit} onClick={this.compartilharTwit} />
		</div>
	}	
}

