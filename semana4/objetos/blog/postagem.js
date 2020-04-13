function postar(ev){
    const conteudoArtigo = {
        titulo: document.getElementById('titulo-postagem').value,
        data: document.getElementById('data-postagem').value,
        texto1: document.getElementById('primeiro-texto').value,
        texto2: document.getElementById('segundo-texto').value,
        fonte: document.getElementById('fonte-postagem').value,
        imagem: document.getElementById('imagem-postagem').value,
    }

    postSite.push(conteudoArtigo)

    document.getElementById('titulo-postagem').value = ""
    document.getElementById('data-postagem').value = ""
    document.getElementById('primeiro-texto').value = ""
    document.getElementById('segundo-texto').value = ""
    document.getElementById('fonte-postagem').value = ""
    document.getElementById('imagem-postagem').value = ""
    
    document.getElementById("#conteudo-site").innerHTML += //não sei como enviar isso para a próxima página
        '<article class = "postagem">'+
        '<h2>' +  conteudoArtigo.titulo +  '</h2>'+
        '<span class = "data" > Data Postagem: ' +  conteudoArtigo.data +  '<sspan><br><br>'+
        '<img class = "imagem-post" src = "' +  conteudoArtigo.imagem +  '">' +
        '<p> ' +  conteudoArtigo.texto2 +  ' <span class = "pontos" > ... </span> <br><br>' +
        '<span class = "mais">' +  conteudoArtigo.texto1 +  '</span></p><br> ' +
        '<button onclick = "leiaMais(this)" class = "botao-leia-mais" > &#10038; Abra a caixa</button><br>' +
        '<span class= "fonte" > Fonte: ' +  conteudoArtigo.fonte +  ' </span> </article >'

    alert('O conteúdo foi postado com secesso')
}


