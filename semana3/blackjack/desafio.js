/*  Cria a variável de controle e define um valor. Cria um laço while enquanto o valor for igual 
ao que vc definiu. Faz o if dentro, se as cartas forem diferentes, muda o valor da variável de controle. 
Se forem iguais, vc vai zerar as variáveis e ele volta pra fazer o sorteio de novo.*/


console.log("Bem vindo ao jogo de Blackjack!");

let novaRodada = confirm("Quer iniciar uma nova rodada?");

if (novaRodada == false) {
   console.log("O jogo acabou");
} else {

   while (novaRodada === true) {

      const cartaAi1 = comprarCarta();
      const cartaAi2 = comprarCarta();
      const cartaUser1 = comprarCarta();
      const cartaUser2 = comprarCarta();

      const pontoAi = cartaAi1.valor + cartaAi2.valor
      const pontoUser = cartaUser1.valor + cartaUser2.valor


      if (pontoAi !== 22 && pontoUser !== 22) {


         console.log("Usuário - cartas: " + cartaUser1.texto + " " + cartaUser2.texto + "  - pontuação " + pontoUser)
         console.log("Computador - cartas: " + cartaAi1.texto + " " + cartaAi2.texto + "  - pontuação " + pontoAi)

         if (pontoAi > pontoUser) {
            console.log("O computador ganhou!");
         } else if (pontoAi < pontoUser) {
            console.log("O usuário ganhou!");
         } else {
            console.log("Empate");
         }

         novaRodada = confirm("Quer iniciar uma nova rodada?")
      } 
      
      else {
         console.log("Saíram 2 Ases, o sorteio foi realizado novamente");

      }
   }
}

