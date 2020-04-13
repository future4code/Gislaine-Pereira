const postSite =[]

function postar(ev) {
    const conteudoArtigo = {
        titulo: document.getElementById('titulo-postagem').value,
        data: document.getElementById('data-postagem').value,
        tema: document.getElementById('tema-postagem').value,
        texto: document.getElementById('texto-postagem').value,
        fonte: document.getElementById('fonte-postagem').value,
        imagem: document.getElementById('imagem-postagem').value,
    }

    postSite.push(conteudoArtigo)

    document.getElementById('titulo-postagem').value = ""
    document.getElementById('data-postagem').value = ""
    document.getElementById('tema-postagem').value = ""
    document.getElementById('texto-postagem').value = ""
    document.getElementById('fonte-postagem').value = ""
    document.getElementById('imagem-postagem').value = ""

    document.getElementById("#conteudo-site").innerHTML += //não sei como enviar isso para a próxima página
        `<article class = "postagem">
        <h2> ${conteudoArtigo.titulo}</h2> <span class = "data" > Data Postagem: ${conteudoArtigo.data}<span>
        <span class = "tema-postagem" > - Tema: ${conteudoArtigo.tema}</span><br><br>
        <img class = "imagem-post" src = "${conteudoArtigo.imagem}"> 
        <p>${conteudoArtigo.texto}</p><br>        
        <span class= "fonte" > Fonte: ${conteudoArtigo.fonte}</span>
        <hr class="linha-postagem"></article >`

    alert('O conteúdo foi postado com secesso')
}
