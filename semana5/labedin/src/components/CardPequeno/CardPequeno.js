import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="shortcard-container">
            <img src={ props.icone } />
            <p> <b> { props.textoNegrito }</b> { props.textoNormal }</p>
        </div>
    )
}

export default CardPequeno;