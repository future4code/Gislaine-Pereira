/* ========================================================================================================
================================== PROJETO SEMANA, PARTE 1 - AULA 14 ======================================
=========================================================================================================== 



********************************  EXERCÍCIOS DE LEITURA DE CÓDIGO *****************************************

EXERCÍCIO 1 
    O valor impresso depende do valor indicado pelo usuário no prompt. Esta função vai multiplicar o valor 
    de 100 pelo número indicado pelo usuário.

-----------------------------------------------------------------------------------------------------
EXERCÍCIO 2 
    Esta função leva em consideração 2 parâmetros: O tipo de investimento e o valor investido. 
    Por exemplo, se o usuário escolher a Poupança, o valor investido será multiplicado por 1.03, 
    se for Clipboard, 1.06 e assim por diante.  Ao final ele pede para imprimir no cosole qual valor
    novoMontante = 165
    segundoMontate = (vai ter um alert informando que o tipo de investimento é incorreto)

---------------------------------------------------------------------------------------------------
EXERCÍCIO 3
    Separa a array original em duas. A array1 com os números pares e a array2 com os ímpares.
    Respostas impressas no console:
        Quantidade de números 14
        6
        8

----------------------------------------------------------------------------------------------
EXERCÍCIO 4
    Estes comandos irão percorrer o array numeros. O numero1 será o menor valor (-10) e o número2 o maior (1590)




********************************  EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO ******************************************


EXERCÍCIO 1
    a)F
    b)F
    c)T
    d)T
    e)T (porém tem 2 repetidos)

----------------------------------------------------------------------------------
EXERCÍCIO 2
    Este código não vai funcionar. Não está vendo números pares e também falta pedir o número ao usuário. 
    Segue o código correto:

numeroFornecido = Number(prompt('Digite o número desejado'))
quantidadeDeNumerosPares = []

for (let i = 0; i <= ((numeroFornecido*2)-1); i++) {
    if (i % 2 === 0) {
        quantidadeDeNumerosPares.push(i)
    }
}
console.log(quantidadeDeNumerosPares)

-------------------------------------------------------------------------------------
EXERCÍCIO 3

ladoA = Number(prompt('Digite o tamanho (cm) do primeiro lado'))
ladoB = Number(prompt('Digite o tamanho (cm) do segundo lado'))
ladoC = Number(prompt('Digite o tamanho (cm) do terceiro lado'))
let tipoTriangulo = ""

function queTrianguloSera(ladoA, ladoB, ladoC) {
        
    if (ladoA === ladoB && ladoB === ladoC) {
        tipoTriangulo += 'Este triângulo é Equilátero'
    } 
    else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        tipoTriangulo += 'Este triângulo é Escaleno'
    }
    else{
        tipoTriangulo += 'Este triângulo é Isóceles'
    }
    return tipoTriangulo
}

console.log(queTrianguloSera(ladoA,ladoB,ladoC))

-------------------------------------------------------------------------------------------
EXERCÍCIO 4


num1 = Number(prompt('Digite o primeiro número'))
num2 = Number(prompt('Digite o segundo número'))

function qualMaior(a, b) {
    let maior = 0
   
    if (a<b) {
        maior = b
    } else {
       maior = a 
    }
    return maior
}

function divisível(a,b){
    let resposta = ""
    
    if (a%b === 0) {
        resposta = ' é '
    } 
    else {
        resposta = ' não é '
    }
    return resposta
}

function qualMenor(a, b) {
    let menor = 0

    if (a > b) {
        menor = b
    } else {
        menor = a
    }
    return menor
}

console.log('O maior é: ' + qualMaior(num1, num2) + "\n" + num1 + divisível(num1, num2) + "divisível por " + num2 +
             "\n" + num2 + divisível(num2, num1) + "divisível por " + num1 + "\n" + "A diferença entre eles é " +
    (qualMaior(num1, num2) - qualMenor(num1, num2)))



=============================================================================+++===========================
================================== PROJETO SEMANA, PARTE 2 - AULA 15 ======================================
===========================================================================================================


********************************  EXERCÍCIOS DE FUNÇÕES *****************************************

EXERCÍCIO 1 

let arrayNumeros = [12, 35, 72, 47, 58, 2, 45, 18]


function arrumarArray(arrayMaior) {
    arrayNumeros.sort((a, b) => a - b)
    let segundoMenor = "O segundo menor número é "
    let segundoMaior = "O segundo maior número é "
    
    segundoMaior += arrayNumeros[arrayNumeros.length - 2]
    segundoMenor += arrayNumeros[1]


    return segundoMaior + '\n' + segundoMenor
}

console.log(arrayNumeros)
console.log(arrumarArray(arrayNumeros))


---------------------------------------------------------------------
EXERCÍCIO 2

let fraseFinal = (a,b) =>{
    return a + " " + b
}

alert(fraseFinal("Hello", "Labenu" ))



********************************  EXERCÍCIOS DE OBJETOS *****************************************

EXERCÍCIO 1
    Array = conjunto de daods, um vetor, uma lista. 
            Aglomera uma lista de daos que podem ser acessados pelo seu índice (i) 
            Utilizada quando temos uma lista simples.
    
    Objeto = reune num só local ,uitas informações, desde stings, números e até arrays. 
            É uma coleção de dados, sendo que cada "entrada" (propriedade) tem uma chave e um valor.
            Utilizado quando temos dados heterogêneos
            
            
-------------------------------------------------------------------------------------           
EXERCÍCIO 2

let lado1 = Number(prompt("Digite a largura do retângulo (cm)"))
let lado2 = Number(prompt("Digite a altura do retângulo (cm)"))
let informacoesRetangulo = {}

function retangulo (a,b) {
    informacoesRetangulo.largura =  `${a} cm`
    informacoesRetangulo.altura = `${b} cm`
    informacoesRetangulo.perímeto = `${2*a + 2*b} cm`
    informacoesRetangulo.área = `${a*b} cm²`

    return informacoesRetangulo
}

console.log(retangulo(lado1, lado2))

------------------------------------------------------------------------------
EXERCICIO 3


let fraseFinal = ""

function formarFrase(){
    let filmeFavorito = {
        título: "Moulin Rouge",
        ano: 2001,
        diretor: "Baz Luhrmann",
        elenco: ['Ewan McGregor', 'Nicole Kidman', 'Deobia Oparei', 'John Leguizamo', 'Jim Broadbent', 'Richard Roxburgh']
    }

    fraseFinal += `Venha  se emocionar com o aclamado musical ${filmeFavorito.título}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.elenco}.`
    return fraseFinal
}

document.write(formarFrase())


-------------------------------------------------------------------------------------
EXERCÍCIO 4

Crie um objeto que represente uma pessoa qualquer, 
com as propriedades de nome, idade, email e endereco.Crie uma função chamada anonimizarPessoa, 
que deverá retornar um novo objeto com as mesmas propriedades, mas com a string ANÔNIMO no lugar do nome.
O objeto original deve ser mantido com o nome da pessoa.


const pessoa = {
    nome: "Gislaine Costa",
    idade: 36,
    eMail: "gislaine_costa@hotmail.com",
    endereço: "Servidão Anhatomirim, 71. Ponta das Canas, Florianópolis/SC"
}

function anonimizarPessoa() {
    const anonimo = {
        ...pessoa,
        nome: "ANÔNIMO"
    }

    return anonimo
}

*/