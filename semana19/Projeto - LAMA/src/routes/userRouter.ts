import express from 'express';
import { UserController } from '../controller/UserController';

export const userRouter = express.Router();

userRouter.post("/signup", new UserController().signup);