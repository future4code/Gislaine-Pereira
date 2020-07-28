import knex from "knex";
import { BaseDatabase } from './BaseDatabase';

export class UserDatabase {
    private tableName = "User";
       async createUser(id: string, name: string, email: string, password: string) {
        try {
            await this.getConnection().insert(
                {
                    id,
                    name,
                    email,
                    password
                }
            ).into(this.tableName);

        } catch (err) {
            throw new Error(err.sqlMessage || err.message)
        }
    }
}