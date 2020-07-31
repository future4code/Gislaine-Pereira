import { UserController } from '../controller/UserController';
import { UserRole } from '../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';

export class UserBusiness{
    public async signup(name: string, email: string, password: string, role: UserRole): Promise<string>{
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();
        return id
    }
}