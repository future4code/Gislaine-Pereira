import express from 'express';
import { BandaController } from './../controller/BandaController';

export const bandaRouter = express.Router();

bandaRouter.post("/registro-banda", new BandaController().register);
bandaRouter.get("/info-banda", new BandaController().getInfoBanda);