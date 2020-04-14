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


========================================================================================
=============================== PROJETO SEMANA, PARTE 3 - AULA 16 ======================
=========================================================================================


********************************EXERCÍCIOS DE FUNÇÕES DE ARRAY ***************************

EXERCÍCIO 1
    for, forOf e While

    arrayNum = [0,1,2,3,4]

    let resultado = 0

    while (i < arrayNumero.length) {
        resultado += arrayNumero[i]
        i++
    }

    for (let i = 0; i < arrayNumero.length; i++) {
        resultado += arrayNumero[i];

    }

    for (numero of arrayNum) {
        resultado += numero
    }


---------------------------------------------------------------
EXERCÍCIO 2


const alunos = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const adultos = alunos.filter(
    (adulto, index, array) =>{
        return adulto.idade >= 18
    }
)

const menores = alunos.filter(
    (adulto, index, array) => {
        return adulto.idade < 18
    }
)

-------------------------------------------------------------------------
EXERCÍCIO 3

const array = [1, 2, 3, 4, 5, 6]

a)
    const vezesDois = array.map(
        (numero, idx, arr) => {
        return numero*2;
        }
    )

b)
    const vezesTresString = array.map(
        (numero, idx, arr) => {
            return String(numero*3);
        }
    )

c)
    const parOuImpar = array.map(
        (numero, index, array) => {
            if (numero%2 === 0){
                string = 'par'
            }
            else {
                string = 'ímpar'
            }
            return `${numero} é ${string}`
        }
    )


----------------------------------------------------------------------
EXERCÍCIO 4
A regra para entrar na montanha russa do terror é: ter, no mínimo, 1.5 m de altura;
ser mais velho do que 14 anos e mais novo do que 60 anos.

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

//a)

const permitidos = pessoas.filter(
    (pessoa, index, array) =>{
        return pessoa.idade >= 14 && pessoa.idade < 60 && pessoa.altura >= 1.5
    }
).map(
    (permitido,index,array) =>{
        return permitido.nome
    }
)

//b)
const bloqueados = pessoas.filter(
    (pessoa, index, array) => {
        return pessoa.idade <= 14 || pessoa.idade > 60 || pessoa.altura <= 1.5
    }
)

----------------------------------
EXERCÍCIO 5 

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

let pronome = ""
let lembrar = ""

const eMail = consultas.map(
        (paciente, inde, array) =>{
        if (paciente.genero == "feminino") {
            pronome = "Sra."
            lembrar = "lembrá - la"
        } 
        else {
            pronome = "Sr."
            lembrar = "lembrá - lo"
        }
        
        return  `Olá, ${pronome} ${paciente.nome}. Estamos enviando esta mensagem para
                ${lembrar} da sua consulta no dia ${paciente.dataDaConsulta}. 
                Por favor, acuse o recebimento deste e-mail.`
    }

)

----------------------------------
EXERCÍCIO 6 */

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]