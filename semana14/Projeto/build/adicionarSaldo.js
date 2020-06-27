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
moment_1.default.locale("pt-br");
const fs = __importStar(require("fs"));
const fun__es_1 = require("./fun\u00E7\u00F5es");
const fun__es_2 = require("./fun\u00E7\u00F5es");
const adicionarSaldo = (nome, cpf, valor, dataPgto) => {
    const dataPagamento = moment_1.default(dataPgto, "DD/MM/YYYY");
    const dataHoje = moment_1.default();
    const prazo = dataPagamento.diff(dataHoje, "days");
    if (prazo < 0) {
        console.log("Data de depósito já passou, escolha hoje ou uma no futuro");
        return;
    }
    const usuarios = fun__es_2.pegarUsuarios();
    const procuraUsuarios = usuarios.find((usuario) => {
        if (usuario.cpf === cpf && usuario.nome === nome) {
            return true;
        }
    });
    if (procuraUsuarios === undefined) {
        console.log("Usuario não encontrado");
        return;
    }
    procuraUsuarios.extrato.push({
        valor,
        data: dataPgto,
        descricao: "Depósito de dinheiro"
    });
    const usuariosStringFied = JSON.stringify(usuarios, null, 2);
    fs.writeFileSync(fun__es_1.caminhoUsario, usuariosStringFied);
};
const nome = process.argv[2];
const cpf = process.argv[3];
const valor = Number(process.argv[4]);
const data = process.argv[5];
adicionarSaldo(nome, cpf, valor, data);
//# sourceMappingURL=adicionarSaldo.js.map