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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const moment_1 = __importDefault(require("moment"));
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';
const criaNoticia = (title, content) => __awaiter(void 0, void 0, void 0, function* () {
    const body = {
        title,
        content,
        date: moment_1.default().unix(),
    };
    const resp = yield axios_1.default.put(`${baseUrl}/news`, body);
    console.log(resp.data);
    console.log(`Noticia criada com sucesso!`);
});
criaNoticia("Extra! Extra!", "Julian é a melhor tumar da Labenu");
//# sourceMappingURL=exerc4.js.map