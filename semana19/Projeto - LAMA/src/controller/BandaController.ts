import { Request, Response } from "express";
import { Authenticator } from '../services/Authenticator';
import { BandaInputDTO, BandaCreateDTO } from '../model/Banda';
import { BandaBusiness } from './../business/BandaBusiness';
import { BandaDatabase } from './../data/BandaDatabse';


export class BandaController{
    public async register(req: Request, res: Response){
        try {
            if (!req.body.name || !req.body.music_genre || !req.body.responsible) {
                throw new Error("Invalid input");
            }

            const token = req.headers.token as string;

            const authenticator = new Authenticator();
            const authenticationData = authenticator.getData(token);

            if (authenticationData.role !== "Admin"){
                throw new Error("Você não ter permissão para cadastrar uma nova Banda. Faça Login como Administrador"); 
            }

            const newBanda = new BandaDatabase();
            const nameBanda = await newBanda.bandAlreadyExists(req.body.name);

            if(nameBanda.quantity !== 0){
                throw new Error("Esta banda já está cadastrada!");
            }

            const input: BandaInputDTO = {
                name: req.body.name,
                music_genre: req.body.music_genre,
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