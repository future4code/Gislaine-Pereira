export enum MusicGenre {
    METAL = "Metal",
    SERTANEJO = "Sertanejo",
    CLASSICA = "Classica",
    MPB = "MPB",
    ROCK_NACIONAL = "Rock Nacional"
}

export class Banda{
    constructor(
        private id: string,
        private name: string,
        private music_genre: MusicGenre,
        private responsible: string,
    ){}

    getId(){
        return this.id;
    }

    getAll(){
        return Banda
    }
    getName(){
        return this.name

    }

    getMusic_genre() {
        return this.music_genre;
    }

    getResponsible() {
        return this.responsible;
    }

    setId(id: string) {
        this.id = id;
    }

    setName(name: string) {
        this.name = name
    }

    setMusic_genre(music_genre: MusicGenre) {
        this.music_genre = music_genre;
    }

    setResponsible(responsible: string) {
        this.responsible = responsible;
    }

    public static toBandaModel(object: any): Banda{
        return new Banda(object.id, object.name, object.music_genre, object.responsible);
    }
}

export interface BandaInputDTO{
    name: string, 
    music_genre: MusicGenre, 
    responsible: string, 
}

export interface BandaCreateDTO {
    id: string,
    name: string,
    music_genre: MusicGenre,
    responsible: string,
}

export interface GetBandaDTO {
    name: string,
    id: string,
}

