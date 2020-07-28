import { Usuario, podeComprar } from '../src/podeComprar';

describe('Verificar a função podeComprar', () =>{

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


    test('verifica o retorno quando o saldo é menor que o valor da compra', () => {
        const usuario: Usuario = {
            nome: "Gislaine",
            saldo: 10
        }

        const resultado = podeComprar(usuario, 90)

        expect(resultado).toEqual(undefined)
    })
})
