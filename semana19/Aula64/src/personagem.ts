export interface Personagem {
    nome: string, 
    vida: number,
    defesa: number, 
    forca: number
}

export const validateCharacter = (input: Personagem):Boolean =>{
    if(!input.nome || input.vida === undefined || input.defesa === undefined || input.forca === undefined
        || input.vida < 0 || input.defesa < 0 || input.forca < 0){
        return false
    }else{
        return true
    }
}
