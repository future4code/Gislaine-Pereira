import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    return (
        <div className="image-button-container">
            <a href={props.link}> <img src={ props.imagem }/></a>
            <a href={props.link}> { props.texto }</a>
        </div>

    )
}

export default ImagemButton;