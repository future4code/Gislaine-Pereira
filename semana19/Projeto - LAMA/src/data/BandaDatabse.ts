import { BaseDatabase } from './BaseDatabase';
import { BandaCreateDTO } from './../model/Banda';


export class BandaDatabase extends BaseDatabase{

    private static TABLE_NAME = "BANDAS_LAMA"
    
    public async create(banda: BandaCreateDTO){
        try {
            await super.getConnection()
            .insert({
                id: banda.id,
                name: banda.name,
                music_genre: banda.music_genre,
                responsible: banda.responsible,
            })
            .into(BandaDatabase.TABLE_NAME)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}