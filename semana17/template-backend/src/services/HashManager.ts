import * as bcrypt from 'bcryptjs'

// Encripta a senha
export default class HashManager{
// cria o hash    
    public async hash(text:string):Promise<string>{
        const rounds = 12
        const salt = await bcrypt.genSalt(rounds)
        const cipherText = await bcrypt.hash(text,salt)

        return cipherText
    }

//Compara as senhas
    public async compare(text:string, cipherText: string):Promise<boolean>{
        const result = await bcrypt.compare(text, cipherText)
        return result
    }
}