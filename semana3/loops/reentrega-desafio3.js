/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO 

EXERCÍCIO 1
O código está num loop que vai do nª1 até o 14 e depois soma estes números. O nª impresso na tela é 105. 

EXERCÍCIO2

a) Insere um valor na Array

b) (4) [10, 15, 25, 30]

c)  3-- (6) [12, 15, 18, 21, 27, 30]
    4-- [12]


 Este código pede para imprimir os múltiplos de um número. 
*/

//================================================================================================================================

/* DESAFIOS - EXERCÍCIOS DE ESCRITA DE CÓDIGO

EXERCÍCIO 3 */

// Array utilizado neste exercício
const num = [61, 71, 30, 99, 87, 45, 13, 63, 2, 85, 25, 36]

// a) 

let maior = num[0]

for (let i = 0; i < num.length; i++) {
  const elemento = num[i]

  if (elemento > maior) {
    maior = elemento
  }
}

let menor = num[0]

for (let i = 0; i < num.length; i++) {
  const elemento2 = num[i]

  if (elemento2 < menor) {
    menor = elemento2
  }
}

console.log("O maior número é " + maior + " e o menor é " + menor)


//b) 

let divi = []

for (let i = 0; i < num.length; i++) {
  const elemento = num[i] / 10;
  divi.push(elemento)
}

console.log(divi)

// divi = [6.1, 7.1, 3, 9.9, 8.7, 4.5, 1.3, 6.3, 0.2, 8.5, 2.5, 3.6]


//c)

let par = []

for (let i = 0; i < num.length; i++) {
  const elemento = num[i]

  if (elemento % 2 === 0) {
    par.push(elemento)
  }

}

console.log(divi)

// par = [30, 2, 36]



//d)

let frases = []

for (let i = 0; i < num.length; i++) {
  const elemento = "O elemento do índex " + i + " é " + num[i]
  frases.push(elemento)

}

console.log(frases)

// frases = ["O elemento do índex 0 é 61", "O elemento do índex 1 é 71", "O elemento do índex 2 é 30", "O elemento do índex 3 é 99", "O elemento do índex 4 é 87", "O elemento do índex 5 é 45", "O elemento do índex 6 é 13", "O elemento do índex 7 é 63", "O elemento do índex 8 é 2", "O elemento do índex 9 é 85", "O elemento do índex 10 é 25", "O elemento do índex 11 é 36"]




EXERCÍCIO 4


num = Number(prompt("Escolha um número entre 0 e 100"))

console.log("Vamos jogar!")

chute = Number(prompt("Chute um número entre 0 e 100"))

let tentativas = 1

while (num != chute) {
  if (num < chute) {
    chute = Number(prompt("O número chutado foi " + chute + "\n" + "Errou feio, errou rude. É menor" + "\n" + "Tente outra vez"))

  } else {
    chute = Number(prompt("O número chutado foi " + chute + "\n" + "Errou feio, errou rude. É maior" + "\n" + "Tente outra vez"))
  }

  tentativas++
}

console.log("Acertô Miserávi!" + "\n" + "O número de tentativas foi: " + tentativas)


EXERCÍCIO 5

num = Math.floor(Math.random() * 100)

console.log("Vamos jogar!")

chute = Number(prompt("Chute um número entre 0 e 100"))

let tentativas = 1

while (num != chute) {
  if (num < chute) {
    chute = Number(prompt("O número chutado foi " + chute + "\n" + "Errou feio, errou rude. É menor" + "\n" + "Tente outra vez"))

  } else {
    chute = Number(prompt("O número chutado foi " + chute + "\n" + "Errou feio, errou rude. É maior" + "\n" + "Tente outra vez"))
  }

  tentativas++
}

console.log("Acertô Miserávi!" + "\n" + "O número de tentativas foi: " + tentativas)
