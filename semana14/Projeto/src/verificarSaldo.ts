import moment from "moment"
import * as fs from "fs"
import { userInfo } from "os"

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
    //  Ler o Json

    const caminhoUsario = "C:/Users/gisla/Documents/Future4/Gislaine-Pereira/semana14/Projeto/usuarios.json"
    const DadosUsuario: Buffer = fs.readFileSync(caminhoUsario)
    const usuariosString: string = DadosUsuario.toString()

    // Parsear o arquivo

    const usuarios: ContaUser[] = JSON.parse(usuariosString)

    // validar o CPF

    const procuraUsuarios = usuarios.find((usuario: ContaUser) => {
        return usuario.cpf === cpf;
    })


    console.log("Seu saldo atual é R$",procuraUsuarios?.saldoAtual);


};

//Colocar os argumentos no terminal
const nome = process.argv[2]
const cpf = process.argv[3]

verificarSaldo(nome, cpf)