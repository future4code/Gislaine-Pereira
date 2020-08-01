import { Request, Response } from "express";
import HashManager from '../services/HashManager';
import { Authenticator } from '../services/Authenticator';
import { bandaRouter } from '../routes/bandaRouter';
import { BandaInputDTO } from '../model/Banda';
import { BandaBusiness } from './../business/BandaBusiness';
import { BandaCreateDTO } from './../model/Banda';


export class BandaController{
    public async register(req: Request, res: Response){
        try {
            if (!req.body.name || !req.body.music_genre || !req.body.responsible) {
                throw new Error("Invalid input");
            }

            const input: BandaInputDTO = {
                name: req.body.name,
                music_genre: req.body.email,
                responsible: req.body.responsible,
            }

            const bandaBusiness = new BandaBusiness();
            const bandaId = await bandaBusiness.createId(input.name, input.music_genre, input.responsible)

            const banda: BandaCreateDTO ={
                id: bandaId,
                name: input.name,
                music_genre: input.music_genre,
                responsible: input.responsible
            }

            await bandaBusiness.createBanda(banda)

            res.status(200).send("Banda cadastrada com sucesso!")
            
        } catch (error) {
            res.status(400).send({ error: error.message })
        }

    }
}