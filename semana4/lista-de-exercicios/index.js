/* ==========================  EXERCÍCIOS DE LEITURA DE CÓDIGO =====================================

EXERCÍCIO 1 
    O valor impresso depende do valor indicado pelo usuário no prompt. Esta função vai multiplicar o valor 
    de 100 pelo número indicado pelo usuário.

EXERCÍCIO 2 
    Esta função leva em consideração 2 parâmetros: O tipo de investimento e o valor investido. 
    Por exemplo, se o usuário escolher a Poupança, o valor investido será multiplicado por 1.03, 
    se for Clipboard, 1.06 e assim por diante.  Ao final ele pede para imprimir no cosole qual valor
    novoMontante = 165
    segundoMontate = (vai ter um alert informando que o tipo de investimento é incorreto)

    

EXERCÍCIO 3
    Separa a array original em duas. A array1 com os números pares e a array2 com os ímpares.
    Respostas impressas no console:
        Quantidade de números 14
        6
        8

EXERCÍCIO 4
    Estes comandos irão percorrer o array numeros. O numero1 será o menor valor (-10) e o número2 o maior (1590)




==========================  EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO =====================================


EXERCÍCIO 1
    a)F
    b)F
    c)T
    d)T
    e)T (porém tem 2 repetidos)

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



*/