

import * as fs from 'fs'

/* EXERCICIO 1 

 A) Acessamos pelos índices da array process.argv[i]
 
 B)

const nome:string = process.argv[2]
const idade:number = Number(process.argv[3])
const novaIdade:number = idade + 7

const mensagem: string = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`

console.log(mensagem) */

//===========================================================================================


// EXERCICIO 2

function operacaoMatematica(operacao: string, num1: number, num2: number): number {
  
  switch (operacao) {
    case 'sum':
      return num1 + num2;
    
    case 'sub':
      return num1 - num2;
    
    case 'mult':
      return num1 * num2;
    
    default:
      return num1 / num2;
  }
}

const qualoperacao: string = process.argv[2]
const qualNum1: number = Number(process.argv[3])
const qualNum2: number = Number(process.argv[4])

console.log(operacaoMatematica(qualoperacao, qualNum1, qualNum2))



/*
NÃO FAÇO IDIA DE COMO FAZER OS PRÓXIMOS, ESTOU TOTALMENTE PERDIDA NESTE ASSUNTO
*/