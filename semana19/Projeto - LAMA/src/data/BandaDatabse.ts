import { BaseDatabase } from './BaseDatabase';
import { BandaCreateDTO } from './../model/Banda';


export class BandaDatabase extends BaseDatabase{
    private static COLUMN_NAME_BANDA: string = "name"
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

        await BaseDatabase.destroyConnection();
    }

    public async bandAlreadyExists(name: string): Promise<any> {
        const result = await this.getConnection()
            .raw(`
                SELECT COUNT(*) as quantity FROM ${BandaDatabase.TABLE_NAME}
                WHERE ${BandaDatabase.COLUMN_NAME_BANDA}="${name}"`
            );
        return result[0][0]

        await BaseDatabase.destroyConnection();
    }

}