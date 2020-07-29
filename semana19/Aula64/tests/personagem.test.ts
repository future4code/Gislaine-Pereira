import { Personagem, validateCharacter } from '../src/personagem';

describe("valida as funções de personagem", () =>{

    test("verifica a resposta quando o personagem vem sem nome", () =>{

        const result = validateCharacter({
            nome: "",
            vida: 3000,
            defesa: 150,
            forca: 200
        })
        expect(result).toBe(false)
    })

/*
Testes com probçemas por ter um parâmetro diferente da interface
    test("verifica a resposta quando persoagem vem com vida vazia", ()=>{
        const result = validateCharacter({
            nome: "Natasha",
            vida: null,
            defesa: 150,
            forca: 200
        })
        expect(result).toBe(false)
    })

    test("verifica a resposta quando persoagem vem com força vazia", ()=>{
        const result = validateCharacter({
            nome: "Natasha",
            vida: 2000,
            defesa: 150,
            forca: 
        })
        expect(result).toBe(false)
    })

    test("verifica a resposta quando persoagem vem com defesa vazia", ()=>{
        const result = validateCharacter({
            nome: "Natasha",
            vida: 2000,
            defesa: ,
            forca: 300
        })
        expect(result).toBe(false)
    })
*/

    test("verifica retorno quando um dos parâmetros númericos for igual a 0", ()=>{
        const result = validateCharacter({
            nome: "Natasha",
            vida: 2000,
            defesa: 0,
            forca: 300
        })
        expect(result).toBe(true)
    })

    test("verifica o retorno quando todos os parâmetros estão corretos", ()=>{
        const result = validateCharacter({
            nome: "Natasha",
            vida: 2000,
            defesa: 150,
            forca: 300
        })
        expect(result).toBe(true)
    })
})
