/*
============ Exercícios de interpretação de código ==================

EXERCICIO 1

a) Retornará vazio.

b) [0,1,0,1,2,3]

c) [0,1,0,1,2,3,0,1,2,3,4,5]



EXERCÍCIO 2

a) 0 2 undefined, O terceiro item é indefinido porque Paula é diferente de Paulinha

b) Sim, funciona. Porque esta funcão não depende do tipo, se é string ou número. Desde que o tipo seja respeitado quandoa função for invocada. 



EXERCICIO 3

A função retorna a soma (resultado A) e o produto (resultadoB) dos elementos da array dada pelo usuário. Eu daria o nome de somaEproduto





==================== Exercícios de escrita de código ==============================


EXERCÍCIO 4


a) */


function idadeCaoTranformada (idadeCao) {
   
    return idadeCao*7
}

idadeCaoReal = prompt('Qual a idade atual do seu doguinho?')

console.log('A idade em anos humanos do seu doguinho é: ' + idadeCaoTranformada(idadeCaoReal) + ' anos.')



// b)

function fraseCompletaDados(nomeF, idadeF, endereçoF, estudanteF){
   let estudo = ''

    if (estudanteF == true) {
        estudo = 'sou estudante'
    } 
    else {
        estudo = 'não sou estudante'
    }

    let dadosPessoa = 'Eu sou ' + nomeF + ' , tenho ' + idadeF + ' anos, moro em ' + endereçoF + ' e ' + estudo
    return dadosPessoa
}
 
nome = prompt('Qual seu nome?')
idade = Number(prompt('Qual a sua idade?'))
endereço = prompt('Qual seu endereço?')
voceEstuda = confirm('Você é estudante?')

console.log(fraseCompletaDados(nome, idade, endereço, voceEstuda))


//EXERCICIO 5


function qualSeculo(anoF) {
    let sec = Math.ceil(anoF/100)
    let romanos = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XX', 'XXX']
    let secUnidade = sec - 1
    let seculo =''
    
    
    if (sec <= 10){
        seculo = romanos[secUnidade]
    }
    else if (sec >10 && sec <= 20){
        console.log('seculo 10')
        seculo = romanos[9] + romanos [secUnidade - 10]
    }
    else if (sec > 20 && sec <= 30){
        console.log('seculo 20')
        seculo = romanos[10] + romanos[secUnidade - 20]
    }
    else if (sec > 30 && sec <= 40) {
        console.log('seculo 30')
        seculo = romanos[11] + romanos[secUnidade - 30]
    }
    else (console.log ('Insira números somente até 3.999dc'))

    let seculoRomano = ('O ano ' + anoF + ' pertence ao século ' + seculo)
    return seculoRomano
}

let ano = Number(prompt('Digite o ano'))
console.log(qualSeculo(ano))


/*
EXERCICIO 6 

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

a) */

let tamanhoArray = (array) =>{
    let tamanho = array.length
    return tamanho
}

console.log(tamanhoArray([10, 23, 45, 78, 90, 52, 35, 67, 84, 22]))


// b)

let parOuImpar = (numero) =>{
    let resto = numero%2

    if (resto===0) {
        return true
    }
    else{
    return false
    }
}


num = Number(prompt('Digite um número'))
console.log('O número ' + num + ' é  Par? - ' + parOuImpar(num))


//c)

let tamanhoArray = (array) => {
    let pares = []
    
    for (let i = 0; i < array.length; i++) {
        let resto = array[i]%2
          
        if (resto ===0) {
           pares.push(array)
        }
    }
    let tamanho = pares.length
    return tamanho
}

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
console.log(tamanhoArray(array))


//d) 

let tamanhoArray = (array) => {
    let pares = []

    for (let i = 0; i < array.length; i++) {
    

        if (parOuImpar(array[i]) === true) {
            pares.push(array)
        }
    }
    let tamanho = pares.length
    return tamanho
}

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
console.log(tamanhoArray(array))

