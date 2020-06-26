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
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const criarConta = (nome, cpf) => {
    const caminhoUsario = "C:/Users/gisla/Documents/Future4/Gislaine-Pereira/semana14/Projeto/usuarios.json";
    const DadosUsuario = fs.readFileSync(caminhoUsario);
    const usuariosString = DadosUsuario.toString();
    const usuarios = JSON.parse(usuariosString);
    const procuraUsuarios = usuarios.find((usuario) => {
        return usuario.cpf === cpf;
    });
    console.log("Seu saldo atual é ", procuraUsuarios === null || procuraUsuarios === void 0 ? void 0 : procuraUsuarios.saldoAtual);
};
const nome = process.argv[2];
const cpf = process.argv[3];
criarConta(nome, cpf);
//# sourceMappingURL=verificarSaldo.js.map