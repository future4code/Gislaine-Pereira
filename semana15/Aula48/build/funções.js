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
exports.pegaUsuario = exports.pegarUsuarios = exports.caminhoUsario = void 0;
const fs = __importStar(require("fs"));
exports.caminhoUsario = "C:/Users/gisla/Documents/Future4/Gislaine-Pereira/semana14/Projeto/usuarios.json";
exports.pegarUsuarios = () => {
    const caminhoUsario = "C:/Users/gisla/Documents/Future4/Gislaine-Pereira/semana14/Projeto/usuarios.json";
    const DadosUsuario = fs.readFileSync(caminhoUsario);
    const usuariosString = DadosUsuario.toString();
    const usuarios = JSON.parse(usuariosString);
    return usuarios;
};
exports.pegaUsuario = () => {
    const caminhoUsario = "C:/Users/gisla/Documents/Future4/Gislaine-Pereira/semana14/Projeto/usuarios.json";
    const DadosUsuario = fs.readFileSync(caminhoUsario);
    const usuariosString = DadosUsuario.toString();
    const usuarios = JSON.parse(usuariosString);
    return usuarios;
};
//# sourceMappingURL=funções.js.map