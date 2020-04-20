import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvarBranco from '../../img/salvarbranco.svg'
import iconeSalvarPreto from '../../img/salvarpreto.svg'
import iconeCompartilhar from '../../img/share-24px.svg'

import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhando: false
  }

  onClickCurtida = () => {
    let valorCurtidas = this.state.numeroCurtidas
    
    if (this.state.curtido) {
      this.setState({numeroCurtidas: valorCurtidas -1})
    }
    else{
      this.setState({numeroCurtidas: valorCurtidas +1})
    }
    
    this.setState({
      curtido: !this.state.curtido
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickSalvar = () => {
    this.setState({
      salvo: !this.state.salvo
    })
  }


  onClickCompartilhar = () => {
     this.setState({
      compartilhando: !this.state.compartilhando
  })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }


    let iconeSalvar

    if(this.state.salvo) {
      iconeSalvar = iconeSalvarPreto
    } else {
      iconeSalvar = iconeSalvarBranco
    }

    let componenteCompartilhar

    if (this.state.compartilhando) {
      componenteCompartilhar = <SecaoCompartilhar />
    }


    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeSemContador
          icone={iconeSalvar}
          onClickIcone={this.onClickSalvar}
        />

        <IconeSemContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />

      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  }
}

export default Post