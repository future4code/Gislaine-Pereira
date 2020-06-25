"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale("pt-br");
const eventosAgenda = [
    {
        nome: 'Pedal Mel na chupeta',
        descricao: 'Pedal nível iniciante pelo Norte da Ilha',
        dataInicio: moment_1.default("28/06/2020 07:00", "DD/MM/YYYY HH:mm"),
        dataFim: moment_1.default("28/06/2020 10:00", "DD/MM/YYYY HH:mm")
    },
    {
        nome: 'Pedal Só os fortes',
        descricao: 'Pedal nível intermediário até o centro',
        dataInicio: moment_1.default("27/06/2020 07:00", "DD/MM/YYYY HH:mm"),
        dataFim: moment_1.default("27/06/2020 13:00", "DD/MM/YYYY HH:mm")
    }
];
console.log(eventosAgenda);
const frasesEventos = () => {
    eventosAgenda.forEach(event => {
        const inicio = event.dataInicio.format('dddd, DD [de] MMM [de] YYYY, [às] HH:mm');
        const fim = event.dataFim.format('DD [de] MMM [de] YYYY, [às] HH:mm');
        console.log(`
            Nome: ${event.nome}
            Horário de início: ${inicio}
            Horário de fim: ${fim}
            Descrição: ${event.descricao}
        `);
    });
};
frasesEventos();
const frasesEventosMod = () => {
    eventosAgenda.forEach(event => {
        const inicio = event.dataInicio.format('dddd, DD [de] MMM [de] YYYY, [às] HH:mm');
        const fim = event.dataFim.format('DD [de] MMM [de] YYYY, [às] HH:mm');
        const duracaoMin = event.dataFim.diff(event.dataInicio, 'minutes');
        const diasAteEventos = event.dataInicio.diff(moment_1.default(), 'days');
        console.log(`
            Nome: ${event.nome}
            Horário de início: ${inicio}
            Horário de fim: ${fim}
            Descrição: ${event.descricao}
            Duração em minutos: ${duracaoMin}
            Dias até o evento: ${diasAteEventos}
        `);
    });
};
frasesEventosMod();
//# sourceMappingURL=index.js.map