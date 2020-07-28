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


const transferencia = (nomeRem: string, cpfRem: string, nomeDest: string, cpfDest: string, valor: number) => {
    const usuarios = pegarUsuarios()

    console.log(usuarios)

    const dadosRemetente = usuarios.find((usuario: ContaUser) => {
        if (usuario.cpf === cpfRem && usuario.nome === nomeRem){
            return true
        }
    })

    const dadosDestinatario = usuarios.find((usuario: ContaUser) => {
        if (usuario.cpf === cpfDest && usuario.nome === nomeDest) {
            return true
        }
    })

    if (dadosRemetente === undefined) {
        console.log("Seus dados não foram encontrados, tente novamente")
        return
    }

    if (dadosDestinatario === undefined) {
        console.log("Destinatário não encontrado, tente novamente")
        return
    }

    const dataPgto = moment().format("DD/MM/YYYY")

    if (dadosRemetente.saldoAtual < valor) {
        console.log("Saldo insuficiente, operação não efetuada")
        return
    }

    dadosRemetente.extrato.push({
        valor: valor*-1,
        data: dataPgto,
        descricao: `Transferência de dinheiro para ${dadosDestinatario.nome}, CPF: ${dadosDestinatario.cpf}`
    });

    dadosDestinatario.extrato.push({
        valor,
        data: dataPgto,
        descricao: `Recebimento de dinheiro de ${dadosRemetente.nome}, CPF: ${dadosRemetente.cpf}`
    });

    const usuariosStringFied = JSON.stringify(usuarios, null, 2)
    fs.writeFileSync(caminhoUsario, usuariosStringFied)
};

const nomeRem = process.argv[2]
const cpfRem = process.argv[3]
const nomeDest = process.argv[4]
const cpfDest = process.argv[5]
const valor = Number(process.argv[6])


transferencia(nomeRem, cpfRem, nomeDest, cpfDest, valor)