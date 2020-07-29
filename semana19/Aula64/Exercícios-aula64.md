### **ALUNA GISLIANE COSTA PEREIRA**

### Exercício 1
**a)**  
```
export interface personagem {
    nome: string, 
    vida: number,
    defesa: number, 
    forca: number
}
```

**b)**  
```
export const validateCharacter = (input: personagem):Boolean =>{
    if(!input.nome || input.vida === undefined || input.defesa === undefined || input.forca === undefined
        || input.vida < 0 || input.defesa < 0 || input.forca < 0){
        return false
    }else{
        return true
    }
}
```

### Exercício 2
**a)** 
```
test("verifica a resposta quando o personagem vem sem nome", () =>{
    const result = validateCharacter({
        nome: "",
        vida: 3000,
        defesa: 150,
        forca: 200
    })
    expect(result).toBe(false)
})
```
**b)**
Deu erro, pois a interface está esperando um número, então o teste nem chega a rodar
```
 test("verifica a resposta quando persoagem vem com vida vazia", ()=>{
    const result = validateCharacter({
        nome: "Natasha",
        vida: null,
        defesa: 150,
        forca: 200
    })
    expect(result).toBe(false)
})
```
**c)** 
O mesmo probelma que a letra b
```
test("verifica a resposta quando persoagem vem com força vazia", ()=>{
    const result = validateCharacter({
        nome: "Natasha",
        vida: 2000,
        defesa: 150,
        forca: 
    })
    expect(result).toBe(false)
})
```

**d)**
O mesmo probelma que a letra b
```
test("verifica a resposta quando persoagem vem com defesa vazia", ()=>{
    const result = validateCharacter({
        nome: "Natasha",
        vida: 2000,
        defesa: ,
        forca: 300
    })
    expect(result).toBe(false)
})
```

**e)**
```
test("verifica retorno quando um dos parâmetros númericos for igual a 0", ()=>{
    const result = validateCharacter({
        nome: "Natasha",
        vida: 2000,
        defesa: 0,
        forca: 300
    })
    expect(result).toBe(true)
})
```

**f)**
```
test("verifica o retorno quando todos os parâmetros estão corretos", ()=>{
    const result = validateCharacter({
        nome: "Natasha",
        vida: 2000,
        defesa: 150,
        forca: 300
    })
    expect(result).toBe(true)
})
```

### Exercício 3

**a)**
```
export const performAttack = (attacker: Personagem, defender: Personagem):any =>{
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        return "Invalid Character";
    }else if (attacker.forca > defender.defesa){
        defender.vida -= (attacker.forca - defender.defesa)
        return defender.vida
    }
}
```

**b)**
```
export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};
```
**C)**
Quaqndo há inversão de dependências, a função de validar personagem, é chamada como parâmetro da fumnção a ser testada, como validator. 

### Exercício 4

**a)**
```