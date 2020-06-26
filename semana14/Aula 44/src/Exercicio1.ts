
// A)

let saudacao: string = 'Hello World'
console.log(saudacao)

/* Aparece o erro: error TS2322: Type '42' is not assignable to type 'string'. */

//-------------------------------------------------------------------------------

// B)
let numero: number = 42


//Para aceitar um string podemos colocar um | e fica: 

let numeroString: number | string = 42

//--------------------------------------------------------------------------------

// C)
type pessoa = {
    name: string,
    age: number,
    corFavorita: string
}
const astrodev: pessoa = {
    name: 'Astro',
    age: 25,
    corFavorita: 'laranja'
}

//---------------------------------------------------------------------

// D)
const Gislaine: pessoa = {
    name: 'Gislaine',
    age: 36,
    corFavorita: 'preto'
}

const Luciano: pessoa = {
    name: 'Luciano',
    age: 36,
    corFavorita: 'azul'
}

const Laureci: pessoa = {
    name: 'Laureci',
    age: 64,
    corFavorita: 'amarelo'
}

//----------------------------------------------------------------------

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

type Cores = {
    class: arcoIris
}

const Joaão: Cores = {
    class: arcoIris.violeta
}