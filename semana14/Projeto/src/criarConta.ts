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

const criarConta = (nome: string, cpf: string, nascimento: string): void => {
    // Comparar ad datas, ver se á maior de idade

    const dataNascimentoUser = moment(nascimento, "DD/MM/YYYY")
    const dataHoje = moment()

    const idadeUsuario = dataHoje.diff(dataNascimentoUser, "years")

    if (idadeUsuario < 18) {
        console.log("Menores de idade não podem criar uma conta")
        return
    }
    const usuarios = pegarUsuarios()

    // validar o CPF

    const procuraUsuarios = usuarios.find((usuario: ContaUser) => {
        return usuario.cpf === cpf;
    })

    if (procuraUsuarios !== undefined) {
        console.log("Já existe um usuário com este CPF")
        return;
    }

    // Adicionar usuario no Array
    usuarios.push({
        nome,
        cpf,
        nascimento,
        saldoAtual: 0,
        extrato: [],
    });

    console.log(usuarios);

    // Reescreva o arquivo todo

    const usuariosStringFied = JSON.stringify(usuarios, null, 2)
    fs.writeFileSync(caminhoUsario, usuariosStringFied)
    
};

//Colocar os argumentos no terminal
const nome = process.argv[2]
const cpf = process.argv[3]
const nascimento = process.argv[4]

criarConta(nome, cpf, nascimento)