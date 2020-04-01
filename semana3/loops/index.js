num = Number(prompt("Escolha um número entre 0 e 100"))

console.log("Vamos jogar!")

chute = Number(prompt("Chute um número entre 0 e 100"))

let tentativas = 1

while (num != chute) {
  if (num < chute) {
    chute = Number(prompt("O número chutado foi " + chute + "\n"  + "Errou feio, errou rude. É menor" + "\n" + "Tente outra vez"))
    
  }

  else{
    chute = Number(prompt("O número chutado foi " + chute + "\n" + "Errou feio, errou rude. É maior" + "\n" + "Tente outra vez"))
  }

  tentativas ++
}

console.log ("Acertô Miserávi!" + "\n" + "O número de tentativas foi: " + tentativas) 