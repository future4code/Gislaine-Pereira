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
const modificarSaldo = (nome, cpf, valor) => {
    const caminhoUsario = "C:/Users/gisla/Documents/Future4/Gislaine-Pereira/semana14/Projeto/usuarios.json";
    const DadosUsuario = fs.readFileSync(caminhoUsario);
    const usuariosString = DadosUsuario.toString();
    const usuarios = JSON.parse(usuariosString);
    const procuraUsuarios = usuarios.find((usuario) => {
        return usuario.cpf === cpf;
    });
    if (procuraUsuarios !== undefined) {
        procuraUsuarios.saldoAtual = valor;
    }
    else {
        console.log("Usuario não encontrado");
    }
    const usuariosStringFied = JSON.stringify(usuarios, null, 2);
    fs.writeFileSync(caminhoUsario, usuariosStringFied);
};
const nome = process.argv[2];
const cpf = process.argv[3];
const valor = Number(process.argv[4]);
modificarSaldo(nome, cpf, valor);
//# sourceMappingURL=modificarSaldo.js.map