
// A)

let saudacao: string = "Hello, World"
console.log(saudacao)



// B)
let numero: number = 18



// C)
type pessoa = {
    name: string,
    age: number,
    corFavorita: string
}
const astrodev: pessoa = {
    name: 'Astro',
    age: 30,
    corFavorita: 'branco'
}



// D)
const Julian: pessoa = {
    name: 'Julian',
    age: 59,
    corFavorita: 'laranja'
}

const Bouman: pessoa = {
    name: 'Bouman',
    age: 37,
    corFavorita: 'cinza'
}

const Hamilton: pessoa = {
    name: 'Hamilton',
    age: 30,
    corFavorita: 'black'
}



// E)
enum arcoIris {
    vermelho = "vermelho",
    laranja = 'laranja',
    amarelo = "amarelo",
    verde = "verde",
    azul = "azul",
    INDIGO = 'indigo',
    violeta = "violeta"
}

type LabeUser = {
    class: arcoIris
}
const Newton: LabeUser = {
    class: arcoIris.violeta
}