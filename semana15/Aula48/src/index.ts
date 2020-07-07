import { criarConta } from './criarConta';
/* Resposta dos exercícios 

1) O constructor seve como função para construir uma classe com os parâmetros pré-definidos.   
    Camamos dentro da classe.

2)

*/


type Transaction = {
    valor: Number,
    data: string,
    descricao: string
}

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[];

  constructor(
     cpf: string,
     name: string,
     age: number
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }
//    public getBalance(): number {
//    //Aqui deve ser inserida a lógica de pegar saldo do usuário
//    }
//
//    public addBalance(value: number): void {
//    //Aqui deve ser inserida a lógica de adicionar saldo 
//      console.log('Saldo atualizado com sucesso')
//    }
}

const name = process.argv[2]
const cpf = process.argv[3]
const age = Number(process.argv[4])

const newUserAccount: UserAccount = new UserAccount(name, cpf, age)

