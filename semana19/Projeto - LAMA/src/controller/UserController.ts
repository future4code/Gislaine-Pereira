import { Request, Response } from "express";

export class UserController{
    public async signup(req: Request, res: Response){
        try {
            const userData ={
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                role: req.body.role
            }
        } catch (error) {
            
        }
    }
}