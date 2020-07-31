import { UserRole } from '../services/Authenticator';

export class User{

}

export interface UserInputDTO{
    id: string,
    email: string, 
    name: string, 
    password: string, 
    role: UserRole
}