import moment from "moment";
moment.locale("pt-br");
import * as fs from "fs"
import { userInfo } from "os"
import { caminhoUsario } from './funções';
import { pegarUsuarios } from './funções';

type Extrato = {
    valor: Number,
    data: any,
    descricao: string
}

type ContaUser = {
    cpf: string,
    nome: string,
    nascimento: string,
    saldoAtual: number,
    extrato: Extrato[]
}


const atualizarSaldo = (cpf: string) => {

    if (cpf === undefined){
        console.log("Forneça um CPF")
        return
    }
    
    const usuarios = pegarUsuarios()

    const procuraUsuarios = usuarios.find((usuario: ContaUser) => {
        return usuario.cpf === cpf
    })

    if (procuraUsuarios === undefined) {
        console.log("Usuario não encontrado")
        return
    }

    const listaSaldos = procuraUsuarios.extrato.filter((conta)=>{
        const hoje = moment()
        const dataConta = moment(conta.data, "DD/MM/YYYY")
        return dataConta >= hoje
    }).map((conta:Extrato)=>{
        if (conta.descricao !== "Depósito de dinheiro"){
            conta.valor = Number(conta.valor)* -1 
        }
       return conta.valor
    })  

    let saldoAtualizado = procuraUsuarios.saldoAtual
    for (let i = 0; i < listaSaldos.length; i++) {
        saldoAtualizado += Number(listaSaldos[i])
    }

    procuraUsuarios.saldoAtual = saldoAtualizado
  
    const usuariosStringFied = JSON.stringify(usuarios, null, 2)
    fs.writeFileSync(caminhoUsario, usuariosStringFied)
};

const cpf = process.argv[2]

atualizarSaldo(cpf)