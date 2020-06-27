"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale("pt-br");
const fun__es_1 = require("./fun\u00E7\u00F5es");
const verificarSaldo = (nome, cpf) => {
    const usuarios = fun__es_1.pegarUsuarios();
    const procuraUsuarios = usuarios.find((usuario) => {
        if (usuario.cpf === cpf && usuario.nome === nome) {
            return true;
        }
    });
    if (procuraUsuarios !== undefined) {
        console.log("Seu saldo atual é R$", procuraUsuarios.saldoAtual);
    }
    else {
        console.log("Usuario não encontrado");
    }
};
const nome = process.argv[2];
const cpf = process.argv[3];
verificarSaldo(nome, cpf);
//# sourceMappingURL=verificarSaldo.js.map