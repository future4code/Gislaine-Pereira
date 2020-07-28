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
const transferencia = (nomeRem, cpfRem, nomeDest, cpfDest, valor) => {
    const usuarios = fun__es_2.pegarUsuarios();
    console.log(usuarios);
    const dadosRemetente = usuarios.find((usuario) => {
        if (usuario.cpf === cpfRem && usuario.nome === nomeRem) {
            return true;
        }
    });
    const dadosDestinatario = usuarios.find((usuario) => {
        if (usuario.cpf === cpfDest && usuario.nome === nomeDest) {
            return true;
        }
    });
    if (dadosRemetente === undefined) {
        console.log("Seus dados não foram encontrados, tente novamente");
        return;
    }
    if (dadosDestinatario === undefined) {
        console.log("Destinatário não encontrado, tente novamente");
        return;
    }
    const dataPgto = moment_1.default().format("DD/MM/YYYY");
    if (dadosRemetente.saldoAtual < valor) {
        console.log("Saldo insuficiente, operação não efetuada");
        return;
    }
    dadosRemetente.extrato.push({
        valor: valor * -1,
        data: dataPgto,
        descricao: `Transferência de dinheiro para ${dadosDestinatario.nome}, CPF: ${dadosDestinatario.cpf}`
    });
    dadosDestinatario.extrato.push({
        valor,
        data: dataPgto,
        descricao: `Recebimento de dinheiro de ${dadosRemetente.nome}, CPF: ${dadosRemetente.cpf}`
    });
    const usuariosStringFied = JSON.stringify(usuarios, null, 2);
    fs.writeFileSync(fun__es_1.caminhoUsario, usuariosStringFied);
};
const nomeRem = process.argv[2];
const cpfRem = process.argv[3];
const nomeDest = process.argv[4];
const cpfDest = process.argv[5];
const valor = Number(process.argv[6]);
transferencia(nomeRem, cpfRem, nomeDest, cpfDest, valor);
//# sourceMappingURL=transferencia.js.map