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
    }

    else if (num1 < num2) {
    console.log(num2 + ";"+ num1)
    
}

/*
Quando os números são iguais, não aparece nada no console, pois não estabelecemos esta condição.  



Letra b) */
    const x = Number(prompt("Digite o primeiro número"))
    const y = Number(prompt("Digite o segundo número"))
    const z = Number(prompt("Digite o terceiro número"))
  
    if (x > y && y > z) {
      console.log(x + ";" + y + ";" + z)
    }

    else if (x > z && z > y) {
      console.log(x + ";" + z + ";" + y)
    }

    else if (y > x && x > z) {
      console.log(y + ";" + x + ";" + z)
    }

    else if (y > z && z > x) {
      console.log(y + ";" + z + ";" + x)
    }

    else if (z > x && x > y) {
      console.log(z + ";" + x + ";" + y)
    }

    else if (z > y && y > x) {
      console.log(z + ";" + y + ";" + x)
    }

    
/*Letra c)
    Inclusão do seguinte escopo no bloco anterior*/
else if (x===y && x===z && y===z) {
    console.log("Você deve, ao menos, inserir um número diferente.")
    }


/*Exercício 5)

//Letra a) A imagem está no mesmo diretório deste arquivo */

