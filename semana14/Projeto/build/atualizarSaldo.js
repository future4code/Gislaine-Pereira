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
const atualizarSaldo = (cpf) => {
    if (cpf === undefined) {
        console.log("Forneça um CPF");
        return;
    }
    const usuarios = fun__es_2.pegarUsuarios();
    const procuraUsuarios = usuarios.find((usuario) => {
        return usuario.cpf === cpf;
    });
    if (procuraUsuarios === undefined) {
        console.log("Usuario não encontrado");
        return;
    }
    const listaSaldos = procuraUsuarios.extrato.filter((conta) => {
        const hoje = moment_1.default();
        const dataConta = moment_1.default(conta.data, "DD/MM/YYYY");
        return dataConta >= hoje;
    }).map((conta) => {
        return conta.valor;
    });
    let saldoAtualizado = procuraUsuarios.saldoAtual;
    for (let i = 0; i < listaSaldos.length; i++) {
        saldoAtualizado += Number(listaSaldos[i]);
    }
    procuraUsuarios.saldoAtual = saldoAtualizado;
    const usuariosStringFied = JSON.stringify(usuarios, null, 2);
    fs.writeFileSync(fun__es_1.caminhoUsario, usuariosStringFied);
};
const cpf = process.argv[2];
atualizarSaldo(cpf);
//# sourceMappingURL=atualizarSaldo.js.map