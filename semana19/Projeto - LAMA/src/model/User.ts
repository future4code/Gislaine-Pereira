import { UserRole } from '../services/Authenticator';

export interface UserSignupDTO{
    id: string,
    email: string,
    name: string,
    password: string,
    role: UserRole
}

export interface UserInputDTO{
    email: string, 
    name: string, 
    password: string, 
    role: UserRole
}