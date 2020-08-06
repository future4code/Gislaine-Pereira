"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
exports.handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const key = event.key;
    const posicaoarroba = key.indexOf("@");
    const posicaoponto = key.lastIndexOf(".");
    let mensagem = {};
    let status = 0;
    if (posicaoarroba < 1 && posicaoponto < 2) {
        status = 400,
            mensagem = {
                "isEmail": false,
                "reason": "Sem arroba e . ausente ou inválido"
            };
    }
    else if (posicaoarroba < 1) {
        status = 400,
            mensagem = {
                "isEmail": false,
                "reason": "Sem arroba ('@')"
            };
    }
    else if (posicaoponto < 2) {
        status = 400,
            mensagem = {
                "isEmail": false,
                "reason": "Ponto ausente ou inválido"
            };
    }
    else {
        status = 200,
            mensagem = {
                "isEmail": true,
            };
    }
    return {
        statusCode: status,
        body: JSON.stringify({ mensagem })
    };
});
