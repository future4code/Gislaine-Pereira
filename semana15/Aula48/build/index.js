"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserAccount {
    constructor(cpf, name, age) {
        this.balance = 0;
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}
const name = process.argv[2];
const cpf = process.argv[3];
const age = Number(process.argv[4]);
const newUserAccount = new UserAccount(name, cpf, age);
//# sourceMappingURL=index.js.map