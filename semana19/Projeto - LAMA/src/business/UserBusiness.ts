import { UserController } from '../controller/UserController';
import { UserRole } from '../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';
import { UserDatabase } from '../data/UserDatabse';
import { UserSignupDTO } from '../model/User';

export class UserBusiness{
    private userDb = new UserDatabase();

    public async createId(name: string, email: string, password: string, role: UserRole): Promise<string>{
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();
        return id
    }

    public async signup(user: UserSignupDTO) {

        await this.userDb.signup(user);
    }

}