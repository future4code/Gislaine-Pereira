import { BaseDatabase } from './BaseDatabase';
import { UserInputDTO, UserSignupDTO, User } from '../model/User';

export class UserDatabase extends BaseDatabase{

    private static TABLE_NAME = "USERS_LAMA"
    
    public async signup(user: UserSignupDTO){
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

    public async getUserByEmail(email: string): Promise<User>{
        try {
            const result = await this.getConnection()
            .select("*")
            .from(UserDatabase.TABLE_NAME)
            .where({email});

            return User.toUserModel(result[0]);

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}