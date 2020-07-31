import { BaseDatabase } from './BaseDatabase';
import { UserInputDTO } from '../model/User';

export class UserDatabase extends BaseDatabase{

    private static TABLE_NAME = "USERS_LAMA"
    
    public async signup(user: UserInputDTO){
        try {
            await super.getConnection()
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role
            })
            .into(UserDatabase.TABLE_NAME)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}