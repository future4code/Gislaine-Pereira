import moment from "moment";
moment.locale("pt-br");
import * as fs from "fs"
import { userInfo } from "os"
import { caminhoUsario } from './funções';
import { pegarUsuarios } from './funções';

type Extrato = {
    valor: Number,
    data: string,
    descricao: string
}

type ContaUser = {
    cpf: string,
    nome: string,
    nascimento: string,
    saldoAtual: number,
    extrato: Extrato[]
}

const verificarSaldo = (nome: string, cpf: string) => {
    const usuarios = pegarUsuarios()

    // validar o CPF

    const procuraUsuarios = usuarios.find((usuario: ContaUser) => {
        if (usuario.cpf === cpf && usuario.nome === nome) {
            return true
        }
    })

    if (procuraUsuarios !== undefined) {
        console.log("Seu saldo atual é R$", procuraUsuarios.saldoAtual);
    } else {
        console.log("Usuario não encontrado")
    }

};

//Colocar os argumentos no terminal
const nome = process.argv[2]
const cpf = process.argv[3]

verificarSaldo(nome, cpf)