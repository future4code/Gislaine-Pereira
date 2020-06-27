import moment from "moment"
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


const modificarSaldo = (nome: string, cpf: string, valor: number) => {
    const usuarios = pegarUsuarios()

    const procuraUsuarios = usuarios.find((usuario: ContaUser) => {
        return usuario.cpf === cpf;
    })

    if (procuraUsuarios !== undefined) {
        procuraUsuarios.saldoAtual = valor
    }else{
        console.log("Usuario não encontrado")
    }

    const usuariosStringFied = JSON.stringify(usuarios, null, 2)
    fs.writeFileSync(caminhoUsario, usuariosStringFied)
};

const nome = process.argv[2]
const cpf = process.argv[3]
const valor = Number(process.argv[4])

modificarSaldo(nome, cpf, valor)