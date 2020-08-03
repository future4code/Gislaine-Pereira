export enum dayWeek {
    SEXTA = "Sexta",
    SABADO = "Sábado",
    DOMINGO = "Domingo"
}


export class Show{
    constructor(
        private id: string,
        private week_day: dayWeek,
        private start_time: number,
        private end_time: number,
        private band_id: string
    ){}

    getId(){
        return this.id;
    }

    getAll(){
        return Show
    }
    
    getWeek_day(){
        return this.week_day

    }

    getStart_time() {
        return this.start_time;
    }

    getEnd_time() {
        return this.end_time;
    }

    setId(id: string) {
        this.id = id;
    }

    setWeek_day(week_day: dayWeek) {
        this.week_day = week_day
    }

    setStart_time(start_time: number) {
        this.start_time = start_time;
    }

    setEnd_time(end_time: number) {
        this.end_time = end_time;
    }

    public static toShowModel(object: any): Show{
        return new Show(object.id, object.week_day, object.start_time, object.end_time, object.banda_id);
    }
}

export interface ShowInputDTO{
    week_day: dayWeek, 
    start_time: number, 
    end_time: number, 
    band_id: string
}

export interface ShowCreateDTO {
    id: string,
    week_day: dayWeek,
    start_time: number,
    end_time: number,
    band_id: string
}