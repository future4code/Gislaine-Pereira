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

const pagarConta = (valor: number, descricao: string, cpf: string, dataPgto?: string):void => {
    let dataPagamento
    if (dataPgto === undefined){
        dataPagamento = moment()
    }else{
        dataPagamento = moment(dataPgto, "DD/MM/YYYY")
    }

    const dataHoje = moment()
    const prazo = dataPagamento.diff(dataHoje, "days")
        
    if (prazo < 0) {
        console.log("Data de pagamento já passou, escolha hoje ou uma no futuro")
        return
    }
    
    const usuarios = pegarUsuarios()

    const procuraUsuarios = usuarios.find((usuario: ContaUser) => {
        return usuario.cpf === cpf;
    })

    if (procuraUsuarios === undefined) {
        console.log("Usuario não encontrado")
        return
    }

    if (procuraUsuarios.saldoAtual < valor){
        console.log("Saldo insuficiente, operação não efetuada")
        return
    }
    

    const dataString = dataPagamento.format("DD/MM/YYYY")
    
    procuraUsuarios.extrato.push({
        valor: valor*-1,
        data: dataString,
        descricao
    });

    const usuariosStringFied = JSON.stringify(usuarios, null, 2)
    fs.writeFileSync(caminhoUsario, usuariosStringFied)
};

const valor = Number(process.argv[2])
const descricao = process.argv[3]
const cpf = process.argv[4]
const dataPgto = process.argv[5]

pagarConta(valor, descricao, cpf, dataPgto)