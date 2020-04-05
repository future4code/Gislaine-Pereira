console.log("Bem vindo ao jogo de Blackjack!");

let novaRodada = confirm("Bem vindo ao jogo de Blackjack!" + "\n" + "Vamos iniciar uma rodada?");

if (novaRodada == false) {
   alert("O jogo acabou");
} 

else {

    while (novaRodada === true) {
        const cartaAi1 = comprarCarta();
        const cartaAi2 = comprarCarta();
        const cartaUser1 = comprarCarta();
        const cartaUser2 = comprarCarta();
        let cartasAi = [cartaAi1.texto, cartaAi2.texto];
        let cartasUser = [cartaUser1.texto, cartaUser2.texto];
        let pontoAi = cartaAi1.valor + cartaAi2.valor
        let pontoUser = cartaUser1.valor + cartaUser2.valor
                
        if (pontoAi !== 22 && pontoUser !== 22) {
            
            let CompraUser = confirm("Suas cartas são " + cartasUser + " .A carta revelada do computador é: " + cartasAi[0] + "." + "\n" + "Deseja comprar mais uma carta?")
            let continuarJogo = true
            
            while (CompraUser === true){
                const cartaUserExtra = comprarCarta()
                
                if ((pontoUser+cartaUserExtra.valor) < 21 ){
                pontoUser = pontoUser+cartaUserExtra.valor 
                cartasUser.push(cartaUserExtra.texto)
                CompraUser = confirm("Suas cartas são " + cartasUser + " .A carta revelada do computador é: " + cartasAi[0] + "." + "\n" + "Deseja comprar mais uma carta?")
                }
                else {
                    continuarJogo = false
                    CompraUser = false
                }
            }

            if (continuarJogo === true){
            
                if (pontoAi < pontoUser){
                    let compraAi = true

                    while (compraAi === true ){
                        const cartaAiExtra = comprarCarta()
                         
                        if ((pontoAi+cartaAiExtra.valor) < 21) {
                            pontoAi = pontoAi+cartaAiExtra.valor 
                            cartasAi.push(cartaAiExtra.texto)
                            
                        }
                        else {
                            compraAi = false
                        }
                    }
                }
                
                cartasTotais  = "Usuário - cartas: " + cartasUser + " - pontuação " + pontoUser + "\n" + "Computador - cartas: " + cartasAi + " - pontuação " + pontoAi

                    if (pontoAi > pontoUser) {
                        alert(cartasTotais + "\n" + "O computador ganhou!");
                    } 
                    else if (pontoAi < pontoUser) {
                        alert(cartasTotais + "\n" + "O usuário ganhou!");
                    } 
                    else if (pontoAi > 21 && pontoUser <=21) {
                        alert(cartasTotais + "\n" + "O computador extrapolou 21 pontos. O usuário ganhou!")
                    }   
                    else {
                        alert(cartasTotais + "\n" + "Empate");
                    }
            }
            else{
                alert("Game Over - Você excedeu 21 pontos")
            }
            
            novaRodada = confirm("Quer iniciar uma nova rodada?")
        } 
        else if (pontoAi === 21 && pontoUser !== 21) {
            alert('O computador sacou 21 pontos. O usuário perdeu.')
        }
        else if (pontoAi !== 21 && pontoUser === 21) {
            alert('O usuário sacou 21 pontos. Vitória do usuário')
        }
        else if (pontoAi === 21 && pontoUser === 21) {
            alert('O usuário e o compuatador sacaram 21 pontos. Empate!')
        }
        else {
            alert("Saíram 2 Ases, o sorteio foi realizado novamente");
        }
    }
}
