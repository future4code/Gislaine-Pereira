type post = {
    autor: string,
    texto: string
}

const listaPosts: post[] = [
    {
        autor: 'Gislaine',
        texto: 'Dia  cansativo hoje'
    },
    {
        autor: 'Natasha',
        texto: 'Adoro patê de atum'
    },
    {
        autor: 'Phoebe',
        texto: 'Hoje persegui um ponto vermelho, não consegui pegar'
    },
    {
        autor: 'Padmé',
        texto: 'Aquele lagarto hoje não me escapa'
    },
    {
        autor: 'Chloe',
        texto: 'Já disse que estou com sono hoje?'
    },
    {
        autor: 'Padmé',
        texto: 'Queria que a mamãe trouxesse uma tainha hoje'
    },
    {
        autor: 'Natasha',
        texto: 'Armei uma tocaia para a Sophia e ela nem percebeu'
    },
]


function escolheAutor(filtrados: post[], autorPost: string): post[]{
    let postsAutor = filtrados.filter((post) =>{
        return post.autor === autorPost 
    })
    return postsAutor
}

console.log(escolheAutor(listaPosts, 'Natasha'))