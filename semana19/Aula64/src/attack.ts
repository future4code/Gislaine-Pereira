import {validateCharacter, Personagem } from './personagem';

export const performAttack = (
    attacker: Personagem, 
    defender: Personagem, 
    validator: (input:Personagem) => boolean
    ):any =>{
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        return "Invalid Character";
    }else if (attacker.forca > defender.defesa){
        defender.vida -= (attacker.forca - defender.defesa)
        return defender.vida
    }
}