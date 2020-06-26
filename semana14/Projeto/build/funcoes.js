"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const fs = __importStar(require("fs"));
const criarConta = (nome, cpf, nascimento) => {
    const dataNascimentoUser = moment_1.default(nascimento, "DD/MM/YYYY");
    const dataHoje = moment_1.default();
    const idadeUsuario = dataHoje.diff(dataNascimentoUser, "years");
    if (idadeUsuario < 18) {
        console.log("Menores de idade não podem criar uma conta");
        return;
    }
    const caminhoUsario = "C:/Users/gisla/Documents/Future4/Gislaine-Pereira/semana14/Projeto/src/usuarios.json";
    const DadosUsuario = fs.readFileSync(caminhoUsario);
    const usuariosString = DadosUsuario.toString();
    const usuarios = JSON.parse(usuariosString);
    const procuraUsuarios = usuarios.find((usuario) => {
        return usuario.cpf === cpf;
    });
    if (procuraUsuarios !== undefined) {
        console.log("Já existe um usuário com este CPF");
        return;
    }
    usuarios.push({
        nome,
        cpf,
        nascimento,
        saldoAtual: 0,
        extrato: [],
    });
    console.log(usuarios);
    const usuariosStringFied = JSON.stringify(usuarios, null, 2);
    fs.writeFileSync(caminhoUsario, usuariosStringFied);
};
const nome = process.argv[2];
const cpf = process.argv[3];
const nascimento = process.argv[4];
criarConta(nome, cpf, nascimento);
//# sourceMappingURL=funcoes.js.map