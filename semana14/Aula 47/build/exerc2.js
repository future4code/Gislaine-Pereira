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
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';
const pegaInscritos = () => __awaiter(void 0, void 0, void 0, function* () {
    const inscritos = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
    return inscritos.data;
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const inscritos = yield pegaInscritos();
    console.log(inscritos);
});
main();
//# sourceMappingURL=exerc2.js.map