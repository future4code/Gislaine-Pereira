import { IdGenerator } from './../services/IdGenerator';
import { BandaDatabase } from './../data/BandaDatabse';
import { BandaCreateDTO, MusicGenre } from './../model/Banda';

export class BandaBusiness{
    private bandaDb = new BandaDatabase

    public async createId(name: string, music_genre: MusicGenre, responsible: string): Promise<string> {
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();
        return id
    }

    public async createBanda(banda: BandaCreateDTO){
        await this.bandaDb.create(banda)
    }

    public async getBandaByName(name: string){
        const banda = await this.bandaDb.getBandaByName(name)
        return banda
    }

    public async getBandaById(id: string) {
        const banda = await this.bandaDb.getBandaById(id)
        return banda
    }
}    


