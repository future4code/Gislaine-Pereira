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


const adicionarSaldo = (nome: string, cpf: string, valor: number, dataPgto: string) => {
    const dataPagamento = moment(dataPgto, "DD/MM/YYYY")
    const dataHoje = moment()

    const prazo = dataPagamento.diff(dataHoje, "days")
    if (prazo < 0) {
        console.log("Data de depósito já passou, escolha hoje ou uma no futuro")
        return
    }

    const usuarios = pegarUsuarios()

    const procuraUsuarios = usuarios.find((usuario: ContaUser) => {
        if (usuario.cpf === cpf && usuario.nome === nome){
            return true
        }
    })

    if (procuraUsuarios === undefined) {
        console.log("Usuario não encontrado")
        return
    }

    procuraUsuarios.extrato.push({
        valor,
        data: dataPgto,
        descricao: "Depósito de dinheiro" 
    });

     const usuariosStringFied = JSON.stringify(usuarios, null, 2)
    fs.writeFileSync(caminhoUsario, usuariosStringFied)
};

const nome = process.argv[2]
const cpf = process.argv[3]
const valor = Number(process.argv[4])
const data = process.argv[5]

adicionarSaldo(nome, cpf, valor, data)