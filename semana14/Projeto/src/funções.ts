import * as fs from "fs"

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

export const caminhoUsario = "C:/Users/gisla/Documents/Future4/Gislaine-Pereira/semana14/Projeto/usuarios.json"

export const pegarUsuarios = () => {
    const caminhoUsario = "C:/Users/gisla/Documents/Future4/Gislaine-Pereira/semana14/Projeto/usuarios.json"
    const DadosUsuario: Buffer = fs.readFileSync(caminhoUsario)
    const usuariosString: string = DadosUsuario.toString()

    const usuarios: ContaUser[] = JSON.parse(usuariosString)
    return usuarios
}