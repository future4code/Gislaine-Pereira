/* 
 Exercícios de interpretação de código

Exercício 1)
Este código serve para mostrar se o nª digitado pelo usuário é par ou ímpar. Para tanto ele verifica se o resto da divisão por 2 é 0 (par) ou diferente de 0 (ímpar)


const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

Se o resto da divisão por 2 do número indicado pelo usuário for 0, ele é par. Se a primeira premissa for falsa, então é impar. 

Exercício 2)
        a) Este código serve para mostrar ao usuário o valor da fruta que ele digitou. 
        b) "O preço da fruta maçã é R$ 2.25
        c) R$ 24.55
        d) O preço da fruta pêra é R$ 5.00

Exercício 3)
    Aparecerá um erro: Uncaught ReferenceError: mensagem is not defined at index. Este erro se dá por que o escopo console.log não está dentro do mesmo bloco que if e else.  Assim o escopo pai não consegue acessar às variáveis do escopo filho. 

*/

/* Exercícios de escrita de código */


//Exercício 4)

//Letra a) 

const num1 = Number(prompt("Digite o primeiro número"))
const num2 = Number(prompt("Digite o segundo número"))

if (num1 > num2) {
  console.log(num1 + ";" + num2)
} else if (num1 < num2) {
  console.log(num2 + ";" + num1)

}

/*
Quando os números são iguais, não aparece nada no console, pois não estabelecemos esta condição.  



Letra b) */
const x = Number(prompt("Digite o primeiro número"))
const y = Number(prompt("Digite o segundo número"))
const z = Number(prompt("Digite o terceiro número"))

if (x > y && y > z) {
  console.log(x + ";" + y + ";" + z)
} else if (x > z && z > y) {
  console.log(x + ";" + z + ";" + y)
} else if (y > x && x > z) {
  console.log(y + ";" + x + ";" + z)
} else if (y > z && z > x) {
  console.log(y + ";" + z + ";" + x)
} else if (z > x && x > y) {
  console.log(z + ";" + x + ";" + y)
} else if (z > y && y > x) {
  console.log(z + ";" + y + ";" + x)
}


/*Letra c)
    Inclusão do seguinte escopo no bloco anterior*/
else if (x === y && x === z && y === z) {
  console.log("Você deve, ao menos, inserir um número diferente.")
}


/*Exercício 5)

Letra a) A imagem está no mesmo diretório deste arquivo 

Letra b) */
const vert = prompt("O animal possui ossos formando seu esqueleto? - Responda com s ou n")

if (vert === "n") {
  console.log("O animal é um invertebrado")
} else if (vert === "s") {
  const pelo = prompt("Possui pêlos?")

  if (pelo === "s") {
    const rac = prompt("É considerado racional?")

    if (rac === "s") {
      console.log("O animal é um ser humano")
    } else {
      console.log("O animal é um mamífero não-racional")
    }
  } else if (pelo === "n") {
    const pena = prompt("Possui penas?")

    if (pena === "s") {
      console.log("O animal é uma ave")
    } else if (pena === "n") {
      const terra = prompt("É um animal terrestre?")

      if (terra === "s") {
        const agua = prompt("Parte do seu ciclo é na água?")

        if (agua === "s") {
          console.log("O animal é um anfíbio")
        } else {
          console.log("O animal é um réptil")
        }
      } else {
        console.log("O animal é um peixe")
      }
    }

  }

}



/* Resposta do Desafio */

const nome = prompt("Digite seu nome Compelto")
let tipoJogo = prompt("Qual o tipo de jogo? Digite IN para internacional e DO para doméstico").toLowerCase()
let etapaJogo = prompt("Qual a etapa do jogo escolhido? Digite SF para semi-final, DT para decisão de terceiro lugar ou FI para final").toLowerCase()
const categoria = Number(prompt("Digite um número de 1 a 4 para indicar a categoria de ingresso desejada"))
const quantidade = Number(prompt("Qual a quantidade de ingressos desejada?"))


let semifinais = [1320,880,550,220]
let terceiro = [660,440,330,170]
let final = [1980,1320,880,330]

if (etapaJogo === "sf") {
  if (categoria === 1) {
    valorRealUni = semifinais[0]
  }

  else if (categoria === 2) {
    valorRealUni = semifinais[1]
  }

  else if (categoria === 3) {
    valorRealUni = semifinais[2]
  }

  else if (categoria === 4) {
    valorRealUni = semifinais[3]
  }
}

else if (etapaJogo === "dt") {
  if (categoria === 1) {
    valorRealUni = terceiro[0]
  } 
    
  else if (categoria === 2) {
    valorRealUni = terceiro[1]
  } 
    
  else if (categoria === 3) {
    valorRealUni = terceiro[2]
  } 
    
  else if (categoria === 4) {
    valorRealUni = terceiro[3]
  }
}

else if (etapaJogo === "fi") {
  if (categoria === 1) {
    valorRealUni = final[0]
  } 
    
  else if (categoria === 2) {
    valorRealUni = final[1]
  } 
    
  else if (categoria === 3) {
    valorRealUni = final[2]
  } 
    
  else if (categoria === 4) {
    valorRealUni = final[3]
  }
}

let valorRealTot = valorRealUni * quantidade
let valorDolarUni = valorRealUni * 4.10
let valorDolarTot = valorRealTot * 4.10



if (tipoJogo === "do") {
  tipoJogo = "Nacional"
}

else if (tipoJogo === "in") {
  tipoJogo = "Internacional"
}

if (etapaJogo === "sf") {
  etapaJogo = "Semi-finais"
} 

else if (etapaJogo === "dt") {
  etapaJogo = "Decisão do 3ª Lugar"
}

else if (etapaJogo === "fi") {
  etapaJogo = "Final do Campeonato"
}

if (tipoJogo === "do") {
  console.log("--- Dados da compra---" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo +
    "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" +
    "Quantidade de Ingressos: " + quantidade + "\n" + "-- - Valores-- -" + "\n" + "Valor do ingresso: R$" +
    valorRealUni + "\n " + "Valor total: R$" + valorRealTot)
}
   

else{
  console.log("--- Dados da compra---" + "\n" + "Nome do cliente: " + nome + "\n" + "Tipo do jogo: " + tipoJogo +
      "\n" + "Etapa do jogo: " + etapaJogo + "\n" + "Categoria: " + categoria + "\n" +
      "Quantidade de Ingressos: " + quantidade + "\n" + "-- - Valores-- -" + "\n" + "Valor do ingresso: U$" +
      valorDolarUni + "\n " + "Valor total: U$" + valorDolarTot)
}