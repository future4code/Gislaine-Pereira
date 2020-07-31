import { Request, Response } from "express";
import HashManager from '../services/HashManager';
import { UserBusiness } from '../business/UserBusiness';
import { Authenticator } from '../services/Authenticator';
import { UserInputDTO, UserSignupDTO } from '../model/User';

export class UserController{
    public async signup(req: Request, res: Response){
        try {
            if (!req.body.name || !req.body.email || !req.body.password || !req.body.role) {
                throw new Error("Invalid input");
            }
            if (req.body.email.indexOf("@") === -1) {
                throw new Error("Invad email address");
            }
            if (req.body.password.lenght < 6) {
                throw new Error("Invalid password lenght");
            }
            
            
            const userData: UserInputDTO ={
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            }

            const hashManager = new HashManager();
            const hashPassword = await hashManager.hash(userData.password);

            const userBusiness = new UserBusiness;
            const userId = await userBusiness.createId(userData.name, userData.email, userData.password, userData.role)

            const user: UserSignupDTO = {
                id: userId,
                name: userData.name,
                email: userData.email,
                password: hashPassword,
                role: userData.role
            };

            await userBusiness.signup(user);

            const authenticator = new Authenticator();
            const acessToken = authenticator.generateToken({id: userId, role: userData.role})

            res.status(200).send({token: acessToken})

        } catch (error) {
            res.status(400).send({error: error.message})
        }
    }
}