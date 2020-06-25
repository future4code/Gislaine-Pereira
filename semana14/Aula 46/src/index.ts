import moment from "moment"
moment.locale("pt-br");

//Exercício 1

//A) 

type evento = {
    nome: string,
    descricao: string,
    inicioEvento: moment.Moment,
    fimEvento: moment.Moment
}

//B)
const eventosAgenda: evento[] = [
    {
        nome: 'Pedal Mel na chupeta',
        descricao: 'Pedal nível iniciante pelo Norte da Ilha',
        inicioEvento: moment("28/06/2020 07:00", "DD/MM/YYYY HH:mm"),
        fimEvento: moment("28/06/2020 10:00", "DD/MM/YYYY HH:mm")
    },
    {
        nome: 'Pedal Só os fortes',
        descricao: 'Pedal nível intermediário até o centro',
        inicioEvento: moment("27/06/2020 07:00", "DD/MM/YYYY HH:mm"),
        fimEvento: moment("27/06/2020 13:00", "DD/MM/YYYY HH:mm")
    }
]

console.log(eventosAgenda)

//==========================================================================

//Exercício 2

//A)

const frasesEventos = (): void => {
    eventosAgenda.forEach(event => {
        const inicio: string = event.inicioEvento.format('dddd, DD [de] MMM [de] YYYY, [às] HH:mm');

        const fim: string = event.fimEvento.format('DD [de] MMM [de] YYYY, [às] HH:mm');

        console.log(`
            Nome: ${event.nome}
            Horário de início: ${inicio}
            Horário de fim: ${fim}
            Descrição: ${event.descricao}
        `)
    })
}
frasesEventos()


//B) no moment.locale coloco "en-uk" e o utcOffset para os padrões locais.


//========================================================

//Exercício 3

const frasesEventosMod = (): void => {
    eventosAgenda.forEach(event => {
        const inicio: string = event.inicioEvento.format('dddd, DD [de] MMM [de] YYYY, [às] HH:mm');
        
        const fim: string = event.fimEvento.format('DD [de] MMM [de] YYYY, [às] HH:mm');

        const duracaoMin: number = event.fimEvento.diff(event.inicioEvento, 'minutes');

        const diasAteEventos: number = event.inicioEvento.diff(moment(), 'days');

        console.log(`
            Nome: ${event.nome}
            Horário de início: ${inicio}
            Horário de fim: ${fim}
            Descrição: ${event.descricao}
            Duração em minutos: ${duracaoMin}
            Dias até o evento: ${diasAteEventos}
        `)
    })
}
frasesEventosMod()


//====================================================================================

//Exercício 4
function criarEvento(inicioEvento: moment.Moment, fimEvento: moment.Moment, nome: string, descricao: string): void{
    const hoje:moment.Moment = moment();

    if(!inicioEvento || !fimEvento || !nome || !descricao){
        console.log("Alguma informação está faltando, revise seus dados")
        return;
    }

    const diferencaDiaAtual = inicioEvento.diff(hoje, "days");
    const diferencaHoraInicio = fimEvento.diff(inicioEvento, "minutes"); 

    if(diferencaDiaAtual<0){
        console.log("Data do evento não pode ser antes da")
        return;
    }
    else if(diferencaHoraInicio<0){
        console.log("Horário de início não pode ser antes do final")
        return;
    }

    eventosAgenda.push({
        nome,
        descricao,
        inicioEvento,
        fimEvento
    })

    console.log(eventosAgenda);
}
criarEvento(moment(process.argv[2], "DD/MM/YYYY HH:mm"), moment(process.argv[3], "DD/MM/YYYY HH:mm"), process.argv[3], process.argv[4])