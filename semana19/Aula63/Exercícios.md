### **ALUNA GISLIANE COSTA PEREIRA**

### Exercício 1
**a)**  
```
export interface Usuario{
    nome: string,
    saldo: number
}
```

**b)**  
```
export function podeComprar(usuario: Usuario, valor: number): Usuario | undefined {
    if (usuario.saldo >= valor) {
        return {
            ...usuario,
            saldo: usuario.saldo - valor
        }
    }
    return undefined
}
```

### Exercício 2
**a)** 
```
test('verifica o retorno quando o saldo é maior que o valor da compra', () =>{
        const usuario: Usuario = {
            nome: "Gislaine",
            saldo: 100
        }
        const resultado = podeComprar(usuario, 30)
        expect(resultado).toEqual({
            ...usuario,
            saldo: 70
        })
    })
```
**b)** 
```
test('verifica o retorno quando o saldo é igual ao valor da compra', () => {
        const usuario: Usuario = {
            nome: "Gislaine",
            saldo: 50
        }

        const resultado = podeComprar(usuario, 50)

        expect(resultado).toEqual({
            ...usuario,
            saldo: 0
        })
    })
```
**c)** 
```
test('verifica o retorno quando o saldo é menor que o valor da compra', () => {
        const usuario: Usuario = {
            nome: "Gislaine",
            saldo: 10
        }

        const resultado = podeComprar(usuario, 90)

        expect(resultado).toEqual(undefined)
    })
```

### Exercício 3

**a)**
Não ficou nenhuma dúvida quanto ao código acima

**b)**
```
function verifyAge(casino: Casino, users: User[]): Result{
    const allowed: User[] = [];
    const unallowed: User[] = [];

    for (const user of users) {
        if(casino.location === LOCATION.BRAZIL){
            if(user.age >= 18){
                allowed.push(user);
            }else{
                unallowed.push(user);
            }
        }else{
            if (user.age >= 21) {
                allowed.push(user);
            } else {
                unallowed.push(user);
            }
        }

        return {
            brasilians:{
                allowed: allowed.filter((user)=>{
                    user.nacionality === NACIONALITY.BRAZILIAN
                }).map((user)=>{
                    user.name
                }),
                unallowed: unallowed.filter((user) => {
                    user.nacionality === NACIONALITY.BRAZILIAN
                }).map((user) => {
                    user.name
                })
            },
            americans:{
                allowed: allowed.filter((user) => {
                    user.nacionality === NACIONALITY.AMERICAN
                }).map((user) => {
                    user.name
                }),
                unallowed: unallowed.filter((user) => {
                    user.nacionality === NACIONALITY.AMERICAN
                }).map((user) => {
                    user.name
                })
            }
        }
    }
}
```
**C)**
O return da função, tive que olhar o ogabarito e mesmo assim está dando erro.
