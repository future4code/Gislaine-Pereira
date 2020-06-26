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

const criarConta = (nome: string, cpf: string, valor: Number): void => {
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