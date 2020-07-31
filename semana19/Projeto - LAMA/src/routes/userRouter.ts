import express from 'express';
import { UserController } from '../controller/UserController';

export const userRouter = express.Router();

const UserController = new UserController();

userRouter.post("/signup", UserController.signup)